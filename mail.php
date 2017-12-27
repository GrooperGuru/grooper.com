<?PHP
$mail_from = "grooperUS.com";
$mail_to = $_POST['e_mail'];
$mail_sub = "Test";
$mail_msg = $_POST['subject'];

mail($mail_to, $mail_sub, $mail_msg);

print "Your message has been sent: </br>$mail_to</br> </p>"

?>
