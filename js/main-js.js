$(function() {
    $('#login-form-link').click(function(e) {
		$("#login-form").slideDown("slow");
 		$("#register-form").slideUp("slow");
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").slideDown("slow");
 		$("#login-form").slideUp("slow");
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
});