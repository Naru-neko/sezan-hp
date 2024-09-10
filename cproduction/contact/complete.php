<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $hurigana = $_POST["hurigana"];
        $company = $_POST["company"];
        $tel = $_POST["tel"];
        $mail = $_POST["mail"];
        $title = $_POST["title"];
        $message = $_POST["inquiry"];
        $to = "shoma_nrunru@icloud.com";
        $subject = "You got a message from contact form.";//日本語文字化け要対応
        $headers = "MIME-Version: 1.0\r\n"
         . "Content-Transfer-Encoding: 8bit\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n"
         . "From: your_email@example.com";
        $body = "名前: $name\nふりがな: $hurigana\n社名: $company\n電話番号: $tel\nメールアドレス: $mail\n件名: $title\n\n$message";
        if (mail($to, $subject, $body, $headers)) {
            $message1 = "お問い合わせが完了しました";
            $message2 = "お問い合わせいただき、ありがとうございます。";
            $message3 = "お問い合わせいただいた内容を確認の上、後日ご連絡させていただきます。";
        } else {
            $message1 = "エラーが発生しました。";
            $message2 = "お手数ですが、もう一度お試しください。";
            $message3 = "";
        }
    } else {
        header("Location: contact.php");
    }
?>

<html>
  <head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/completes.css">
    <link rel="icon" href="../../images/logo/sezan2.ico">
    <title>送信完了 | 聖傘</title>
  </head>
  <body>
    <div class="h1-title">
        <h1>CONTACT</h1>
        <img src="../../images/mail.png" alt="">
    </div>
    <div class="contents">
      <h2><?php echo $message1; ?></h2>

      <h3><?php echo $message2; ?></h3>
      <h3><?php echo $message3; ?></h3>

      <p><a href="contact.php">→ お問い合わせフォームに戻る</a></p>
    </div>

    <div id="footer"></div>
    
    <script>
        fetch("../component/header/header.html")
            .then((response) => response.text())
            .then((data) => document.querySelector("#header").innerHTML = data);
        fetch("../component/footer/footer.html")
            .then((response) => response.text())
            .then((data) => document.querySelector("#footer").innerHTML = data);
    </script>

  </body>
</html>