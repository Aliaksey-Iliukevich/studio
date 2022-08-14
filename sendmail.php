<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-6.6.3/src/Exception.php';
require 'PHPMailer-6.6.3/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer-6.6.3/language/');
$mail->IsHTML(true);

//от
$mail->setForm('kineziobar.by', 'client');

//кому
$mail->addAddress('aleks.ilykevich@gmail.com');

//тема
$mail->Subject = 'Заявка от клиента';

//тело письма
$body = '<h1>Хочу попасть к Вам!</h1>';
if(trim(!empty($_POST['name']))){
    $body.= '<p>Имя: '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['phone']))){
    $body.= '<p>Телефон: '.$_POST['phone'].'</p>';
}

if(trim(!empty($_POST['count']))){
    $body.= '<p>Кол-во сеансов: '.$_POST['count'].'</p>';
}

if(trim(!empty($_POST['type']))){
    $body.= '<p>На: '.$_POST['type'].'</p>';
}

//Отправка
if (!$mail->send()) {
    $message = 'Произошла ошибка!';
} else{
    $message = 'Заявка принята!';
}

$response = ['message' => $message];
header('Content-type: aplication/json');
echo json_encode($response);
?>
