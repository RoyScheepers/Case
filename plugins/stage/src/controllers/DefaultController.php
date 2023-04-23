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
   * api maken die een auto inlaadt   
   * api maken die een model inlaadt gelinkt aan auto 
   * api makne die generatie inlaadt gelinkt aan auto 
   * api maken die motortype inlaadt gelinkt aan auto 
   */
 /* public $apiKey;
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
        ]
      );
  }
};
