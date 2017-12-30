// Slick slider settings:
$(function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 1000,
    dots: true
  });

  $('.slider-top').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.slider-bottom'
  });

  $('.slider-bottom').slick({
    slidesToShow: 3,
    arrows: false,
    asNavFor: '.slider-top',
    focusOnSelect: true
  });
});
