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
$content=$_GET['content'];
$sql="delete from txtinfo where nickname='{$username}' and class='{$txtclass}' and content='{$content}';";
// echo $sql;
$result=$conn->query($sql);
if($result){
	echo "success";
}
else
	die('Error: ' . $conn->error);
// $result->free();
$conn->close();
?>