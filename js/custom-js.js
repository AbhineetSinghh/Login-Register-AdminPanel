jQuery(document).ready(function(){
	jQuery('#register-submit').click(function(){
		var username = jQuery('#username').val();
		var email = jQuery('#email').val();
		var password = jQuery('#password').val();
		var password2 = jQuery('#password2').val();		
		function isValidName(username){
			var pattern2 = new RegExp(/^[a-zA-Z ]{3,}$/);
			return pattern2.test(username);
		}
		
		if (username == "") {
			username_result = 0;
			username_error = "Enter Name ";
		}else if(isValidName(username)){
			username_result = 1;
			username_error = "";
		} else{
			username_result = 0;
			username_error = "Enter valid Name";
		}

		if (password == '' || password2 == '') {
			password_result = 0;
			password_error = "Enter the password!";
		}else{
			if (password != password2) {
				password_result = 0;
				password_error = "Passwords are not matching!";
			}else if(password.length <= 7) {
				password_result = 0;
				password_error = "Password should be of more than 7 letters!";

			}else{				
				password_result = 1;
				password_error = "";
			}
		}

		if(email == '') {
			email_result = 0;
			email_error = "Enter the email!";
		}else{
			if(isValidEmail(email)) {
				email_result = 1;
				email_error = "";
			}else{
				email_result = 0;
				email_error = "Email is not valid!";
			}
		}
		if (password_result == "0" || email_result == "0" || username_result =="0") {
			var error_message = username_error + "<br/>" + email_error + "<br/>" +password_error ;
				jQuery(".error_message").css("display","inline-block").html(error_message);				
    			resetForm("register-form");
		 	return false;
		}
		url = "ajax.php";
		jQuery.ajax({ 
				url: url,
				type: "POST",
				data: {
					action : "dashboard-registration-form",
					username : username,
					email : email,
					password : password
				},
				dataType : "json",
				success: function(response){
					if (response.success) {
						resetForm("register-form");
						jQuery(".error_message").css("display","none");
						jQuery(".success_message").css("display","inline-block").html(response.data);
						jQuery("#login-form").delay(100).fadeIn(100);
				 		jQuery("#register-form").fadeOut(100);
						jQuery('#register-form-link').removeClass('active');
						jQuery("#login-form-link").addClass('active');
						jQuery(".error_message").css("display","none").html(response.error);				
					} else {
						jQuery(".success_message").css("display","none");
						jQuery(".error_message").css("display","inline-block").html(response.error);											
					}
					
				}
    	});
		return false;
	});
/*****************************************************************************************/
jQuery('#login-submit').click(function(){	
		var email = jQuery('#login_email').val();
		var password = jQuery('#login_password').val();
		if (password == '') {
			password_result = 0;
			password_error = "Enter the password!";
		}else{				
				password_result = 1;
				password_error = "";
			}

		if(email == '') {
			email_result = 0;
			email_error = "Enter the email!";
		}else{			
				email_result = 1;
				email_error = "";
			}
		if (password_result == "0" || email_result == "0") {
			var error_message = email_error + "<br>" + password_error ;
			jQuery(".error_message").css("display","inline-block").html(error_message);
		 	return false;
		} else {
				url = "ajax.php";
				jQuery.ajax({ 
						url: url,
						type: "POST",
						data: {
							action : "dashboard-login-form",
							email : email,
							password : password
						},
						dataType : "json",					
						success: function(response){
							if (response.success) {
								window.location.href = 'dashboard.php';		
							} else {
								resetForm("login-form");	
								jQuery(".error_message").css("display","inline-block").html(response.error);
								return false;
							}
						} //success end
		    	});
    		}
		return false;
		}); //Login-submit-form end here
});
function resetForm(id){
	jQuery("#"+id)[0].reset();
}
function isValidEmail(email){
			var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i);
			return pattern.test(email);
}