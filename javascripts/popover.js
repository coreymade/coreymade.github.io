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
});
