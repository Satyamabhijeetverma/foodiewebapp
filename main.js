//window.onload = function() is used javascript
// Runs when HTML file is loaded
//where as this tehnique is for Jquery
$(document).ready(function() {
  //this code runs when the html is loaded
  //this is an event called 'input' whicch runs when everr we rwrite sokmething in <input>
    $('#user-email').on('input',function() {
      var email = $('#user-email').val()
      var message = 'Welcome Back, ' + email;
      $('.welcome-message').text(message);
    });
});
