<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "Dulla", "Dulla2006-", "flychat_1");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    $user_id = isset($_POST['user_id']) ? $_POST['user_id'] : null;

    if (!$user_id) {
        echo json_encode(['success' => false, 'message' => 'User ID not provided.']);
        exit;
    }

    if (isset($_FILES['postImage']) && $_FILES['postImage']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['postImage']['tmp_name'];
        $fileName = $_FILES['postImage']['name'];

        $uniqueIdentifier = uniqid();
        $uploadDirectory = 'posts/';
        $uploadPath = $uploadDirectory . $uniqueIdentifier . '-' . $fileName;

        // Get the current timestamp
        $timestamp = date('Y-m-d H:i:s');

        if (move_uploaded_file($fileTmpPath, $uploadPath)) {
            // Now that the file is saved, insert the information into the database
            $query = "INSERT INTO posts (user_id, appath, timestamp) VALUES ('$user_id', '$uploadPath', '$timestamp')";
        
            if ($conn->query($query) === TRUE) {
                echo json_encode(['success' => true, 'message' => 'Post uploaded successfully.']);
            } else {
                echo json_encode(['success' => false, 'message' => 'Failed to save post information to the database.']);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to move uploaded file.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'No file uploaded or file upload error.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}

$conn->close();
?>
