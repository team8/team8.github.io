<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "calebtan23@gmail.com"
$subject = "Contact Us Message";

mail ($to, $subject, $message, "From: " . $name);
echo "Your Message has been sent";


?>