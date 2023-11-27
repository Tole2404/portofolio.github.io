<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["_replyto"];
    $message = $_POST["message"];

    $to = "tunggul.bayu24@gmail.com";
    $subject = "New Contact Form Submission";

    // Email body with HTML formatting
    $body = "
        <html>
        <head>
            <title>New Contact Form Submission</title>
        </head>
        <body>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong><br/>$message</p>
        </body>
        </html>
    ";

    // Headers to set content type and additional settings
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    // Send email
    mail($to, $subject, $body, $headers);

    // Return a success response
    echo json_encode(["status" => "success"]);
} else {
    // Return an error response if the request method is not POST
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>