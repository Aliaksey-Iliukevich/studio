<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-6.6.3/src/Exception.php';
require 'PHPMailer-6.6.3/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer-6.6.3/language/');
$mail->IsHTML(true);        // Set email format to HTML
$mail->isSMTP();           // Set mailer to use SMTP

$name = $_POST['name'];
$age = $_POST['age'];
$phone = $_POST['phone'];
$count = $_POST['count'];
$select = $_POST['select'];

$email_template = 'template_mail.html';
                                      
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;
$mail->Username = 'kinezioBarsw@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'kinezzzzz5'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 587; // TCP port to connect

$mail->setFrom('kinezioBarsw@gmail.com');       // от кого будет уходить письмо?
$mail->addAddress(' vikkipvv14@gmail.com');     // Кому будет уходить письмо 

$body = file_get_contents($email_template);
$body = str_replace(%name%, $name, $body);
$body = str_replace(%age%, $age, $body);
$body = str_replace(%phone%, $phone, $body);
$body = str_replace(%count%, $count, $body);
$body = str_replace(%select%, $select, $body);

// $mail->Subject = 'Заявка с сайта kineziobar';
// $mail->Body    = '' .$name . ' оставил заявку! <br>Номер телефона ' .$phone. ', <br> Возраст клиента: ' .$age. ', <br> количество желаемых услуг: ' .$count. ', <br> вид выбранной услуги ' .$select;
// $mail->AltBody = '';
mail->msgHTML($body);

$mail->send();

if(!$mail->send()) {
    $message = 'Что-то пошло не так...';
} else {
    // header('location: pages/main/index.html');
    $message = 'Спасбо! Данные отправлены, в ближайшее время с Вами свяжутся.';
}

$response = ["message" => $message];
header('Content type: application/json');
echo json_encode($response);

?>