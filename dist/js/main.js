$(document).ready(function () {

  if (window.matchMedia("(min-width: 400px)").matches) {
    console.log('400')
  } else {
    console.log('not')
  }

  var page = window.location.pathname;

  if(page !== '/juice/_index.html') {
    $('.bg').addClass('bg--offset');
  }


  $('.document-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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


  $('.juice-slider-nav').slick({
    arrows: false,
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerPadding: '20px',
    asNavFor: '.juice-slider',
    centerMode: true,
    dots: false,
    focusOnSelect: true,
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
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 330,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

   $('.juice-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.juice-slider-nav'
  });
    

  $('.juice-slider-nav-left').on('click', function() {
    $('.juice-slider-nav').slick("slickPrev");
  })

  $('.juice-slider-nav-right').on('click', function() {
    $('.juice-slider-nav').slick("slickNext");
  })

  $('.taste-choice .taste').on('click', function() {
    var index = $(this).index() + 1;
    console.log(index)
    $('.exposition__slide').removeClass('active');
    $('.exposition__slide').eq(index).addClass('active');
    $('.taste-choice .taste').removeClass('active');
    $(this).addClass('active');
    $('.card.card--main').removeClass('active');
    $('.card.card--main').eq(index).addClass('active');
  });

  $('.action__right').on('click', function() {
    var index = $('.exposition__slide.active').index();
    $('.exposition__slide').removeClass('active');
    // console.log(index)
    if(index === 9) {
      index = 0;
    }
    $('.exposition__slide').eq(index + 1).addClass('active');
    $('.card.card--main').removeClass('active');
    $('.card.card--main').eq(index + 1).addClass('active');
  })

  $('.action__left').on('click', function() {
    var index = $('.exposition__slide.active').index();
    // console.log(index)
    if (index === 1) {
      index = 10
    }
    $('.exposition__slide').removeClass('active');
    $('.exposition__slide').eq(index - 1).addClass('active');
    $('.card.card--main').removeClass('active');
    $('.card.card--main').eq(index - 1).addClass('active');
  })


  $('.open-modal').magnificPopup({
    type: 'inline',
    callbacks: {
      open: function() {
        $('.modal').addClass('loaded');
      }
    }
  });


  $('.btn.inner-card__btn').magnificPopup({
    type: 'inline',
    callbacks: {
      open: function() {
        $('.modal').addClass('loaded');
      }
    }
  });

  $('.document').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });

  $('.mobile-menu__close').on('click', function() {
    // $('.mobile-menu').removeClass('mobile-menu--active');
    $('.mobile-menu').removeClass('mobile-menu--active');
  })

  $('.menu-open__open').on('click', function() {
    $('.mobile-menu').addClass('mobile-menu--active');
  })

  // $('.small-packs .pack').each(function() {
  //   var pack = $(this);
  //   var hoverUrl = $(this).data('hover');
  //   $(this).mouseenter(function() {
  //     // console.log('background:', 'url("' + hoverUrl + '");')

  //     $(this).css({
  //       'background-image': 'url("' + hoverUrl + '")'
  //     });
  //   });
  // })

})