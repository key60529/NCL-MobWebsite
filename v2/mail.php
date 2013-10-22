<?php


$company     = $_POST["company"];
$person	     = $_POST["person"];
$mail	     = $_POST["mail"];
$contact  	 = $_POST["contact"];
$services	 = $_POST["services"];
$know_us	 = $_POST["know_us"];
$message	 = $_POST["message"];


$to      = "info@newcreativeadv.com";
$subject = "Online Enquiry";
$content = "company: $company \n person: $person \n e-mail: $mail \n contact: $contact \n services: $services \n know_us: $know_us \n other_enquiries: $message \n";
$headers = "From: Online Enquiries";

mb_internal_encoding("UTF-8");

$result = mb_send_mail($to, $subject, $content, $headers);



  print "<script type='text/javascript'>
    alert('Information Sent! Thank you!')
    location.href='http://m.newcreativeadv.com'
    </script>";   

?>
