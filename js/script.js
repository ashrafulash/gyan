$('.banner_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow:'<i class="fas fa-chevron-right banner_next"></i>',
    prevArrow:'<i class="fas fa-chevron-left banner_prev">',
});


$('.course_part').slick({
  infinite: true,
  slidesToShow:3,
  slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow:'<i class="fas fa-chevron-right course_next"></i>',
    prevArrow:'<i class="fas fa-chevron-left course_prev">',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.test_slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
//    autoplay: true,
//    autoplaySpeed: 2000,
    arrows: true,
    nextArrow:'<i class="fas fa-chevron-right test_next"></i>',
    prevArrow:'<i class="fas fa-chevron-left test_prev">',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.teacher_slide').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$('.left_slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
});



jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 100,
                time: 2000
            });
        });