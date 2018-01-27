<?php	
//connecting to database , database name is registration 
$Username = "root";
$Password = "";
$Hostname = "localhost"; 
$dbhandle = mysqli_connect($Hostname, $Username, $Password,"tbl_users") or die("Unable to connect to database");  
$selected = mysqli_select_db($dbhandle,"tbl_users") or die("Could not select registration");
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>