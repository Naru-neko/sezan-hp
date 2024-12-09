<?php
    $to = "shoma.naru@gmail.com";
    $subject = "You got a message from contact form.";
    $body = "test";
    $headers = "MIME-Version: 1.0\r\n"
         . "Content-Transfer-Encoding: 8bit\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n"
         . "From: your_email@example.com";

    if (mail($to, $subject, $body, $headers)) {
        $message1 = "お問い合わせが完了しました";
        $message2 = "お問い合わせいただき、ありがとうございます。";
        $message3 = "お問い合わせいただいた内容を確認の上、後日ご連絡させていただきます。";
    } else {
        $message1 = "エラーが発生しました。";
        $message2 = "お手数ですが、もう一度お試しください。";
        $message3 = "";
    }
?>

<html>
  <head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-store">
    <link rel="stylesheet" href="css/complete.css">
    <link rel="stylesheet" href="/tproduction/tproglobal.css">
    <link rel="icon" href="../../images/logo/sezan2.ico">
    <title>mail test</title>
  </head>
  <body>
    <div class="contents">
      <h2><?php echo $message1; ?></h2>
      <h3><?php echo $message2; ?></h3>
      <h3><?php echo $message3; ?></h3>
    </div>


  </body>
</html>