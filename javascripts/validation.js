(function($){
  $(document).ready(function(){
    var $nameField = $('#name'),
        $emailField = $('#email')

    $nameField.on('keyup', function() {
      var $this = $(this),
          $status = $this.parent().find('.status'),
          val = $this.val();

      if(
        val != "" &&
        val.length > 2 &&
        val.length < 10
      ) {
        $status.addClass('flip')
      } else {
        $status.removeClass('flip')
      }

    })

    $emailField.on('keyup', function() {
      var $this = $(this),
          $status = $this.parent().find('.status'),
          val = $this.val();

      if(
        val != "" &&
        val.length > 3 &&
        val.length < 40 &&
        val.indexOf('@') >= 0 &&
        val.indexOf('@') != val.length-1
      ) {
        $status.addClass('flip')
      } else {
        $status.removeClass('flip')
      }

    })
  })
})(jQuery)
;
