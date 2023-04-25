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
  protected array |int|bool $allowAnonymous = ['makes', 'models', 'makesgeneration', 'makesenginetype', 'getecu'];

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
    //fetches makes from api and builds it to a json array containing id and name of a car
    // for testing use this URL: https://local.websteen.nl/Api/available/makes
    $this->apiBase = 'https://api.dyno-chiptuningfiles.com/v1/makes?power_type=pk';
    $this->apiKey = App::env('WEBSTEEN_API_KEY');
    $client = new Client();
    $carResponse = $client->request('GET', $this->apiBase, [
      'headers' => [
        'Accept' => 'application/json',
        'Authorization' => $this->apiKey
      ]
    ]);
    $carResponseBody = json_decode($carResponse->getBody(), true);
    $CarArray = array();
    foreach ($carResponseBody['data'] as $carItem) {
      array_push($CarArray,  ['id' => $carItem['id'], 'name' => $carItem['name']]);
    }
    return json_encode($CarArray);
  }

  public function actionModels($carId)
  {
    // to fetch models you need the id of a make 
    // fetches models from api and builds it to a json array containing id and name of a models
    // for testing use this URL:https://local.websteen.nl/Api/available/models/2

    $modelId = $carId;
    $this->apiBase = 'https://api.dyno-chiptuningfiles.com/v1/makes/' . $modelId . '/models?power_type=pk';
    $this->apiKey = App::env('WEBSTEEN_API_KEY');
    $client = new Client();

    $infoResponse = $client->request('GET', $this->apiBase, [
      'headers' => [
        'Accept' => 'application/json',
        'Authorization' => $this->apiKey
      ]
    ]);
    $infoResponseBody = json_decode($infoResponse->getBody(), true);
    $infoArray = array();
    foreach ($infoResponseBody['data'] as $infoItem) {
      array_push($infoArray,  ['id' => $infoItem['id'], 'name' => $infoItem['name']]);
    }
    return json_encode($infoArray);
  }

  public function actionMakesgeneration($modelId)
  {
    // to fetch a generation you need the id of a model 
    // fetches generations of model from api and builds it to a json array containing id and name of a model
    // for testing use this URL:https://local.websteen.nl/Api/available/makesgeneration/631
    $genId = $modelId;
    $this->apiBase = 'https://api.dyno-chiptuningfiles.com/v1/models/' . $genId . '/generations?power_type=pk';
    $this->apiKey = App::env('WEBSTEEN_API_KEY');
    $client = new Client();

    $generationResponse = $client->request('GET', $this->apiBase, [
      'headers' => [
        'Accept' => 'application/json',
        'Authorization' => $this->apiKey
      ]
    ]);
    $generationResponseBody = json_decode($generationResponse->getBody(), true);
    $generationArray = array();
    foreach ($generationResponseBody['data'] as $genItem) {
      array_push($generationArray,  ['id' => $genItem['id'], 'name' => $genItem['name']]);
    }
    return json_encode($generationArray);
  }

  public function actionMakesenginetype($generationId)
  {
    // to fetch a enginetype you need the id of a generation
    // fetches engine of generation of a model from api and builds it to a json array containing id and name of a generation
    // for testing use this URL: https://local.websteen.nl/Api/available/makesenginetype/972
    $engId = $generationId;
    $this->apiBase = 'https://api.dyno-chiptuningfiles.com/v1/generations/' . $engId . '/engines?power_type=pk';
    $this->apiKey = App::env('WEBSTEEN_API_KEY');
    $client = new Client();

    $engineResponse = $client->request('GET', $this->apiBase, [
      'headers' => [
        'Accept' => 'application/json',
        'Authorization' => $this->apiKey
      ]
    ]);
    $engineResponseBody = json_decode($engineResponse->getBody(), true);
    $engineArray = array();
    foreach ($engineResponseBody['data'] as $engItem) {
      array_push($engineArray,  ['id' => $engItem['id'], 'name' => $engItem['name']]);
    }
    return json_encode($engineArray);
  }

  public function actionGetecu($engineId)
  {
    // to fetch a enginetype you need the id of a generation
    // fetches engine of generation of a model from api and builds it to a json array containing id and name of a generation
    // for testing use this URL: https://local.websteen.nl/Api/available/makesecutype/5839
    $ecuId = $engineId;
    $this->apiBase = 'https://api.dyno-chiptuningfiles.com/v1/engines/' . $ecuId . '/ecus?power_type=pk';
    $this->apiKey = App::env('WEBSTEEN_API_KEY');
    $client = new Client();

    $engineResponse = $client->request('GET', $this->apiBase, [
      'headers' => [
        'Accept' => 'application/json',
        'Authorization' => $this->apiKey
      ]
    ]);
    $ecuResponseBody = json_decode($engineResponse->getBody(), true);
    $ecuArray = array();

    foreach ($ecuResponseBody['meta'] as $ecuItem) {
      array_push($ecuArray,  [
        'power_standaard' => $ecuItem['power']['standard'],
        'power_stage_1' => $ecuItem['power']['stage_1'],
        'torque_standaard' => $ecuItem['torque']['standard'],
        'torque_stage_1' => $ecuItem['torque']['stage_1']
      ]);
    }
    return json_encode($ecuArray);
  }
};
