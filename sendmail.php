<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "phpmailer/src/Exception.php";
require "phpmailer/src/PHPMailer.php";

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";
$mail->setLanguage('en', "phpmailer/language/");
$mail->IsHTML(true);

$mail->setFrom('ajdarzbs@gmail.com', "Aidar");
$mail->addAddress('ajdarzbs@gmail.com');
$mail->Subject = "Aidar #HH-403";

$body = "<h1>Your book:</h1>";
if(trim(!empty($_POST["name"]))){
    $body.="<p><strong>Name: </strong> ".$_POST["name"]."</p>";
}
if(trim(!empty($_POST["email"]))){
    $body.="<p><strong>E-mail: </strong> ".$_POST["email"]."</p>";
}
if(trim(!empty($_POST["time"]))){
    $body.="<p><strong>Time: </strong> ".$_POST["time"]."</p>";
}
if(trim(!empty($_POST["message"]))){
    $body.="<p><strong>Message: </strong> ".$_POST["message"]."</p>";
}





if(!$mail->send()){
    $message = "Errorrr";
}else{
    $message = "Successful";
}

$response = ["message" => $message];

header("Content-type: application/json");
echo json_encode($response);



?>