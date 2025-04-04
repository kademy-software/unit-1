<?php
// complete_lesson.php

$servername = "localhost"; // Your database server
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "project"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $lesson_id = 'bai04'; // This can be dynamic based on the lesson ID

    // Update the database to increment the completed lessons count by 1
    $sql = "UPDATE lessons SET completed = completed + 1 WHERE lesson_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $lesson_id);

    if ($stmt->execute()) {
        echo "Đánh dấu bài học hoàn thành thành công.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
}

$conn->close();
?>
