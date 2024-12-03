<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/tproduction/tproglobal.css">
    <link rel="stylesheet" href="/tproduction/component/paging/paging.css">
    <script src="/tproduction/component/paging/paging.js"></script>
    <link rel="icon" href="../../images/logo/sezan2.ico">
    <title>CONTACT | 聖傘</title>
</head>

<body>
    <div class="paging"></div>
    <div class="paging-in"></div>

    <div id="header"></div>

    <main>
        <div class="h1-title">
            <h1>CONTACT</h1>
        </div>
        <h3 id="info">制作に関するお問い合わせ、その他お問い合わせは<br>
        下記メールアドレスまでご連絡ください。
        </h3>
        <h2>contact2@sezan.tokyo</h2>
    </main>

    <div id="footer"></div>

    <script>
        fetch("../component/header/header.html")
            .then((response) => response.text())
            .then((data) => document.querySelector("#header").innerHTML = data);
        fetch("../component/footer/footer.html")
            .then((response) => response.text())
            .then((data) => document.querySelector("#footer").innerHTML = data);
    </script>

    <style>
        html {
            margin: 0;
            padding: 0;
            width: 100%;
        }

        body{
            background-color: #000000;
            width: auto;
            margin: 0;
            padding: 0;
            color: rgb(214, 214, 214);
            font-weight: 300;
        }

        main{
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        h1 {
            font-size: 11vmin;
            color: #444444;
        }

        h2 {
            font-size: 5vmin;
            text-decoration: underline;
        }

        @media screen and (max-width:1250px) {

        }
    </style>

</body>
</html>