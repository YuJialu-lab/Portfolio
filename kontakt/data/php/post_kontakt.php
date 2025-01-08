<?php
if(isset($_POST['kontakt_submit']) AND strlen($_POST['surname']) == 0)
{
  $gender = htmlspecialchars($_POST['gender']);
  $firstName = htmlspecialchars($_POST['first_name']);
  $lastName = htmlspecialchars($_POST['last_name']);
  $company = htmlspecialchars($_POST['company']);
  $street = htmlspecialchars($_POST['street']);
  $zip = htmlspecialchars($_POST['zip']);
  $city = htmlspecialchars($_POST['city']);
  $tel = htmlspecialchars($_POST['tel']);
  $cell = htmlspecialchars($_POST['cell']);
  $website = htmlspecialchars($_POST['website']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);





  // Send E-Mail
  $empfaenger = 'info@nvs-netfonds.de'; // info@nvs-netfonds.de
  $betreff    = 'Neue Nachricht';

  $mailtext   = 'Ihre Nachricht:

  '.$gender.' '.$firstName.' '.$lastName.'
  Firma: '.$company.'
  Adresse: '.$street.', '.$zip.' '.$city.'
  Tel.: '.$tel.'
  Mobil: '.$cell.'
  Webseite: '.$website.'
  E-Mail: '.$email.'

  Nachricht:

  '.$message.'

  -

  If this is spam, please ignore or contact the administrator.';




        $absender   = "NVS Kontaktformular <noreply@nvs-netfonds.de>";

        $headers   = array();
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-type: text/plain; charset=utf-8";
        $headers[] = "From: {$absender}";
        $headers[] = "Reply-To: {$email}";
        $headers[] = "X-Mailer: PHP/".phpversion();

        mail($empfaenger, $betreff, $mailtext,implode("\r\n",$headers));

}

?>
