<?php
//初始化数据库
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "echange";
//所需数据
$name=$_REQUEST["SK_name"];
$intro=$_REQUEST["SK_intro"];
$imgUrl=$_REQUEST["SK_pic"];
//链接数据库
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 

$sql = "SELECT SK_name, SK_intro, SK_pic FROM shopkeeper";
$result = $conn->query($sql);
 
if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        echo $row["SK_name"]. $row["SK_intro"]. $row["SK_pic"];
    }
} else {
    echo "无数据";
}
$conn->close();
?>