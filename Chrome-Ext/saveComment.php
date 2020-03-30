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

$postData=$_GET["data"];
$nickname=$_GET["blogger"];
$posX=$_GET["posX"];
$posY=$_GET["posY"];
$url=$_GET["url"];
$title=$_GET["title"];
$sql="INSERT INTO `barrageinfo` (`content`, `positionX`, `positionY`, `nickname`, `url`, `TIME`, `heart`, `fine`, `ID`,`title`) VALUES ('{$postData}', '{$posX}', '{$posY}', '{$nickname}', '{$url}', NULL, '0', '0', NULL,'{$title}');";

$result = $conn->query($sql);
if($result)
{
	echo "success";
}
else
{
	die('Error: ' . $conn->error);
}
$result->free();
$conn->close();
?>

