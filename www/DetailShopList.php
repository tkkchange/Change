<?php
//初始化数据库
$servername = "129.211.84.118";
$username = "ec_root";
$password = "ec_psd";
$dbname = "echange";
//所需数据
$name=$_REQUEST["P_name"];//课程名
$price=$_REQUEST["price"];
$teachername=$_REQUEST["tname"];
$pic=$_REQUEST["P_pic"];
$age=$_REQUEST["P_age"];//年龄限制
//链接数据库
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 

$sql = "SELECT P_name,price,tname,P_pic,P_age FROM program";
$result = $conn->query($sql);
 
if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        echo $row["P_name"].$row["price"].$row["tname"].$row["P_pic"].$row["P_age"];
    }
} else {
    echo "无数据";
}
$conn->close();
?>