<?php

require_once "view/View.php";

class Router
{
    public function route($uri)
    {
        $route = explode("/", $uri)[1];

        switch ($route)
        {
            case 'home':
            case 'onpriceweb':
            case '':
                $this->redirect('listProducts');
                break;

            case 'help':
            case 'listStores':
            case 'listProducts':
                $this->redirect($route);
                break;

            default:
                break;
        }
    }

    private function redirect($page)
    {
        $v = new View();
        $v->render($page);
    }
}