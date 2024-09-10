<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/confirms.css">
    <link rel="icon" href="../../images/logo/sezan2.ico">
    <title>確認 | 聖傘</title>
</head>

<body>

    <div id="header"></div>

    <div class="h1-title">
        <h1>CONTACT</h1>
        <img src="../../images/mail.png" alt="">
    </div>

    <form action="complete.php" method="post">

        <h4>以下の内容で送信してよろしいですか？</h4>

        <div class="section">
            <h2>お名前</h2>
            <h3><?php echo $_POST["name"]; ?></h3>
        </div>

        <div class="section">
            <h2>ふりがな</h2>
            <h3><?php echo $_POST["hurigana"]; ?></h3>
        </div>

        <div class="section">
            <h2>会社名</h2>
            <h3><?php echo $_POST["company"]; ?></h3>
        </div>

        <div class="section">
            <h2>電話番号</h2>
            <h3><?php echo $_POST["tel"]; ?></h3>
        </div>

        <div class="section">
            <h2>メールアドレス</h2>
            <h3><?php echo $_POST["mail"]; ?></h3>
        </div>

        <div class="section">
            <h2>件名</h2>
            <h3><?php echo $_POST["title"]; ?></h3>
        </div>

        <div class="section">
            <h2>お問い合わせ内容</h2>
            <h3><?php echo $_POST["inquiry"]; ?></h3>
        </div> 
    
        <input type="hidden" name="name" value="<?php echo $_POST["name"]; ?>">
        <input type="hidden" name="hurigana" value="<?php echo $_POST["hurigana"]; ?>">
        <input type="hidden" name="company" value="<?php echo $_POST["company"]; ?>">
        <input type="hidden" name="tel" value="<?php echo $_POST["tel"]; ?>">
        <input type="hidden" name="mail" value="<?php echo $_POST["mail"]; ?>">
        <input type="hidden" name="title" value="<?php echo $_POST["title"]; ?>">
        <input type="hidden" name="inquiry" value="<?php echo $_POST["inquiry"]; ?>">

        <button class="button back" type="button" onclick="history.back()">戻る</button>
        
        <input class="button submit" type="submit" value="送信" onclick="">

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