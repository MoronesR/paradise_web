<?php
    require_once("../classes/graficas.php");
    
    $obj=new chart();     
    switch($_GET['type']){
        case 0:
            echo $obj->getChartDest();
            break;
        case 1:
            echo $obj->getChartStatus();
            break;
        case 2:
            echo $obj->getChartgenero();
            break;
        case 3:
            echo $obj->getLugType();
            break;
        case 4:
            echo $obj->getLugMun();
            break;
    }