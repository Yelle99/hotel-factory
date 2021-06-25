/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/src/js/app.js":
/***/ (function(module, exports) {

$(document).ready(function () {
  var fixedNav = $(".secondary-nav");
  var topNav = $(".primary-nav");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
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
      prevArrow: "<img class='prev-arrow' src='../../images/prev-arrow.svg'>"
    });

    $(".news-slider").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: "<img class='prev-arrow--news' src='../../images/prev-arrow-news.svg'>",
      nextArrow: "<img class='next-arrow--news' src='../../images/next-arrow-news.svg'>"
    });

    $(".reviews").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: "<img class='prev-arrow--news' src='../../images/prev-arrow-news.svg'>",
      nextArrow: "<img class='next-arrow--news' src='../../images/next-arrow-news.svg'>",
      dots: true
    });
  }

  if ($("#product").length > 0) {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav"
    });

    $(".slider-nav").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      asNavFor: ".slider-for",
      dots: false,
      arrows: true,
      prevArrow: "<img class='prev-arrow--news' src='../../images/prev-arrow-news.svg'>",
      nextArrow: "<img class='next-arrow--news' src='../../images/next-arrow-news.svg'>",
      focusOnSelect: true
    });

    var reservedDates = $("#side").data("dates");
    $("#calendarFrom").flatpickr({
      dateFormat: "Y-m-d",
      disable: reservedDates
    });
    $("#calendarTo").flatpickr({
      dateFormat: "Y-m-d",
      disable: reservedDates
    });

    var plusAdults = $(".plus-adults");
    var minusAdults = $(".minus-adults");
    var adults = $(".adults-num");
    var numberAdults = 0;

    plusAdults.click(function () {
      numberAdults += 1;
      adults.val(numberAdults);
    });

    minusAdults.click(function () {
      numberAdults -= 1;
      adults.val(numberAdults);
    });

    var plusChildren = $(".plus-children");
    var minusChildren = $(".minus-children");
    var children = $(".children-num");
    var numberChildren = 0;

    plusChildren.click(function () {
      numberChildren += 1;
      children.val(numberChildren);
    });

    minusChildren.click(function () {
      numberChildren -= 1;
      children.val(numberChildren);
    });
  }
});

/***/ }),

/***/ "./resources/assets/src/scss/main.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/src/js/app.js");
module.exports = __webpack_require__("./resources/assets/src/scss/main.scss");


/***/ })

/******/ });