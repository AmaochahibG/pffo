require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host       = 'smtp.gmail.com';
$mail->SMTPAuth   = true;
$mail->Username   = 'portfolio.amao@gmail.com';
$mail->Password   = 'okcp ifmz nhfg silf';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port       = 587;

$mail->setFrom('portfolio.amao@gmail.com', 'Portfolio Test');
$mail->addAddress('portfolio.amao@gmail.com');
$mail->Subject = "Test Email";
$mail->Body    = "Ceci est un test d'envoi depuis PHP.";

if ($mail->send()) {
    echo "✅ Email envoyé avec succès !";
} else {
    echo "❌ Erreur : " . $mail->ErrorInfo;
}
