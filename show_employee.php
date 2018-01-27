<?php
 session_start();
 include 'dbconnect.php';
	 	$query = "SELECT id,username,email,gender,contact_number FROM user";	
		$result = mysqli_query($dbhandle, $query);
		if ($result)
		{
		  	// Fetch one and one row
		 	while ($row=mysqli_fetch_row($result))
		    {
		    	$sendIt ="<tr><td>" . $row[0] . "</td> <td>" . $row[1] . "</td> <td>" . $row[2] . "</td> <td>" . $row[3] . "</td> <td>"
						. $row[4]. "</td> <td id= 'option". $row[0] ."'> <button type='button' id= 'edit' class='manageButton btn btn-warning'>Edit</button> &nbsp; <button type='button' id='delete' class='manageButton btn btn-danger'>Delete</button> </td> </tr>";
						echo $sendIt;
		    }
		  // Free result set
		  mysqli_free_result($result);
		}
die;
?>