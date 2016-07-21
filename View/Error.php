<?php

/**
 * Created by PhpStorm.
 * User: Michael
 * Date: 7/21/2016
 * Time: 11:58 AM
 */
include_once 'code/View.php';
include_once 'Model/Video.php';

class ErrorView extends View
{
    public function index()
    {
        $message = "Eggor Page";
        $this->renderTemplate('error', ['mesg' => $message]);
    }
}