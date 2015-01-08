$(document).ready(function() {
    var $menuToggle = $('#menu-toggle');

    $menuToggle.on('click', function () {
        $(this).toggleClass('active');
    });
});
