(function() {

  $(function() {
    $('#hw-nav a').on('click', function(event) {
      event.preventDefault();
      $('#hw-nav').removeClass().addClass('span12').addClass($(this).attr('href'));
      return $('#hw-nav').next().removeClass().addClass('span12').addClass($(this).attr('href'));
    });
    return $('.results-modal').on('show', function() {
      var api;
      api = $('.scrollable').scrollable();
      return $(this).find('.items img').on('click', function() {
        var img, thumb, url, wrap;
        thumb = $(this);
        if (thumb.parent().hasClass('active')) {
          return;
        }
        url = $(this).data('src');
        wrap = $('.modal-body').fadeTo('medium', 0.5);
        img = new Image();
        img.onload = function() {
          wrap.fadeTo('fast', 1);
          return wrap.find('img').attr('src', url);
        };
        img.src = url;
        $('.items img').parent().removeClass('active');
        return $(this).parent().addClass('active');
      });
    });
  });

}).call(this);
