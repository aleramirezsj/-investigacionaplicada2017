<?php
//importamos el uso de la clase ControladorPrincipal
require_once("app/core/ControladorPrincipal.php");
ControladorPrincipal::encabezadoHtml();
if (ControladorPrincipal::chequeoLogin())
{
    ControladorPrincipal::enlaces();
    ControladorPrincipal::index();
}


