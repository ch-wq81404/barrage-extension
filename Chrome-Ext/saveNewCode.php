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

// $sql_codes=$_GET['sql_codes'];
$new_codes=$_GET['new_codes'];
$sql="";
foreach ($new_codes as $key => $value) {
	# code...
	$sql=$sql."INSERT INTO `txtinfo` (`nickname`, `class`, `content`, `url`, `title`, `txtID`) VALUES ('{$value[0]}', '{$value[1]}', '{$value[2]}', '{$value[3]}', '{$value[4]}', NULL);";
}
// echo $sql;
$result=$conn->query($sql);
if($result){
	echo "success";
}
else
{
	die('Error: ' . $conn->error);
}
$conn->close();
?>