<?php 
error_reporting(E_ALL || ~E_NOTICE);
header("Access-Control-Allow-Origin:*");
$serverName = "127.0.0.1";//数据库服务器地址
$uid = "root";//数据库用户名
$pwd = "";//数据库密码
$db="test";
$conn = new mysqli($servername, $uid, $pwd,$db);
if(mysqli_connect_error()){
　　die("连接失败");
} 
  
$sql = "SELECT * FROM comment;"; 
$result = $conn->query($sql); 



// 输出每行数据 
while($row = $result->fetch_assoc()) { 
  $count=count($row);//不能在循环语句中，由于每次删除row数组长度都减小 
  for($i=0;$i<$count;$i++){ 
    unset($row[$i]);//删除冗余数据 
  } 
  echo json_encode($row,JSON_UNESCAPED_UNICODE);
  
} 
//print_r($arr); 
//json编码 
$conn->close(); 
  
?>