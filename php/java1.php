<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8" />
<title>Du är registrerad</title>
<style>

.clearfix {
clear:both;
}
body {
    background-image: radial-gradient(grey, lightseagreen);
    background-color: lightseagreen;
    height: auto;
}
h1 {
    font-size: 70px;
    position: relative;
    top: 250px;
    left:100px;
}
</style>
</head>
<body>
<h1>Tack!<br>Dina uppgifter har registrerats.</h1>
<br />
<?php echo $_POST["submit"];?>

</body>
</html>