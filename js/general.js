$(document).ready(function() {
  $("#login").click(function() {
    var value = $("#login").text();
    var update_to = "close";
    if(value == update_to){
      update_to = "login";
      $('#email').val('');
      $('#password').val('');
    }
    $("#login").text(update_to);
  });
});