/* jshint browser:true */
/* jshint jquery:true */

'use strict';

$(document).ready(function() {

  $('.noJS').hide(); // hiding the no JS element

  // adding the required attribute for multiple check boxes
  var allCheckBox = $('.options');

  allCheckBox.attr('required', 'required');

  allCheckBox.change(function() {
    if (allCheckBox.is(':checked')) {
      allCheckBox.removeAttr('required');
    } else {
      allCheckBox.attr('required', 'required');
    }
  });

  // end multiple check boxes setting

  // Custom form validation

  $('form').each(function(el) {
    changeFormUI(el);
  });

  function changeFormUI() {

    $('button').on('click', function(event) {

      event.preventDefault();

      var invalid = $('label > :invalid');

      $('.error').fadeOut('fast');

      invalid.each(function(el) {
        var errors = $('<div>').addClass('error').text(el.validationMessage);

        $(el).after(errors);

      });

      if (invalid.length > 1) {
        invalid[0].focus();
      }
    });
  }
});
