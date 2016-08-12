<?php
use Silex\Application;

//
// Application setup
//
$app = new Application();

$app->get('/hello/{name}', function ($name) use ($app) {
    return 'Hello '.$app->escape($name);
});

return $app;