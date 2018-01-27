<?php
 session_start();
 include 'dbconnect.php';
 
 	if ($_POST['action'] == "delete_user") {
 		$query = "DELETE FROM user WHERE id='".$_POST['userId']."'";
 		$result = mysqli_query($dbhandle, $query);
 		if ($result){
 			echo "1"; die; 			
 		}
 		else {
 			echo "0"; die;
 		}
 	} // delete user action over

 	if ($_POST['action'] == "edit_user") {
 		$Id = $_POST['id'];
 		$Name =$_POST['username'];
 		$Email = $_POST['email'];
 		$Gender = $_POST['gender'];
 		$Tel = $_POST['tel'];
 		$query = "UPDATE user SET username='$Name', email='$Email', gender='$Gender', contact_number='$Tel' WHERE id='$Id'";
 		$result = mysqli_query($dbhandle,$query);
 		if ($result){
 			echo "1"; die; 			
 		}
 		else {
 			echo "Update Failed". mysqli_error($dbhandle);
 		}
 		die;
 	} // action edit user over 
?>