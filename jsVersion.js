window.addEventListener('DOMContentLoaded',function(){

	(function(){
		var form = document.querySelector('form');

		form.addEventListener( 'invalid',function(event){
	    event.preventDefault();
	  },true);

	  var button = form.querySelector('button');

	  button.addEventListener('click', function(){

	  	var invalid = form.querySelectorAll(':invalid');
		
			for(var i = 0; i < invalid.length;i++){

				console.log(invalid[i].parentNode);

				var error = document.createElement('div');
				var label = invalid[i].parentNode;

				error.className = 'message error';
				error.textContent = invalid[i].validationMessage;
				console.log(error);

				// invalid[i].appendChild(error);

				label.insertBefore(error,invalid[i]);
			}

			window.setTimeout(function(){

				var allErrors =document.querySelectorAll('.error');

				for(var i =0;i<allErrors.length;i++){

					allErrors[i].remove();
				}
			},4000);
		});
	})();

});