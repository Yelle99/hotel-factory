$(document).ready(function() {
  let fixedNav = $(".secondary-nav");
  let topNav = $(".primary-nav");

  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= topNav.height()) {
      fixedNav.addClass("fixed");
    } else {
      fixedNav.removeClass("fixed");
    }
  });

  if ($("#home").length > 0) {
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
  }

  if ($("#product").length > 0) {
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

    let reservedDates = $("#side").data("dates");
    $("#calendarFrom").flatpickr({
      dateFormat: "Y-m-d",
      disable: reservedDates,
    });
    $("#calendarTo").flatpickr({
      dateFormat: "Y-m-d",
      disable: reservedDates,
    });

    let plusAdults = $(".plus-adults");
    let minusAdults = $(".minus-adults");
    let adults = $(".adults-num");
    let numberAdults = 0;

    plusAdults.click(function() {
      numberAdults += 1;
      adults.val(numberAdults);
    });

    minusAdults.click(function() {
      numberAdults -= 1;
      adults.val(numberAdults);
    });

    let plusChildren = $(".plus-children");
    let minusChildren = $(".minus-children");
    let children = $(".children-num");
    let numberChildren = 0;

    plusChildren.click(function() {
      numberChildren += 1;
      children.val(numberChildren);
    });

    minusChildren.click(function() {
      numberChildren -= 1;
      children.val(numberChildren);
    });
  }
});
