<?php
//初始化数据库
$servername = "129.211.84.118";
$username = "ec_root";
$password = "ec_psd";
$dbname = "echange";
//所需数据
$name=$_REQUEST["SK_name"];
$adress=$_REQUEST["SK_adress"];
$pic=$_REQUEST["SK_pic"];
$grade=$_REQUEST["SK_grade"];
//链接数据库
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 

$sql = "SELECT SK_name,SK_adress,SK_pic,SK_grade FROM shopkeeper";
$result = $conn->query($sql);
 
if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        echo $row["SK_name"].$row["SK_adress"].$row["SK_pic"].$row["SK_grade"];
    }
} else {
    echo "无数据";
}
$conn->close();
?>