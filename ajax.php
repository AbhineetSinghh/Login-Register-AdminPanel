<?php
 session_start();
 include 'dbconnect.php';
 $action = $_POST['action'];
 if ($action == 'dashboard-registration-form') {
 	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	if (isset($_POST['username'])) {
	 	$sql = "SELECT * FROM user WHERE email= '".$_POST['email']."'";
	 	$result=mysqli_query($dbhandle,$sql);
		if (mysqli_num_rows($result) > 0) {	
			$responseArray = ["success" => false, "data" => "Email already exists"];
            echo json_encode($responseArray);
            die;
        }else{
	 		$insertData = mysqli_query($dbhandle,"INSERT INTO user(username, email,password) VALUES ('$username','$email','$password')");
	 		if($insertData){
	 			$responseArray = ["success" => true, "data" => "Registration Successful, Login to continue."];
            	echo json_encode($responseArray);
            	die;
	 		}
	 		else {
	 			$responseArray = ["success" => false, "error" => "Unable to add Information to database."];
            	echo json_encode($responseArray);
            	die;
	 		}	 		
        }						
	}
 	die;
 }

if ($action == 'dashboard-login-form') {
	 	$email = $_POST['email'];
	 	$sql = "SELECT username, password, email FROM user WHERE email='$email'"; 	
		$result = mysqli_query($dbhandle, $sql);
		$row = mysqli_fetch_assoc($result);
		if($_POST['password'] == $row['password']){
			$responseArray = ["success" => true, "data" => "Login Successful"];
			echo json_encode($responseArray);          
			$_SESSION['username'] = $row['username'];
			 die;
		} else {
			$responseArray = ["success" => false, "error" => "Incorrect email or password"];        
			echo json_encode($responseArray); die;
		}
}
die;
mysqli_close($dbhandle);
?>
