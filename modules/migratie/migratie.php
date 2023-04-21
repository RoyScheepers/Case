<?php

namespace craft\contentmigrations;

use Craft;
use craft\db\Migration;
use craft\db\Query;
use craft\elements\Category;
use craft\elements\Entry;
use craft\errors\ElementNotFoundException;
use craft\records\EntryType;
use craft\services\Categories;
use yii\db\Exception;

/**
 * m230308_093534_joomla_craft migration.
 */
class m230308_093534_joomla_craft extends Migration
{
	/**
	 * @inheritdoc
	 */
	public function safeUp(): bool
	{
		$klantenRows = (new Query())
			->select([
				'customer_id',
				'customer_name',
				'customer_contact',
				'customer_email'
			])
			->from(['{{pwt_pwtdashboard_customer}}'])
			->where(['!=', 'customer_name', 'Unassigned websites'])
			->andwhere(['!=', 'customer_email', 'PLACEHOLDER@PLACEHOLDER'])
			->andwhere(['!=', 'customer_contact', 'PLACEHOLDER@PLACEHOLDER'])
			->all();	

		// deletes Entry 'klanten'
		foreach ($klantenRows as $deleteKlant) {
			$deleteKlantEntry = Entry::find()->section('klanten')->oldjoomlaklantid($deleteKlant['customer_id'])->anyStatus()->one();
			if ($deleteKlantEntry) {
				try {
					Craft::$app->getElements()->deleteElement($deleteKlantEntry);
				} catch (ElementNotFoundException|\yii\base\Exception|\Throwable $e) {
				}
			}
		}
		// creates Entry 'klanten'
		foreach ($klantenRows as $createKlant) {
			$klant_entry = Entry::find()->section('klanten')->oldjoomlaklantid($createKlant['customer_id'])->one();
			if (!$klant_entry || !$klant_entry->id) {
				$klant_entry = new Entry();
				$klantenEntryType = EntryType::find()->where(['handle' => 'klantenSectie'])->one();
				$klant_entry->sectionId = $klantenEntryType->getAttribute('sectionId');
				$klant_entry->typeId = $klantenEntryType->getAttribute('id');
				$klant_entry->title = $createKlant['customer_name'];
				$klant_entry->contactpersoon = $createKlant['customer_contact'];
				$klant_entry->emailadres = $createKlant['customer_email'];
				$klant_entry->oldjoomlaklantid = $createKlant['customer_id'];
				try {
					Craft::$app->getElements()->saveElement($klant_entry);
				} catch (ElementNotFoundException|\yii\base\Exception|\Throwable $e) {
				}
			}
		}
		$hostingRows = (new Query())
			->select([
				'hosting'
			])
			->distinct()
			->from(['{{pwt_pwtdashboard_website}}'])
			->all();

		$hostGroup = (new Categories)->getGroupByHandle('hosting');
		// deletes category 'hosting'
		foreach ($hostingRows as $deleteHostGroup) {
			$deleteHostCategory = Category::find()->group('hosting')->where(['title' => $deleteHostGroup['hosting']])->one();
			if ($deleteHostCategory && $deleteHostCategory->groupId === $hostGroup->id) {
				try {
					Craft::$app->getElements()->deleteElement($deleteHostCategory);
				} catch (ElementNotFoundException|\yii\base\Exception|\Throwable $e) {
				}
			}
		}
		//creates category 'hosting'
		foreach ($hostingRows as $host) {
			$hostCategory = Category::find()->group('hosting')->where(['title' => $host['hosting']])->one();
			if (!$hostCategory) {
				$hostCategory = new Category();
				$hostCategory->groupId = $hostGroup->id;
				$hostCategory->title = $host['hosting'];
				try {
					Craft::$app->getElements()->saveElement($hostCategory);
				} catch (ElementNotFoundException|\yii\base\Exception|\Throwable $e) {
				}
			}
		}
		$productRows = (new Query())
			->select([
				'plan'
			])
			->distinct()
			->from(['{{pwt_pwtdashboard_website}}'])
			->all();

		$productGroup = (new Categories)->getGroupByHandle('producten');
		// deletes category 'product'
		foreach ($productRows as $deleteProduct) {
			$deleteProductCategory = Category::find()->group('Producten')->where(['title' => $deleteProduct['plan']])->one();
			if ($deleteProductCategory && $deleteProductCategory->groupId === $productGroup->id) {
				try {
					Craft::$app->getElements()->deleteElement($deleteProductCategory);
				} catch (ElementNotFoundException|\yii\base\Exception|\Throwable $e) {
				}
			}
		}
		// creates category 'product'
		foreach ($productRows as $newProduct) {
			$productCategory = Category::find()->group('Producten')->where(['title' => $newProduct['plan']])->one();
			if (!$productCategory) {
				$productCategory = new Category();
				$productCategory->groupId = $productGroup->id;
				$productCategory->title = $newProduct['plan'];
				try {
					Craft::$app->getElements()->saveElement($productCategory);
				} catch (ElementNotFoundException|\yii\base\Exception|\Throwable $e) {
				}
			}
		}
		$itemRows = (new Query())
			->select([
				'pwt_pwtdashboard_website.published',
				'id',
				'hosting',
				'plan',
				'url',
				'htacces_username',
				'htacces_password',
				'remark',
				'invoice',
				'billing_date',
				'pwt_pwtdashboard_website.customer_id',
				'pwt_pwtdashboard_customer.customer_email',
				'pwt_pwtdashboard_customer.customer_id'
			])
			->from(['{{pwt_pwtdashboard_website}}'])
			->leftjoin('{{pwt_pwtdashboard_customer}}', '[[pwt_pwtdashboard_customer.customer_id]] = [[pwt_pwtdashboard_website.customer_id]]')
			->where(['=' , 'pwt_pwtdashboard_website.published' , '1' ] )
			->all();
			
		// deletes Entry 'items'
		foreach ($itemRows as $deleteSection) {
			$deleteItemsEntry = Entry::find()->section('items')->oldJoomlaId($deleteSection['id'])->anyStatus()->one();
			if ($deleteItemsEntry) {
				try {
					Craft::$app->getElements()->deleteElement($deleteItemsEntry);
				} catch (ElementNotFoundException|\yii\base\Exception|\Throwable $e) {
				}
			}
		} 			
		//creates Entry 'items'
		foreach ($itemRows as $item) {
			$url = strpos($item['url'], 'http', 0);			
			($url === false ? $url = 'https://' . $item['url'] : $url = $item['url']);	
			($item['hosting'] === "" ? $new_hostCategory = [] : $new_hostCategory = Category::find()->group('hosting')->title($item['hosting'])->one());
			$published = ($item['invoice'] === '1' ? $published = true : false);
			$items_entry = Entry::find()->section('items')->oldJoomlaId($item['id'])->anyStatus()->one();
			$new_klant_entry = Entry::find()->section('klanten')->oldjoomlaklantid($item['customer_id'])->one();
			$new_productCategory = Category::find()->group('Producten')->where(['title' => $item['plan']])->one();
			if (!$items_entry || !$items_entry->id) {
				$items_entry = new Entry();
				$itemsEntryType = EntryType::find()->where(['handle' => 'itemSectie'])->one();
				$items_entry->typeId = $itemsEntryType->getAttribute('id');
				$items_entry->sectionId = $itemsEntryType->getAttribute('sectionId');
				$items_entry->enabled = $published;
				$items_entry->setFieldValue('oldJoomlaId', $item['id']);
				$items_entry->setFieldValue('klant', isset($new_klant_entry->id) ? [$new_klant_entry->id] : null);
				$items_entry->setFieldValue('websiteUrl', $url);
				$items_entry->setFieldValue('pakket', [$new_productCategory->id]);
				$items_entry->setFieldValue('factuur', $item['invoice']);
				$items_entry->setFieldValue('volgendeFactuur', $item['billing_date'] !== '0000-00-00 00:00:00' ? $item['billing_date'] : null);
				$items_entry->setFieldValue('hosting', isset($new_hostCategory->id) ? [$new_hostCategory->id] : null);
				$items_entry->setFieldValue('htaccessGebruikersnaam', $item['htacces_username']);
				$items_entry->setFieldValue('htaccessWachtwoord', $item['htacces_password']);
				$items_entry->setFieldValue('opmerking', $item['remark']);
				try {
					Craft::$app->getElements()->saveElement($items_entry);
				} catch (ElementNotFoundException|\yii\base\Exception|\Throwable $e) {
				}
			}
		}	
		return true;
	}

	/**
	 * @inheritdoc
	 */
	public function safeDown(): bool
	{
		echo "m230308_093534_joomla_craft cannot be reverted.\n";
		return false;
	}
}