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
$info=$_REQUEST["information"];//课程介绍
$age=$_REQUEST["P_age"];//年龄限制
$personnum=$_REQUEST["P_personnum"];//人数限制
$currentnum=$_REQUEST["P_currentnum"];//已报名人数
$sdate=$_REQUEST["sdate"];//开课时间
//链接数据库
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 

$sql = "SELECT P_name,price,tname,information,P_age,P_currentnum,P_personnum,sdate FROM program";
$result = $conn->query($sql);
 
if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        echo $row["P_name"].$row["price"].$row["tname"].$row["information"].$row["P_age"].$row["P_personnum"].$row["P_currentnum"].$row["sdate"];
    }
} else {
    echo "无数据";
}
$conn->close();
?>