<?php

// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "susegad";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize email
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
    } else {
        // Check if email already exists
        $stmt = $conn->prepare("SELECT COUNT(*) FROM mailing_list WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($count);
        $stmt->fetch();
        $stmt->close();

        if ($count > 0) {
            echo "Error: You are already subscribed to our mailing list"; // Email already subscribed
        } else {
            // Prepare SQL statement
            $stmt = $conn->prepare("INSERT INTO mailing_list (email) VALUES (?)");
            $stmt->bind_param("s", $email);

            // Execute the statement
            if ($stmt->execute()) {
                echo "Subscription successful";
            } else {
                echo "Error: Unable to subscribe"; // Error message for generic error
            }

            // Close statement
            $stmt->close();
        }
    }
}

// Close connection
$conn->close();

?>
