<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<title>Partner werden - NVS Netfonds</title>
	<link rel="shortcut icon" href="../../data/img/favicon.ico">
<link rel="apple-touch-icon" href="../../data/img/favico-nvs.svg">
<link rel="stylesheet"  href="../../data/css/style.css" type="text/css" media="all" />
<script src="../../data/js/jquery-3.4.1.min.js"></script>
<script src="../../data/js/functions.js"></script>
<script src="../../data/js/functions_geschaeftsmodelle.js"></script>
<style>
	.button {
  border: none;
  color: white;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white;
  color: #344357;
  border: 2px solid #344357;
}

.button1:hover {
  background-color: #344357;
  color: white;
}

.form_input_50_right_2 {
	height: 0px;
	width: 0px;
	margin: 0px;
	padding: 0px;
	border: 0px solid grey;
}


	.shadow-box{box-shadow: 1px 1px 8px #00000020;padding: 30px;}
	p{    line-height: 1.6rem;}
	h1,h2,h3,h4{font-family: raleway;font-weight: 500;}
	h1{font-size:50px;}
	.nvs_row{padding: 0 15%;}
	hr{width: 120px;background-color:#77BA55;border: none;margin-bottom: 20px;
    clear: both;
    height: 2px;}
	body{margin:0px;font-family: roboto;
    font-weight: 300;
    color: #676767;}
.nvs_column {
  float: left;
  padding: 30px;
}

.nvs_row:after, .nvs_row_blue:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 1380px) {
 .nvs_row{padding: 0 5%;}
}

@media screen and (max-width: 960px) {
	.nvs_column {width: 89%!important;} .nvs_row{padding: 20px!important;}
}
</style>
</head>
<body>

  <div id="loadMenu">
  </div>

	<div id="newMenuSpacer">
	</div>



	<div class="nvs_row" style="background-image: url(../../data/img/Kontakt_foto.jpg); box-shadow: inset 0 0 0 800px rgba(51, 67, 87, 0.30); background-size: cover;">
			<div class="nvs_column" id="geschaeftsmodelle_1_text" style="width: 70%; max-width: 560px; margin: 80px 0px 80px 0px; float: left; background-color: #FFFFFF; padding: 70px 70px 70px 70px;">
				<h2>Nehmen Sie Kontakt auf</h2><hr style="margin-left: 0px;">
        <p>Füllen Sie kurz das Formular aus – wir kümmern uns um den Rest und beantworten Ihre Anfrage umgehend.</p><br /><br />

				<form action="./#kontakt_post_anker" method="post">

				<select class="select_input_50_left" name="gender">
					<option value="Anrede">Anrede</option>
					<option value="Frau">Frau</option>
					<option value="Herr">Herr</option>
				</select><br clear="all">

				<input type="text" class="form_input_50_left" placeholder="Vorname" name="first_name">
				<input type="text" class="form_input_50_right_2" placeholder="Surname" name="surname">
				<input type="text" class="form_input_50_right" placeholder="Nachname" name="last_name">

				<input type="text" class="form_input" placeholder="Firma" name="company">

				<input type="text" class="form_input" placeholder="Straße Hausnummer" name="street">

				<input type="text" class="form_input_50_left" placeholder="PLZ" name="zip">
				<input type="text" class="form_input_50_right" placeholder="Ort" name="city">

				<input type="text" class="form_input_50_left" placeholder="Tel." name="tel">
				<input type="text" class="form_input_50_right" placeholder="Mobil" name="cell">

				<input type="text" class="form_input" placeholder="Website" name="website">

				<input type="email" class="form_input" placeholder="E-Mail" required="required" name="email">

				<textarea class="form_input" placeholder="Ihre Nachricht" style="height: 160px;" name="message"></textarea>

				<a name="kontakt_post_anker"></a>

				<p style="font-size: 14px; margin-top:15px;">Mit dem vorstehenden Kontaktformular können Sie Ihre Anfrage an uns richten. Ihre Daten werden über unseren Provider per eMail an uns weitergeleitet und nach Beantwortung umgehend gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen. Eine Nutzung zu einem anderen Zweck oder eine Datenweitergabe an Dritte findet nicht statt. Sie können Ihre Einwilligung zur Datenerhebung und Datennutzung jederzeit durch Nachricht an uns widerrufen. Im Falle des Widerrufs werden Ihre Daten umgehend gelöscht. Bitte entnehmen Sie weitere Informationen unserer <a href="../datenschutz/" style="color: #77BA55;">Datenschutzerklärung</a>.</p>

				<?php
				if(isset($_POST['kontakt_submit']))
				{
					include('../data/php/post_kontakt.php');
					?>
					<p style="padding: 25px; color: #77BA55; font-size: 16px; font-weight: 500;">Ihre Nachricht wurde abgeschickt.</p>
					<?php
				}else{
					?>
					<p style="padding: 25px; font-size: 14px; font-weight: 400;"><input type="checkbox" id="dsgvo_check" name="dsgvo_check" required="required"><label for="dsgvo_check">&nbsp;&nbsp;Einwilligungserklärung: Hiermit stimme ich der Verarbeitung meiner Daten zur Beantwortung meiner Anfrage zu.</label></p>
					<input type="submit" class="login_submit" value="Absenden" name="kontakt_submit">
					<?php
				}

				?>



			</form>
			</div>
	</div>



</div>


<div id="loadFooter">
</div>


<a href="#" onclick="hideLogin(); return false;"><div id="login">
</div></a>

<div id="login_white">

	<h2>Partner Login</h2>

	<form action="https://www.fundsware.de/fwpro/pages/LoginPage" method="post" novalidate="novalidate" target="_blank">

	<input class="login_input" name="username" type="text" value="" placeholder="Benutzer"/>

	<input class="login_input" name="password" type="password" value="" placeholder="Passwort"/>

	<input class="login_submit" type="submit" value="Login"/>

	</form>

	<div id="login_description">
		<div id="login_description_inner">
			<a href="https://secure-depot.de/finfire-direct/">Kunden online in die Vermögensverwaltung vermitteln - ohne Ausdruck und ohne Unterschriften</a>
		</div>
	</div>

	<a href="#" onclick="hideLogin(); return false;"><div id="login_close"></div></a>

</div>


</body>
</html>
