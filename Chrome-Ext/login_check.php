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
$password=$_GET["password"];
$sql="select * from visitorinfo where nickname='{$username}';";
$result=$conn->query($sql);
if($result) { 
	$row = $result->fetch_assoc();//history.go(-2);
  	if($row['PASSWORD']==$password)
    {
      $json_array=array("username"=>$username,"password"=>$password);
      $json=json_encode($json_array,JSON_UNESCAPED_UNICODE);
      echo $json;
    }
  	else
  		{echo "用户名或密码错误";}
}
else{
	echo "用户名不存在";
}

$result->free();
$conn->close();
?>