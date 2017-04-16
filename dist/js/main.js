$(document).ready(function () {
  $('.news').each(function() {
    var img = $(this).find('img');
    var src = img.attr('src');
    img.hide();
    $(this).find('.news__img').css('background-image', 'url(' + src + ')');
  });
})