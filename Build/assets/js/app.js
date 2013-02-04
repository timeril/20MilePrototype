(function() {

  $(function() {
    return $('#hw-nav a').on('click', function(event) {
      event.preventDefault();
      $('#hw-nav').removeClass().addClass('span12').addClass($(this).attr('href'));
      return $('#hw-nav').next().removeClass().addClass('span12').addClass($(this).attr('href'));
    });
  });

}).call(this);
