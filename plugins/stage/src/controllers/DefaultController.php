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
  protected array |int|bool $allowAnonymous = ['index'];

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

  /* 
  public $apiKey;
  public $apiBase;
  public function __construct($config = [])
  {
    $this->apiBase = App::env('WEBSTEEN_API_URL');
    $this->apiKey = App::env('WEBSTEEN_API_KEY');
    $this->guzzleClient = new Client();
  }

 
  
  public function actionIndex()
  {
    $apiURl = $this->guzzleClient->request('GET', $this->apiBase, [
      'headers' => [
        'Accept' => 'application/json',
        'Authorization' => $this->apiKey
      ]
    ]);
    return $apiURl;
  }
  
  
  
  
  */ 
  public function actionIndex(){
   return $this->asJson(
        [
          'success' => true,
          'Car1' => 'audi',          
          'Car2' => 'bmw',  
          'Thijn' => 'is de beste'       
        ]      
      );
  }
};

