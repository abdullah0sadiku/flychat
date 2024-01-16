<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$conn = new mysqli("localhost", "Dulla", "Dulla2006-", "flychat_1");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $username = $_POST['Username'];
    $password = $_POST['Password'];

    // Set a default avatar path
    $avatarPath = 'http://localhost/flychat/API/avatars/default.jpg';
    
    // Insert user with default avatar path
    $sql = "INSERT INTO users (username, Password, Avatar) VALUES ('$username', '$password', '$avatarPath')";
    $res = mysqli_query($conn, $sql);

    

    if ($res) {
        $response = array("status" => "success", "message" => "User registered successfully");
        echo json_encode($response);
    } else {
        // Error registering user into the database
        $response = array("status" => "error", "message" => "Error registering user into the database");
        echo json_encode($response);
    }

    $conn->close();
}
?>
