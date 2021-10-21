<?php
require_once "SkilledPerson.php";

$mani = new SkilledPerson();
$mani->fname = "Manigandan";
$mani->lname = "Elumalai";

echo '<pre>';
var_dump($mani);
echo '</pre>';