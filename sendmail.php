<?php>
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'phpmailer/src/Exception.php';
   require 'phpmailer/src/PHPMailer.php';

   $mail = new PHPMailer(tru);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'phpmailer/language'/);
   $mail->IsHTML(true);

//    От кого письмо 

    $mail->setForm('info@fls.guru', 'Фрилансер по жизни');
    // Кому отправить
    // $mail->addAddress('codefls.guru'); 
    // Тема письма
    $mail->Subject = 'Привет! это фрилансер по жизни';

    // Тело письма 
    $body = '<h1>Встречай супер письмо!</h1>';

    if(trin(!enpty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name']. '</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email']. '</p>';
    }
    if(trim(!empty($_POST['tel']))){
        $body.='<p><strong>Phone:</strong> '.$_POST['tel']. '</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Сообщение:</strong> '.$_POST['message']. '</p>';
    }

    $mail->body = $body;
    // Отправляем
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];
    header('content-type: application/json');
    echo json_encode($response);
    ?>
