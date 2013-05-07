$(function() {
    
    // Toggle mobile header nav
    $('.btn-sml').click(function () {
      
      // Slide down login form
      $('.stranger').toggleClass('show');
      
      // Autofocus email input
      $('#email').focus();
      
    });
    
    // Call the functions in helper.js
    MBP.scaleFix();
    MBP.hideUrlBarOnLoad();
    new MBP.autogrow(document.getElementById('myTextarea'), 14); // 14 -- line height
    MBP.enableActive();
    MBP.preventScrolling();
    MBP.preventZoom();
    MBP.startupImage();
    
});