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
$conn->query("set names 'utf8'");  //设置编码

$username=$_GET['username'];
$txtclass=$_GET['txtclass'];
$sql="select * from txtinfo where nickname='{$username}' and class='{$txtclass}';";
$result=$conn->query($sql);
if($conn->affected_rows)
	echo "文件夹名称重复！";
else{
	$sql="INSERT INTO `txtinfo` (`nickname`, `class`, `content`, `txtID`) VALUES ('{$username}', '{$txtclass}', NULL, NULL);";
	$result=$conn->query($sql);
	if($result)
		echo "success";
}
// $result->free();
$conn->close();
?>