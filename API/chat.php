<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$conn = new mysqli("localhost", "Dulla", "Dulla2006-", "flychat_1");

if (mysqli_connect_error()) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database connection error']);
    exit();
} else {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $msg = $_POST['Messages'];
        $from = $_POST['From'];
        $to = $_POST['To'];

        // Check if an image is attached
        if (isset($_FILES['imgg']) && $_FILES['imgg']['error'] === UPLOAD_ERR_OK) {
            $uploadsDirectory = 'image/';
            $uploadedImagePath = $uploadsDirectory . basename($_FILES['imgg']['name']);

            // Move the uploaded image file to the specified directory
            if (move_uploaded_file($_FILES['imgg']['tmp_name'], $uploadedImagePath)) {
                $imggpath = $uploadedImagePath;

                // Insert message into the database with the image path
                $sql = "INSERT INTO chats (sender_id, receiver_id, message, imgpath) VALUES (?, ?, ?, ?)";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("ssss", $from, $to, $msg, $imggpath);
            } else {
                http_response_code(500);
                echo json_encode(['success' => false, 'error' => 'Failed to move uploaded image file']);
                exit();
            }
        } elseif (isset($_FILES['voiceRecording']) && $_FILES['voiceRecording']['error'] === UPLOAD_ERR_OK) {
            $uploadsDirectory = 'voice/';
            $uploadedVoicePath = $uploadsDirectory . basename($_FILES['voiceRecording']['name']);

            // Move the uploaded voice recording file to the specified directory
            if (move_uploaded_file($_FILES['voiceRecording']['tmp_name'], $uploadedVoicePath)) {
                $voicePath = $uploadedVoicePath;

                // Insert message into the database with the voice recording path
                $sql = "INSERT INTO chats (sender_id, receiver_id, message, voicepath) VALUES (?, ?, ?, ?)";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("ssss", $from, $to, $msg, $voicePath);
            } else {
                http_response_code(500);
                echo json_encode(['success' => false, 'error' => 'Failed to move uploaded voice recording file']);
                exit();
            }
        } else {
            // Insert message into the database without the image or voice recording path
            $sql = "INSERT INTO chats (sender_id, receiver_id, message) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sss", $from, $to, $msg);
        }

        // Execute the prepared statement
        if ($stmt->execute()) {
            $response = ['success' => true, 'message' => 'Data received successfully'];
            echo json_encode($response);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => 'Error inserting data into the database: ' . $stmt->error]);
        }

        $stmt->close();
    } else {
        http_response_code(405);
        echo json_encode(['success' => false, 'error' => 'Invalid request method']);
    }

    $conn->close();
}
?>
