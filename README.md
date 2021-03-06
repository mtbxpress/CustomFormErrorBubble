# Custom Form Error Bubbles 

By default all major browsers have their own CSS styles for the error messages when a form is submitted and some fields are empty or with a wrong value.

In order to have custom look for the bubbles across all supporting browsers the only option is to suppress the default bubble and implement your own.

```javascript
	// preventing the default behavior

	var form = document.querySelector('form');

	form.addEventListener('invalid', function(event) {
      event.preventDefault();

      // do stuff
    }, true);
```
 
In the [html](https://github.com/byverdu/HTML5FormValidator/blob/master/index.html) file you will find a really simple example, the `required` attribute is a must in all the elements that you need to validate.

Take a look to all the possible values for the `type` attribute used in the `input` [tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input).

### Issues

Using the required attribute for a group of check boxes fails because when you submit the form the error message pops up for the unchecked boxes. 

To solve this you need to add a common class for all this elements and add/remove the required attribute programmatically.

There is a version for plain javascript and another one for jQuery.

<p align="center">
  <img src="demo.png" alt="demo image">
</p>


## ToDo

There is a lot to improve:

1. Adding a node server with nodemailer to receive custom message after a success submit.
2. Adding more ways to display the error messages.
3. Improve the code.
4. ...