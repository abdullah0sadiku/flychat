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
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    $user = $dData['user'];
    $pass = $dData['pass'];

    if ($user != "" and $pass != "") {
        $sql = "SELECT user_id, password, avatar FROM users WHERE username='$user';";
        $res = mysqli_query($conn, $sql);

        if (mysqli_num_rows($res) != 0) {
            $row = mysqli_fetch_array($res);
            if ($pass != $row['password']) {
                $result = "Invalid password!";
                $avatar = "";
            } else {
                $user_id = $row['user_id'];
                $result = "Loggedin successfully! Redirecting...";
                $avatar = $row['avatar'];
            }
        } else {
            $result = "Invalid username!";
            $avatar = "";
        }
    } else {
        $result = "";
        $avatar = "";
    }

    $conn->close();
    $response[] = array("result" => $result, "user_id" => $user_id, "avatar" => $avatar);
    echo json_encode($response);
}
?>
