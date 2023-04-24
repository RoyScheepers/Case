<?php

/**
 * Stage  plugin for Craft CMS 3.x
 *
 * Description
 *
 * @link      https://craft.com
 * @copyright Copyright (c) 2022 Roy 
 */

namespace pwtstage\stage\controllers;


use craft\web\Controller;

use GuzzleHttp\Client;
use craft\helpers\App;




class DefaultController extends Controller
{
  // Protected Properties
  // =========================================================================

  /**
   * @var    bool|array Allows anonymous access to this controller's actions.
   *         The actions must be in 'kebab-case'
   * @access protected
   */
  protected array |int|bool $allowAnonymous = ['makes', 'makesinfo', 'makesgeneration', 'makesenginetype'];

  // Public Methods
  // =========================================================================

  /**
   * Handle a request going to our plugin's index action URL,
   * e.g.: actions/stage/default
   *
   * @return mixed
   */

  /**
   * verbinding maken met de api 
   * auto's uit de api laden in php 
   * modellen uit api laden in php
   * generatie ui api laden in php 
   * motor type uit api laden in php 
   * 
   * gegevens ombouwen zodat javaScript het in html kan inladen 
   * event listener maken die de gegevens inlaadt in de drop down 
   * 
   * gegevens tonen in het tekst veld die bij de auto hoort 
   * vermogen voor tunen uit api halen 
   * vermogen na tunen uit api halen 
   * koppel info voor tunen uit api halen 
   * koppel info na tunen uit api halen 
   * motor specs uit api halen 
   */
  public $apiKey;
  public $apiBase;
  public function actionMakes()
  {
    //fetches data from api and converts it to a json array containing id and name of a car
    $this->apiBase = 'https://api.dyno-chiptuningfiles.com/v1/makes?power_type=pk';
    $this->apiKey = App::env('WEBSTEEN_API_KEY');
    $client = new Client();
    $response = $client->request('GET', $this->apiBase, [
      'headers' => [
        'Accept' => 'application/json',
        'Authorization' => $this->apiKey
      ]
    ]);
    $responseBody = json_decode($response->getBody(), true);
    $CarArray = array();
    foreach ($responseBody['data'] as $x => $car) {
      array_push($CarArray,  ['id' => $car['id'], 'name' => $car['name']]);
    }
    return json_encode($CarArray);
  }

  public function actionMakesinfo($carId)
  {
    $makeId = $carId;
    $this->apiBase = 'https://api.dyno-chiptuningfiles.com/v1/makes/' . $makeId . '?power_type=pk';
    $this->apiKey = App::env('WEBSTEEN_API_KEY');
    $client = new Client();

    $response = $client->request('GET', $this->apiBase, [
      'headers' => [
        'Accept' => 'application/json',
        'Authorization' => $this->apiKey
      ]
    ]);
    $responseBody = $response->getBody();
    return $responseBody;
  }

  public function actionMakesgeneration($generationId)
  {
    print_r('hello');
  }

  public function actionMakesenginetype($engineId)
  {
    print_r('hello');
  }
};
