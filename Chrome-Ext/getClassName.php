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
$conn->query("set character set 'utf8'"); //设置编码

$username=$_GET['username'];
$sql="select * from txtinfo where nickname='{$username}' group by class;";
$result=$conn->query($sql);
$class_array=array();
if($result)
{
	while($row=$result->fetch_assoc())
		array_push($class_array,$row['class']);
	echo json_encode($class_array,JSON_UNESCAPED_UNICODE);
}
else
	echo "NO_CLASS";
$result->free();
$conn->close();
?>