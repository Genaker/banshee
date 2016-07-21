<?php
include 'code/Request.php';
include 'code/Router.php';
include 'code/View.php';
include 'Model/Video.php';

$request = new Request();
$router = new Router($request);
echo $viewName = ucfirst($router->getViewName());
echo $class = $viewName.'View';
echo $file = 'View\\'.$viewName.'.php';

require $file;
$view = new $class($request);
$view->index();



