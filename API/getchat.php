<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$conn = new mysqli("localhost", "Dulla", "Dulla2006-", "flychat_1");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $from = $_GET['From'];
    $to = $_GET['To'];
    
    $sql1 = "SELECT * , imgpath FROM chats WHERE (sender_id = '$from' AND receiver_id = '$to') OR (sender_id = '$to' AND receiver_id = '$from')";
    $quer = mysqli_query($conn, $sql1);

    $ar = array();

    while ($row = mysqli_fetch_assoc($quer)) {
        $ar[] = $row;
    }

    if (!empty($ar)) {
        echo json_encode(['chats' => $ar]);
    } else {
        echo json_encode(['message' => 'No chat data available']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method']);
}

$conn->close();
?>
