/* jshint browser:true */
'use strict';

window.addEventListener('DOMContentLoaded',function(){

	(function(){

		// adding the required attribute for multiple check boxes
		var deleteRequiredAttr = function (){

			var i, 
					thisCount = document.querySelectorAll('.options:checked').length;

			if(thisCount > 0){
				for(i=0;i<allCheckBox.length;i++){
					allCheckBox[i].removeAttribute('required');
				}
			} else {
				for(i=0;i<allCheckBox.length;i++){
					allCheckBox[i].setAttribute('required','required');
				}
			}
		};

		var allCheckBox = document.querySelectorAll('.options'),
				noJS = document.querySelector('.noJS');

	 	noJS.style.display = 'none';

	 	for(var i =0;i<allCheckBox.length;i++){
	 		console.log(allCheckBox[i]);
	 		allCheckBox[i].setAttribute('required','required');
	 		allCheckBox[i].addEventListener('change',deleteRequiredAttr);
	 	}

	 	// end multiple check boxes setting

	 	// Custom form validation

		var form = document.querySelector('form'),
				button = form.querySelector('button');

		// Support Safari and Android browser—each of which do not prevent
    // form submissions by default
		form.addEventListener( 'submit', function( event ) {
      if ( !this.checkValidity() ) {
        event.preventDefault();
      }
    });

		// The 'invalid' event is the one that triggers the
		// errors. Here we are preventing those errors.
		form.addEventListener( 'invalid',function(event){
	    event.preventDefault();
	  },true);

	  
	  // Adding the new behaviour to the DOM 
	  button.addEventListener('click', function(){

	  	// Saving all the errors in a variable
	  	var invalid = form.querySelectorAll(':invalid');
			
			for(var i = 0; i < invalid.length;i++){

				// setting the custom behavior if element willValidate
				if(invalid[i].willValidate){

					// create div for the error messages
					var error = document.createElement('div');
					// Targeting the parent on the input 
					var label = invalid[i].parentNode;

					// Adding the classes to the div
					error.className = 'error';
					// Setting the innerHtml with the 
					// validationMessage property for each error
					error.textContent = invalid[i].validationMessage;
					// adding the new element
					label.insertBefore(error,invalid[i].nextSibling);
				}
			}

			// Removing the actual error messages
			window.setTimeout(function(){

				var allErrors = document.querySelectorAll('.error');

				for(var i =0;i<allErrors.length;i++){

					allErrors[i].remove();
				}
			},5000);
		});


	})();

});