<?php

require_once "router/Router.php";

$c = new Router();
$c->route($_SERVER['REQUEST_URI']);