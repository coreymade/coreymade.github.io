$(window).scroll(function() {
  var oVal;
  oVal = $(window).scrollTop() / 400;
  return $(".blur").css("opacity", oVal);
});
