<?php
    require 'PHPMailer.php';
    require 'SMTP.php';
    require 'Exception.php';

    $name = $_POST['name'];
    $phone = $_POST['phone'];


    $title = 'Повідомлення з контактної форми';
    $body = "
        <h2>Питання з форми сайту</h2>
        <p><b>Iм'я:</b> $name</p>
        <p><b>Номер телефону:</b> $phone</p>
    ";

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $mail->isSMTP();
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth = true;
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

        $mail->Host       = 'smtp.meta.ua';
        $mail->Username   = 'vitadentcenter@meta.ua';
        $mail->Password   = 'kzWcxp39tfM';
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
        $mail->setFrom('vitadentcenter@meta.ua', 'Test');

        $mail->addAddress('vitadentclinic@ukr.net');

        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;

        if ($mail->send()) {$result = 'success';}
        else {$result = 'error';}
    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

    echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>