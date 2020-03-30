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

$json_array=array();
$txtclass=$_GET['txtclass'];
$username=$_GET['username'];
$sql="select * from txtinfo where class='{$txtclass}' and nickname='{$username}';";
$result=$conn->query($sql);
if($result){
	while($row=$result->fetch_assoc())
		array_push($json_array,$row);
	echo json_encode($json_array,JSON_UNESCAPED_UNICODE);
}
else
	echo "NO_CODE_BLOCKS";
// $result->free();
$conn->close();
?>