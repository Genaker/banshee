<?php
use Silex\Provider;

define('SRC_PATH', __DIR__.'/../src');

$app->register(new Provider\TwigServiceProvider(), array(
    'twig.path' => [SRC_PATH.'/template'],
));

$app->register(new Provider\AssetServiceProvider(), array(
    'assets.version' => 'v1',
    'assets.version_format' => '%s?version=%s',
    'assets.named_packages' => array(
        'css' => array('version' => 'css2', 'base_path' => '/web/assets/'),
        'images' => array('base_urls' => array('http://video.loc/')),
    ),
));

$app->extend('twig', function($twig, $app) {
    $twig->addGlobal('path', '/');
    return $twig;
});