<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
$conn = new mysqli("localhost", "Dulla", "Dulla2006-", "flychat_1");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$loggedInUserId = isset($_GET['loggedInUserId']) ? $_GET['loggedInUserId'] : null;

if ($loggedInUserId !== null) {
    $stmt = $conn->prepare("SELECT * FROM users WHERE user_id != ?");
    $stmt->bind_param("i", $loggedInUserId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $users = array();

        while ($row = $result->fetch_assoc()) {
            $users[] = array(
                'id' => $row['user_id'],
                'name' => $row['username'],
                'avatar' => $row['avatar'],
            );
        }

      
        echo json_encode($users);
    } else {
        echo json_encode(array());
    }

    $stmt->close();
} else {
    echo json_encode(array('error' => 'Invalid user ID'));
}

$conn->close();
?>
