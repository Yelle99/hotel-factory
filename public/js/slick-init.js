$(document).ready(function () {
  $(".hero-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<img class='prev-arrow' src='../../images/prev-arrow.svg'>",
  });

  $(".news-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      "<img class='prev-arrow--news' src='../../images/prev-arrow-news.svg'>",
    nextArrow:
      "<img class='next-arrow--news' src='../../images/next-arrow-news.svg'>",
  });

  $(".reviews").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      "<img class='prev-arrow--news' src='../../images/prev-arrow-news.svg'>",
    nextArrow:
      "<img class='next-arrow--news' src='../../images/next-arrow-news.svg'>",
    dots: true,
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: ".slider-for",
    dots: false,
    arrows: true,
    prevArrow:
      "<img class='prev-arrow--news' src='../../images/prev-arrow-news.svg'>",
    nextArrow:
      "<img class='next-arrow--news' src='../../images/next-arrow-news.svg'>",
    focusOnSelect: true,
  });
});
