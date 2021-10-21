<?php
echo nl2br("Hello there, this is a PHP Apache container\n");

$host = 'mysql';

// Database use name
$user = 'test';

//database user password
$pass = 'test';

// check the MySQL connection status
$conn = new mysqli($host, $user, $pass);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected to MySQL server successfully!";
}

?>