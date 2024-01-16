<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "Dulla", "Dulla2006-", "flychat_1");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' || $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    $user_id = isset($_GET['user_id']) ? $_GET['user_id'] : null;

    if (!$user_id) {
        echo json_encode(['success' => false, 'message' => 'User ID not provided.']);
        exit;
    }

    $query = "SELECT posts.*, users.username
    FROM posts
    INNER JOIN users ON posts.user_id = users.user_id;
    ";

    $result = $conn->query($query);

    if ($result !== false && $result->num_rows > 0) {
        $posts = [];

        while ($row = $result->fetch_assoc()) {
            $posts[] = $row;
        }

        echo json_encode(['success' => true, 'data' => $posts]);
    } else {
        echo json_encode(['success' => false, 'message' => 'No posts found.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}

$conn->close();
?>
