<?php
error_reporting(E_ALL || ~E_NOTICE);
header("Access-Control-Allow-Origin:*");
$serverName = "127.0.0.1";//数据库服务器地址
$uid = "root";//数据库用户名
$pwd = "";//数据库密码
$db="barrage";
$conn = new mysqli($servername, $uid, $pwd,$db);
if(mysqli_connect_error()){
　　die("连接失败");
}
$ID=$_GET['ID'];
$heart=$_GET['heart'];
$conn->query("set character set 'utf8'"); //设置编码
$sql= ($heart=="true") ? "update barrageinfo set heart=heart+1 where ID={$ID};" : "update barrageinfo set heart=heart-1 where ID={$ID};";
$result=$conn->query($sql);
if($result)
	echo "success";
else
	die('Error: ' . $conn->error);
$result->free();
$conn->close();
?>