<?php

class View
{
    public function render($pagina)
    {
        include_once "view/pages/header.html";
        include_once "view/pages/" . $pagina . ".html";
        include_once "view/pages/footer.html";
    }
}