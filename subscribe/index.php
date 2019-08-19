<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_with_error(405);
}

if (empty($_POST['email'])) {
    respond_with_error(400, "Mail was not present in request");
}

$email = $_POST['email'];
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond_with_error(400, "Mail '$email' is not valid");
}

$connection = mysqli_connect(
    'localhost',
    'paveluic_landing',
    'e&tieM.Buk#diB/Vul}I',
    'paveluic_twb_landing'
);

$statement = $connection->prepare('INSERT INTO subscribers (email) VALUES (?)');
$statement->bind_param("s", $email);

if (!$statement->execute()) {
    error_log("Failed to save '$email', probably it exists already'");
}

function respond_with_error($http_status, $message = null)
{
    http_response_code($http_status);
    if ($message == null) {
        die();
    }

    error_log($message);
    die($message);
}
