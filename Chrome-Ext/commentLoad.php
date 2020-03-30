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
$url=$_GET["url"];
$sql = "SELECT * FROM barrageinfo where url='{$url}' order by heart desc limit 0,20;";
$result = $conn->query($sql);
// 输出每行数据 
while($row = $result->fetch_assoc()) { 
  	echo json_encode($row,JSON_UNESCAPED_UNICODE);
  
}
$resutl->free(); 
$conn->close();  
?>