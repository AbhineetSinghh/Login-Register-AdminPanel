<?php
session_start(); // Starting Session
// registration php
include 'dbconnect.php';
	if(!isset($_SESSION['username'])){ 
		header("location: index.php");
	}	
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Employee-info</title>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">    
   <!--  CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/form.css">
	<style type="text/css">
		table th{
     vertical-align: middle !important;
}
	</style>
	
</head>
<body>
	<?php include 'header.php'; ?>

	<div class="container">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">	
				<div class="error_message alert alert-danger" style="display: none; width: 100%;"></div>
				<div class="success_message alert alert-success" style="display: none; width: 100%;"></div>
			</div>
		</div>
    <div class="row">
        <div class="col-md-12">
			<!--====================Employee Table================================-->
			<div class="table-responsive">
			  <table id="userTable" class="table table-hover table-bordered text-center" style="cursor: default; ">
			    <thead>
			      <tr class="info">
			        <th class="alert alert-success text-center">ID</th>
			        <th class="text-center">Name</th>
			        <th class="text-center">Email</th>
			        <th class="text-center">Gender</th>
			        <th class="text-center">Contact Number</th>			        
			        <th class="alert alert-warning text-center">Manage</th>
			      </tr>
			    </thead>
			    <tbody>
			    	<!--getting data from database-->
			    </tbody>
			  </table>
			  </div>
			<!--====================Employee Table Ends================================-->        	
        </div>
    </div>
</div>

</body>
<!-- jquery -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<!-- JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="js/main-js.js"></script>
<script type="text/javascript" src="js/employee-js.js"></script>
<script type="text/javascript"> 
	jQuery(document).ready(function () {
		showEmployee();
		/*setInterval(showEmployee,10000);*/
	});
</script>
</html>