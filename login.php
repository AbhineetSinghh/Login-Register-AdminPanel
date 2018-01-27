
<?php 
//login php	
		if (isset($_POST['login_submit'])) {
				$error_message = "";
			$sql = "SELECT * FROM userinfo WHERE email= '".$_POST['email']."'";
			$result = mysqli_query($dbhandle,$sql);
			$row = mysqli_fetch_assoc($result);
			/* Form Required Field Validation */
				foreach($_POST as $key=>$value) {
					if(empty($_POST[$key])) {
					$error_message = "Fill the Fields. "; 
					}
				}
			if ($error_message === "") {
				if (mysqli_num_rows($result)==FALSE) {
					$error_message = "E-mail Doesn't Exist.";				
				}
				if (md5($_POST['password'])==$row['password']) {
					 $_SESSION['username']=$row['name']; // Initializing Session
						header("location: dashboard.php"); // Redirecting To Other Page
				}
			}					
		}
?>