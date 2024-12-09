<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $hurigana = $_POST["hurigana"];
        $company = $_POST["company"];
        $tel = $_POST["tel"];
        $mail = $_POST["mail"];
        $title = $_POST["title"];
        $message = $_POST["inquiry"];
        $to = "contact2@sezan.tokyo";
        $subject = "You got a message from contact form.";//日本語文字化け要対応
        $headers = "MIME-Version: 1.0\r\n"
         . "Content-Transfer-Encoding: 8bit\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n"
         . "From: contact2@sezan.tokyo";
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
        header("Location: _contact.php");
    }
?>

<html>
  <head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-store">
    <link rel="stylesheet" href="css/completes.css">
    <link rel="stylesheet" href="/cproduction/cproglobal.css">
    <link rel="icon" href="../../images/logo/sezan2.ico">
    <title>送信完了 | 聖傘</title>
  </head>
  <body>
    <div id="humburger"></div>
    <div class="h1-title">
        <h1>送信完了</h1>
    </div>
    <div class="contents">
      <h2><?php echo $message1; ?></h2>

      <h3><?php echo $message2; ?></h3>
      <h3><?php echo $message3; ?></h3>

      <p><a href="contact.php">→ お問い合わせフォームに戻る</a></p>
    </div>

    <div id="footer"></div>

    <script>
        fetch("../component/header/humburger.html")
            .then((response) => response.text())
            .then((data) => document.querySelector("#humburger").innerHTML = data);
        fetch("../component/footer/footer.html")
            .then((response) => response.text())
            .then((data) => document.querySelector("#footer").innerHTML = data);
    </script>

  </body>
</html>