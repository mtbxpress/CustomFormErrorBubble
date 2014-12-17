window.addEventListener('DOMContentLoaded',function(){

	(function(){
		var form = document.querySelector('form');

		// The 'invalid' event is the one that triggers the
		// errors. Here we are preventing those errors.
		form.addEventListener( 'invalid',function(event){
	    event.preventDefault();
	  },true);

	  var button = form.querySelector('button');

	  // Adding the new behaviour to the DOM 
	  button.addEventListener('click', function(){

	  	// Saving all the errors in a variable
	  	var invalid = form.querySelectorAll(':invalid');
			
			// Starts at 1 so we take out the fieldset tag
			for(var i = 1; i < invalid.length;i++){

				// div for the error messages
				var error = document.createElement('div');
				// Targeting the parent on the input 
				var label = invalid[i].parentNode;

				// Adding the classes to the div
				error.className = 'error';
				// Setting the innerHtml with the 
				// validationMessage property for each error
				error.textContent = invalid[i].validationMessage;

				label.insertBefore(error,invalid[i].nextSibling);
			}

			// Removing the actual error messages
			window.setTimeout(function(){

				var allErrors =document.querySelectorAll('.error');

				for(var i =0;i<allErrors.length;i++){

					allErrors[i].remove();
				}
			},5000);
		});
	})();

});