/* jshint browser:true */
'use strict';

window.addEventListener('DOMContentLoaded', function() {

  (function() {
    // Custom form validation
    function changeFormUI(form) {

      // The 'invalid' event is the one that triggers the
      // errors. Here we are preventing those errors.
      form.addEventListener('invalid', function(event) {
        event.preventDefault();
      }, true);

      // Support Safari and Android browser—each of which do not prevent
      // form submissions by default
      form.addEventListener('submit', function(event) {
        if (!this.checkValidity()) {
          event.preventDefault();
        }
      });

      var button = form.querySelector('button');

      // Adding the new behaviour to the DOM 
      button.addEventListener('click', function() {

        // Saving all the errors in a variable
        var label,
          error,
          invalid = form.querySelectorAll(':invalid'),
          allErrors = document.querySelectorAll('.error');

        // removing existing errors
        for (i = 0; i < allErrors.length; i++) {
          allErrors[i].remove();
        }

        for (i = 0; i < invalid.length; i++) {

          // setting the custom behavior if element willValidate
          if (invalid[i].willValidate) {

            // create div for the error messages
            error = document.createElement('div');
            error.className = 'error';
            error.textContent = invalid[i].validationMessage;

            // Targeting the input's parent and adding the new element
            label = invalid[i].parentNode;
            label.insertBefore(error, invalid[i].nextSibling);
          }
        }

        // focus on the first element with error
        if (invalid.length > 1) {

          var arr = [];

          [].map.call(invalid, function(val) {
            if (val.willValidate) {
              arr.push(val);
            }
          });

          arr[0].focus();
        }
      });
    }

    // adding the required attribute for multiple check boxes
    function deleteRequiredAttr() {

      var i,
        thisCount = document.querySelectorAll('.options:checked').length;

      if (thisCount > 0) {
        for (i = 0; i < allCheckBox.length; i++) {
          allCheckBox[i].removeAttribute('required');
        }
      } else {
        for (i = 0; i < allCheckBox.length; i++) {
          allCheckBox[i].setAttribute('required', 'required');
        }
      }
    }

    var i,
      forms,
      allCheckBox = document.querySelectorAll('.options'),
      noJS = document.querySelector('.noJS');

    noJS.style.display = 'none';

    for (i = 0; i < allCheckBox.length; i++) {
      allCheckBox[i].setAttribute('required', 'required');
      allCheckBox[i].addEventListener('change', deleteRequiredAttr);
    }

    // end multiple check boxes setting

    // Change behaviour for all the forms     

    forms = document.querySelectorAll('form');

    for (i = 0; i < forms.length; i++) {
      changeFormUI(forms[i]);
    }

  })();

});
