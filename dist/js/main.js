$(document).ready(function () {

  $('.document-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true
  });

  $('.juice-slider').slick({
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.juice-slider-left').on('click', function() {
    $('.juice-slider').slick("slickPrev");
  })

  $('.juice-slider-right').on('click', function() {
    $('.juice-slider').slick("slickNext");
  })

  $('.taste-choice .taste').on('click', function() {
    var index = $(this).index();
    console.log(index)
    $('.exposition__slide').removeClass('active');
    $('.exposition__slide').eq(index).addClass('active');
  })

})