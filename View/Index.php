<?php

/**
 * Created by PhpStorm.
 * User: Michael
 * Date: 7/20/2016
 * Time: 7:08 PM
 */
include_once 'code/View.php';
include_once 'Model/Video.php';


class IndexView extends View
{
    public function index()
    {
        $video = new Video();
        $s = microtime();
        $video = $video->search('usa');
        $e = microtime();
        echo $e - $s;
        $this->renderTemplate('list', ['videos' => $video]);
    }
}