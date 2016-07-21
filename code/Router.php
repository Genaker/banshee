<?php

/**
 * Created by PhpStorm.
 * User: Michael
 * Date: 7/20/2016
 * Time: 5:10 PM
 */
class Router
{
    protected $request;
    public $view;

    protected $map =
        [
            'safsdfsaf' => 'error',
            'v' => 'video',
            'q' => 'list',
        ];

    protected $map_exclude =
        [
            'safsdfsaf' => 0,
            'v' => 0,
            'q' => 0,
        ];


    public function __construct($request)
    {
        $this->request = $request;
    }

    public function getViewName()
    {
        if (@$this->map[$this->request->pathArray[0]]) {
            $this->view = $this->map[$this->request->pathArray[0]];
        } else {
            $this->view = 'index';
        }
        if (@$this->map_exclude[$this->request->pathArray[0]] == true) {
            unset($this->request->pathArray[0]);
            $this->request->parseUrl();
        }
        return $this->view;
    }
}