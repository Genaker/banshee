<?php
/**
 * Created by PhpStorm.
 * User: Michael
 * Date: 7/20/2016
 * Time: 6:47 PM
 */
abstract class View{
    
    public $request;
    
    public function __construct($request)
    {
         $this->request = $request;
    }

    abstract function index();

    public function renderTemplate($template, $vars = []){
        foreach ($vars as $key => $value)
        {
            $$key = $value;
        }

        include './template/'.$template.'.phtml';
    }
    

}