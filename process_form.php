<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = htmlspecialchars(trim($_POST['username'] ?? ''), ENT_QUOTES, 'UTF-8');
    $email    = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $subject  = htmlspecialchars(trim($_POST['subject'] ?? ''), ENT_QUOTES, 'UTF-8');
    $message  = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');

    if (empty($username) || empty($email) || empty($subject) || empty($message)) {
        header("Location: index.html?error=missing_fields");
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: index.html?error=invalid_email");
        exit();
    }

    if (strlen($message) < 10) {
        header("Location: index.html?error=short_message");
        exit();
    }

    // Génération d'un numéro de référence pour la demande
    $ticketNumber = strtoupper(substr(uniqid('TCK'), 0, 10));

    // 📧 Configuration Email
    $mail = new PHPMailer(true);
    $adminEmail   = "portfolio.amao@gmail.com";
    $noreplyEmail = "nepasrepondre.dev.p@gmail.com";
    $phoneNumber  = "+228 91 05 37 73";
    $portfolioURL = "https://portfolio-amao.vercel.app";
    $linkedinURL  = "https://www.linkedin.com/in/chahib-amao/";
    $githubURL    = "https://github.com/AmaochahibG";
    $logoURL      = "https://portfolio-amao.vercel.app/logo.png"; 

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = $noreplyEmail;
        $mail->Password   = 'hxqn lela drpt znfm';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // ================================
        // 📩 Email à l'Admin
        // ================================
        // On utilise le sujet fourni comme objet du mail
        $mail->setFrom($noreplyEmail, 'Portfolio Contact');
        $mail->addAddress($adminEmail);
        $mail->addReplyTo($email, $username);
        $mail->isHTML(true);
        $mail->Subject = $subject;

        $adminTemplate = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f8f8f8; color: #333; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow: hidden; }
                .header { background-color: #27AE60; padding: 20px; text-align: center; color: #ffffff; }
                .header img { max-width: 100px; }
                .header h2 { margin: 0; }
                .content { padding: 20px; }
                .content p { margin: 10px 0; }
                .footer { background-color: #2a2e35; color: #ffffff; text-align: center; padding: 20px; }
                .footer a { color: #27AE60; text-decoration: none; }
                .footer img { max-width: 50px; margin-top: 10px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <img src='$logoURL' alt='Logo'>
                    <!-- Le header affiche directement le sujet envoyé -->
                    <h2>$subject</h2>
                </div>
                <div class='content'>
                    <p><strong>Nom :</strong> $username</p>
                    <p><strong>Email :</strong> $email</p>
                    <p><strong>Message :</strong></p>
                    <p>$message</p>
                    <p><strong>Numéro de Référence :</strong> $ticketNumber</p>
                </div>
                <div class='footer'>
                    <p><strong>Chahib Amao - Développeur Full Stack</strong></p>
                    <p>📧 <a href='mailto:$adminEmail'>$adminEmail</a> | 📞 $phoneNumber</p>
                    <p>🌍 <a href='$portfolioURL'>Portfolio</a> | 🔗 <a href='$linkedinURL'>LinkedIn</a> | 💻 <a href='$githubURL'>GitHub</a></p>
                    <img src='$logoURL' alt='Logo'>
                </div>
            </div>
        </body>
        </html>
        ";

        $mail->Body = $adminTemplate;
        $mail->send();

        // ================================
        // ✅ Email de Confirmation au Client
        // (inspiré par une charte professionnelle utilisant des tons verts et bleu ciel)
        // ================================
        $mail->clearAddresses();
        $mail->addAddress($email);
        $mail->setFrom($noreplyEmail, 'Portfolio Amao - Ne pas Répondre');
        $mail->Subject = "✅ Confirmation de votre message - $subject";

        $clientTemplate = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f8f8f8; color: #333; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow: hidden; }
                .header { background: linear-gradient(to right, #00A651, #87CEEB); padding: 20px; text-align: center; color: #ffffff; }
                .header img { max-width: 100px; }
                .content { padding: 20px; }
                .content p { margin: 10px 0; }
                .footer { background-color: #141414; color: #ffffff; text-align: center; padding: 20px; font-size: 14px; }
                .footer a { color: #00A651; text-decoration: none; }
                .footer img { max-width: 50px; margin-top: 10px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <img src='$logoURL' alt='Logo'>
                    <h2>Confirmation de votre message</h2>
                </div>
                <div class='content'>
                    <p>Bonjour <strong>$username</strong>,</p>
                    <p>Nous vous remercions pour votre message. Votre demande a bien été reçue et sera traitée sous 72 heures.</p>
                    <p><strong>Sujet :</strong> $subject</p>
                    <p><strong>Message :</strong><br>$message</p>
                    <p><strong>Référence de votre demande :</strong> $ticketNumber</p>
                    <p><em>Veuillez ne pas répondre à cet e-mail automatique.</em></p>
                </div>
                <div class='footer'>
                    <p><strong>Chahib Amao - Développeur Full Stack</strong></p>
                    <p>Support : <a href='mailto:$adminEmail'>$adminEmail</a> | Téléphone : $phoneNumber</p>
                    <p>🌍 <a href='$portfolioURL'>Portfolio</a> | 🔗 <a href='$linkedinURL'>LinkedIn</a> | 💻 <a href='$githubURL'>GitHub</a></p>
                    <p>© " . date('Y') . " Portfolio Amao. Tous droits réservés.</p>
                    <img src='$logoURL' alt='Logo'>
                </div>
            </div>
        </body>
        </html>
        ";

        $mail->Body = $clientTemplate;
        $mail->send();

        header("Location: index.html?success=1");
        exit();

    } catch (Exception $e) {
        header("Location: index.html?error=email_not_sent");
        exit();
    }
}
?>
