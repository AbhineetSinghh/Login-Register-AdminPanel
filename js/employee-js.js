/*=====================TO PRINT EMPLOYEES===========================*/
function showEmployee(){
	jQuery.ajax({
	type: "POST",
	url: "show_employee.php",
	success: function(data) {
			jQuery('tbody').html(data);			
			}
	});	
}
/*=====================TO MANAGE BUTTONS CLICKS===========================*/
jQuery(document).on('click','.manageButton', function(){
	jQuery('button').removeClass('manageButton');
	var butttonIdIs = jQuery(this).attr('id');
	var thisRow = jQuery(this).parents("tr");
	var userId = jQuery(this).parents("tr").children("td:first").text();
	var name = jQuery(this).parents("tr").children("td:nth-child(2)").text();
	var email = jQuery(this).parents("tr").children("td:nth-child(3)").text();
	var gender = jQuery(this).parents("tr").children("td:nth-child(4)").text();
	var contact_no = jQuery(this).parents("tr").children("td:nth-child(5)").text();
	if (butttonIdIs == 'delete') {
		var check = confirm("Are you sure ? You want to delete this user?");
		if (check) {
			deleteUser(userId);
		}
	} else if (butttonIdIs == 'edit') {
		changeFields(userId,name,email,gender,contact_no,thisRow);
	}
});
/*=====================TO MANAGE EDIT BUTTONS CLICKS===========================*/
jQuery(document).on('click','.editClass', function(){
	var butttonIdIs = jQuery(this).attr('id');
	if (butttonIdIs == 'cancelEdit') {
		showEmployee();
		jQuery(".error_message").css("display","none");
	} else if (butttonIdIs == 'doneEdit'){
		var Id = jQuery('#newId').val();
		var Name = jQuery('#newName').val();
		var Email = jQuery('#newEmail').val();
		var Gender = jQuery('input[name=gender]:checked').val();
		var Tel =  jQuery('#newTel').val();
		updateEmployee(Id,Name,Email,Gender,Tel);
	}
});
/*=====================This function sending request to server==================================*/
function updateEmployee(Id,Name,Email,Gender,Tel){
	var id = Id;
	var username = Name;
	var email = Email;
	var tel = Tel;
	var gender = Gender;
	function ValidName(username){
			var pattern2 = new RegExp(/^[a-zA-Z ]{3,}$/);
			return pattern2.test(username);
		}
		function ValidTel(tel) {
			var patter3 = new RegExp(/^\d{10}$/);
			return patter3.test(tel);
		}
		if(ValidTel(tel)){
			tel_result = 1;
			tel_error = "";
		} else{
			tel_result = 0;
			tel_error = "Enter valid contact number";
		}
		if (tel == 0 || tel == "") {
			tel_result = 1;
			tel_error = "";			
		}

		if (username == "") {
			username_result = 0;
			username_error = "Enter Name ";
		}else if(ValidName(username)){
			username_result = 1;
			username_error = "";
		} else{
			username_result = 0;
			username_error = "Enter valid Name";
		}
		if (username_result =="0" || tel_result == "0") {
			var error_message = username_error + "<br/>" + tel_error;
				jQuery(".error_message").css("display","inline-block").html(error_message);
				return false;
		}
		if (gender !== "M" && gender !== "F") {
			gender = "";
		}
		jQuery.ajax({ 
				url: "manage_employee.php",
				type: "POST",
				data: {
					action : "edit_user",
					username : username,
					email : email,
					tel : tel,
					gender : gender,
					id : id				
				},
				success: function(responseEdit){
					if (responseEdit == "1") {
						jQuery(".error_message").css("display","none");
						jQuery(".success_message").css("display","inline-block").html("Update Successful.");
						showEmployee();									
					} else {
						jQuery(".success_message").css("display","none");
						jQuery(".error_message").css("display","inline-block").html(responseEdit);
						showEmployee();										
					}					
				}
    	});
  return false;
}
/*===================== functions are defined below===========================*/
function deleteUser(UserId){
	jQuery.ajax({
		type : "POST",
		url : "manage_employee.php",
		data : {
			action : "delete_user",
			userId : UserId
		},
		success : function (responseData){
			if (responseData == "1") {
				showEmployee();								
			} else if (responseData = "0") {
				alert("Something Went wrong");
					}
		}
	});
}
function changeFields(idVal,nameVal,emailVal,genderVal,telVal,thisRow){
		var id,name,email,gender,contact_no,button,tds;
		if (telVal==0 || telVal=="0") {
			telVal = "";
		}
		if (genderVal == "M") {
			gender = '<td><input class="genderClass" type="radio" name="gender" value="M"  checked >Male   <input class="genderClass" type="radio" name="gender" value="F"> Female</td>';
		} else if (genderVal == "F") {
			gender = '<td><input class="genderClass" type="radio" name="gender" value="M" >Male   <input class="genderClass" type="radio" name="gender" value="F" checked> Female</td>';
		} else {
			gender = '<td><input class="genderClass" type="radio" name="gender" value="M">Male   <input class="genderClass" type="radio" name="gender" value="F"> Female</td>';
		}
		id = '<td><input value="' + idVal + '" id="newId" disabled></td>';
		name = '<td><input type="text" name="username" id="newName" class="form-control" value="' + nameVal + '"></td>';
		email = '<td><input type="email" name="email" id="newEmail" class="form-control" value="' + emailVal + '" disabled></td>';	
		contact_no = '<td> <input placeholder="xxxxxxxxxx" type="tel" name="tel" id="newTel" class="form-control" value="' + telVal + '" > </td>';	
		var button = '<button type="button" id= "doneEdit" class="editClass btn btn-success">Done</button> &nbsp;'
		    button += ' <button type="button" id="cancelEdit" class="editClass btn btn-dark">Cancel</button>';
		    tds = id + name + email + gender + contact_no + button;
		var newRow ='<form id="edit-user-form"  name="edit-user"><tr>'+ tds+'</tr></form>';	
		jQuery(thisRow).html(newRow).trigger('create').css('background-color','#FF4C4C');
}