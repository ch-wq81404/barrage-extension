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

$username=$_GET["username"];
$password1=$_GET["password1"];
$sql="select * from visitorinfo where nickname='{$username}';";
$result=$conn->query($sql);
if($conn->affected_rows)
	echo "<script>alert(\"用户名重复！\");history.go(-1);</script>";
else{
	$sql="insert into visitorinfo values('{$username}','{$password1}');";
	$result=$conn->query($sql);
	if($conn->affected_rows)
		echo "<script>alert(\"注册成功！\");history.go(-2);</script>";
	else
		echo "<script>alert(\"注册失败,请重新操作\");history.go(-1);</script>";
}
// history.go(-1);
$result->free();
$conn->close();
?>