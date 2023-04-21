<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'pierrestoffe/craft-language-redirector' => 
  array (
    'class' => 'pierrestoffe\\languageredirector\\LanguageRedirector',
    'basePath' => $vendorDir . '/pierrestoffe/craft-language-redirector/src',
    'handle' => 'language-redirector',
    'aliases' => 
    array (
      '@pierrestoffe/languageredirector' => $vendorDir . '/pierrestoffe/craft-language-redirector/src',
    ),
    'name' => 'Language Redirector',
    'version' => '2.0.1',
    'schemaVersion' => '1.0.0',
    'description' => 'Automatically redirect visitors to their preferred language',
    'developer' => 'Pierre Stoffe',
    'developerUrl' => 'https://pierrestoffe.be',
    'documentationUrl' => 'https://github.com/pierrestoffe/craft-language-redirector/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/pierrestoffe/craft-language-redirector/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
    'components' => 
    array (
      'languageRedirectorService' => 'pierrestoffe\\languageredirector\\services\\LanguageRedirectorService',
    ),
  ),
  'craftcms/redactor' => 
  array (
    'class' => 'craft\\redactor\\Plugin',
    'basePath' => $vendorDir . '/craftcms/redactor/src',
    'handle' => 'redactor',
    'aliases' => 
    array (
      '@craft/redactor' => $vendorDir . '/craftcms/redactor/src',
    ),
    'name' => 'Redactor',
    'version' => '3.0.2',
    'description' => 'Edit rich text content in Craft CMS using Redactor by Imperavi.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/redactor/blob/v2/README.md',
  ),
  'sebastianlenz/linkfield' => 
  array (
    'class' => 'lenz\\linkfield\\Plugin',
    'basePath' => $vendorDir . '/sebastianlenz/linkfield/src',
    'handle' => 'typedlinkfield',
    'aliases' => 
    array (
      '@lenz/linkfield' => $vendorDir . '/sebastianlenz/linkfield/src',
    ),
    'name' => 'Typed link field',
    'version' => '2.1.4',
    'description' => 'A Craft field type for selecting links',
    'developer' => 'Sebastian Lenz',
    'developerUrl' => 'https://github.com/sebastian-lenz/',
  ),
  'verbb/formie' => 
  array (
    'class' => 'verbb\\formie\\Formie',
    'basePath' => $vendorDir . '/verbb/formie/src',
    'handle' => 'formie',
    'aliases' => 
    array (
      '@verbb/formie' => $vendorDir . '/verbb/formie/src',
    ),
    'name' => 'Formie',
    'version' => '2.0.18',
    'description' => 'The most user-friendly forms plugin for Craft.',
    'developer' => 'Verbb',
    'developerUrl' => 'https://verbb.io',
    'developerEmail' => 'support@verbb.io',
    'documentationUrl' => 'https://github.com/verbb/formie',
    'changelogUrl' => 'https://raw.githubusercontent.com/verbb/formie/craft-4/CHANGELOG.md',
  ),
  'pwtstage/stage' => 
  array (
    'class' => 'pwtstage\\stage\\Stage',
    'basePath' => $vendorDir . '/pwtstage/stage/src',
    'handle' => 'stage',
    'aliases' => 
    array (
      '@pwtstage/stage' => $vendorDir . '/pwtstage/stage/src',
    ),
    'name' => 'Stage ',
    'version' => '1',
    'description' => 'Description',
    'developer' => 'Roy ',
    'developerUrl' => 'https://craft.com',
    'documentationUrl' => '???',
    'changelogUrl' => '???',
  ),
  'pwtvalidator/validator' => 
  array (
    'class' => 'pwtvalidator\\validator\\Validator',
    'basePath' => $vendorDir . '/pwtvalidator/validator/src',
    'handle' => 'validator',
    'aliases' => 
    array (
      '@pwtvalidator/validator' => $vendorDir . '/pwtvalidator/validator/src',
    ),
    'name' => 'validator',
    'version' => '1',
    'description' => 'validator',
    'developer' => 'roy',
    'developerUrl' => 'https://craft.com',
    'documentationUrl' => '???',
    'changelogUrl' => '???',
  ),
  'acclaro/translations' => 
  array (
    'class' => 'acclaro\\translations\\Translations',
    'basePath' => $vendorDir . '/acclaro/translations/src',
    'handle' => 'translations',
    'aliases' => 
    array (
      '@acclaro/translations' => $vendorDir . '/acclaro/translations/src',
    ),
    'name' => 'Translations',
    'version' => 'v3.2.5',
    'description' => 'Easily launch and manage multilingual Craft websites without having to copy/paste content or manually track updates.',
    'developer' => 'Acclaro',
    'developerUrl' => 'http://www.acclaro.com/',
    'documentationUrl' => 'https://github.com/AcclaroInc/craft-translations/wiki',
    'changelogUrl' => 'https://github.com/AcclaroInc/craft-translations/master/CHANGELOG.md',
    'hasCpSection' => true,
    'components' => 
    array (
      'translationPluginForCraftService' => 'acclaro\\translations\\services\\TranslationsService',
    ),
  ),
);
