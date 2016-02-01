$(document).ready(function() {
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 130) {
        $('.navbar').addClass('show-nav');
        $('.logo').hide();
      } else {
        $('.navbar').removeClass('show-nav');
        $('.logo').show();
      }
    });
  });
});