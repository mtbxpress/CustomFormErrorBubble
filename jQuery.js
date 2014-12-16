$(document).ready(function() {
	
	var label = $('label').children();

	// The 'invalid' event is the one that triggers the
	// errors. Here we are preventing those errors.
	label.on('invalid',function(event) {
		event.preventDefault();
	});

	// Adding the new behaviour to the DOM 
	$('button').on('click', function() {

		for(var i = 0;i< label.length; i++ ){

			var invalid = label[i].validationMessage;

			// Creating the error message with the text
			var errors  = $('<div>').addClass('message error').text(invalid);

			// Adding the error after the form field
			$(label[i]).after(errors);

		}

		// Hiding messages
		window.setTimeout(function() {
	    $('.error').fadeTo(5000, 0).slideUp(500, function(){
	        $(this).remove();
	    });
	  }, 4000);
	});
});