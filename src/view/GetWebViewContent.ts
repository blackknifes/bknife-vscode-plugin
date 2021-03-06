const webviewHtml =
    `<!doctype html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@title@</title>
</head>

<body>
    <div id="app"></div>
    <script src="@src@"></script>
</body>

</html>`;

export default function (title: string, src: string) {
    return webviewHtml.replace("@title@", title).replace("@src@", src);
}