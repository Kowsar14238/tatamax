$(".slider-responsive").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 10,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 357,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".slider-responsive2").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 357,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
