<?php
error_reporting(E_ALL || ~E_NOTICE);
header("Access-Control-Allow-Origin:*");
$serverName = "127.0.0.1";//数据库服务器地址
$uid = "root";//数据库用户名
$pwd = "";//数据库密码
$db="test";
$conn = new mysqli($servername, $uid, $pwd,$db);
var_dump($conn);
if(mysqli_connect_error()){
　　die("连接失败");
} 
$pos=$_GET["pos"];
$postData=$_GET["data"];
$blogger=$_GET["blogger"];
$sql = "INSERT INTO comment VALUES ('{$blogger}','{$pos}','{$postData}');";
echo $sql;
$r = $conn->query($sql);
var_dump($r);


