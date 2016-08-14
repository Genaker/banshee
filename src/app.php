<?php
use Silex\Application;

//
// Application setup
//
$app = new Application();

$app->get('/', function () use ($app) {
    return $app['twig']->render('index.twig');
});

return $app;