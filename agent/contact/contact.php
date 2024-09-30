<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/contact.css">
    <link rel="icon" href="../../images/logo/sezan2.ico">
    <title>CONTACT | 聖傘</title>
</head>

<body>
    <div id="header"></div>
    <div class="h1-title">
        <h1>CONTACT</h1>
        <img src="../../images/mail.png" alt="">
    </div>

    <form action="confirm.php" method="post">

        <h3 id="info">制作や関するお問い合わせ、<br>
        その他お問い合わせは下記のフォームよりご連絡ください。
        </h3>

        <div class="section name">
            <div class="raw-name">
                <h2>お名前<span class="required">必須</span></h2>
                <input type="text" name="name" placeholder="名前を入力" required>
            </div>
            <div class="hurigana">
                <h2>ふりがな<span class="required">必須</span></h2>
                <input type="text" name="hurigana" placeholder="ふりがなを入力" required>
            </div>
        </div>

        <div class="section company">
            <h2>貴社名</h2>
            <input type="text" name="company" placeholder="貴社名を入力">
        </div>

        <div class="section tel">
            <h2>電話番号<span class="required">必須</span></h2>
            <input type="text" name="tel" placeholder="電話番号を入力" required>
        </div>

        <div class="section mail">
            <h2>メールアドレス<span class="required">必須</span></h2>
            <input type="text" name="mail" placeholder="メールアドレスを入力" required>
        </div>

        <div class="section title">
            <h2>件名<span class="required">必須</span></h2>
            <input type="text" name="title" placeholder="件名を入力" required>
        </div>

        <div class="section content">
            <h2>お問い合わせ内容<span class="required">必須</span></h2>
            <textarea name="inquiry" id="contact-content" cols="30" rows="8" placeholder="内容を入力" required></textarea>
        </div>

        <input type="submit" id="submit" value="入力内容の確認" onclick="">

    </form>

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