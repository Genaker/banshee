<?php
/**
 * Created by PhpStorm.
 * User: Michael
 * Date: 7/20/2016
 * Time: 5:12 PM
 */
class Request
{
    public $get;
    public $post;
    public $request;
    public $coockies;
    public $server;
    public $pathArray = [];
    
    public function __construct()
    {
        $this->get = $_GET;
        $this->post = $_POST;
        $this->parseUrl();
        $this->request = $_REQUEST;
        $this->server = $_SERVER;
    }
    
    public function get($key)
    {
        return $this->request[$key];
    }

    public function parseUrl()
    {
        if($_SERVER['PATH_INFO']){
            if (!$this->pathArray){
        $pars = explode('/',trim($_SERVER['PATH_INFO'], '/'));
        $this->pathArray = $pars;

            }

        for($i=key($this->pathArray); $i < count($this->pathArray); $i+=2)
        {
            $_REQUEST[$this->pathArray[$i]] = @$this->pathArray[$i+1];
        }
    }
        return $this;
    }
    
    public function getByPos($i)
    {
        return array_values($this->request)[$i];
    }
}