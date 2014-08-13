$(document).ready(function() {
	var $body = $('body');

	$('.popover').on('click', function(event) {
		event.preventDefault();
		$body.find('#popover-content').addClass('visible');
	});

	$('.close').on('click', function(event) {
		event.preventDefault();
		$(this).parent().removeClass('visible');
		$body.find('.navigation-area').addClass('visible');
	});

	var showMenuPosition = $('#show-menu').position().top
  var opacity = 1;
  $(window).on("scroll", function() {
      var fromTop = $(window).scrollTop();
      if(fromTop > showMenuPosition){
          $("#top").fadeIn();
      }else{
          $("#top").fadeOut();
      }
  });

});
