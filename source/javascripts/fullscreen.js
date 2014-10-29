$(document).ready( function(){
  $('body').find('.header-section,.new,.blur,#menu').height($(window).height());

    $("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#menu").slideToggle();
  });
});
