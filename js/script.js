$(document).ready(function () {
  // header menu
  $(".header-menu__toggle").click(function () {
    $("#header-menu").toggleClass("toggled");
    $("#site-navigation").toggleClass("toggled");
    $(".header-menu__toggle .screen-reader-text").text("Close");
    $("html").toggleClass("scrollbar-hide");
  });
  // widget sub menu showing animation
  $("#widget-menu").hover(function () {
    $(".widget-sub-menu").toggleClass("show");
  });

  // sticky header
  var secMenuOffset = $(".section-menu").offset().top;
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    if ($(window).scrollTop() >= 80) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  });
  // Sticky Navigation on scroll
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= secMenuOffset) {
      $(".section-menu").addClass("fixed");
    } else {
      $(".section-menu").removeClass("fixed");
    }
  });

  //lodge section animation dot on scroll
  $(window).on("scroll", function () {
    var section_menu_item = $(".section-menu .section-item");
    var top = $(window).scrollTop();
    $(".section").each(function () {
      var id = $(this).attr("id");
      var height = $(this).height();
      var offset = $(this).offset().top - 150;
      if (top >= offset && top < offset + height) {
        section_menu_item.removeClass("active");
        $(".section-menu")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  });

  //Simbavati collection Select option
  $(".filter-options-wrapper").click(function () {
    $("div.filter-dropdown>div.list").toggleClass("show");
  });

  /*======Header site navigation acordion=======*/
  $(".menu-items-column:first").addClass("active");
  $(".menu-items-column:first")
    .children(".menu-items-wrapper")
    .addClass("show")
    .slideDown();

  $(".menu-item-header").click(function () {
    if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active");
      $(this).next().removeClass("show").slideUp(500);
    } else {
      $(this).parent().addClass("active");
      $(this).next().addClass("show").slideDown(500);
    }
  });
  /*======Footer widgets Accordion=======*/
  $(".footer-widgets__column:first")
    .children(".footer-widget-title")
    .addClass("active");
  $(".footer-widgets__column:first")
    .children(".footer-widget-menu")
    .addClass("show")
    .slideDown();

  $(".footer-widget-title").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next().removeClass("show").slideUp(500);
    } else {
      $(this).addClass("active");
      $(this).next().addClass("show").slideDown(500);
    }
  });

  // cursor Animation
  $(document).on("mousemove", function (e) {
    $("#cursor").css({
      left: e.pageX - 20 + "px",
      top: e.pageY - 20 + "px",
    });
  });

  $(
    ".logo,.header-menu__toggle,.header-widgets,.rate-slide,.experience-card,.article-column,collection-slide"
  ).hover(function () {
    $(".cursor__circle").css("transition", "all -5s");
    $(".cursor__circle").toggleClass("large");
  });

  // Rate slide
  $(function () {
    $(".rate-slick-track")
      .on("init", function (event, slick) {
        $(".current").text(slick.currentSlide + 1);
        $(".total").text(slick.slideCount);
      })
      .slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: ".rate-slick-next",
        prevArrow: ".rate-slick-prev",
        speed: 1000,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true,
              dotsClass: "slick-dots",
            },
          },
        ],
      })
      .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(".current").text(nextSlide + 1);
      });
  });

  //Rooms Slider
  $(function () {
    $(".rooms-slide-track")
      .on("init", function (event, slick) {
        $(".current").text(slick.currentSlide + 1);
        $(".total").text(slick.slideCount);
      })
      .slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: ".room-slide-next",
        prevArrow: ".room-slide-prev",
        speed: 1000,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplsySpeed: 6000,

        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true,
              dotsClass: "slick-dots",
            },
          },
        ],
      })
      .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(".current").text(nextSlide + 1);
      });
  });

  // Gallery slide
  $(function () {
    $(".gallery-slide-track")
      .on("init", function (event, slick) {
        $(".current").text(slick.currentSlide + 1);
        $(".total").text(slick.slideCount);
      })
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: ".gallery-slide-next",
        prevArrow: ".gallery-slide-prev",
        speed: 1000,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplsySpeed: 6000,

        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              dotsClass: "slick-dots",
            },
          },
        ],
      })
      .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(".current").text(nextSlide + 1);
      });
  });

  // simbavati-collection slide
  $(".sim-col-slick-track").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: ".collection-slide-next",
    prevArrow: ".collection-slide-prev",
    speed: 1000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          slidesToShow: 4,
          autoplay: true,
          autoplsySpeed: 6000,
          dots: true,
          dotsClass: "slick-dots",
        },
      },
    ],
  });

  // Main modal
  $(".popup-btn").click(function () {
    $("html").addClass("scrollbar-hide");
    $("#main-modal").addClass("popup-active");
    var hrefValue = $(this).children().attr("href");
    $("#main-modal " + hrefValue + " a").addClass("active");
    $('#main-modal [data-id="' + hrefValue + '"]')
      .addClass("active")
      .fadeIn(800);
    var activeItemText = $(
      "#main-modal .modal-main-nav " + hrefValue + " a.active"
    ).text();
    $("#main-modal .dropdown-option.main-list h4 span").text(activeItemText);
    setTimeout(() => $("#main-modal").addClass("active-scroll"), 1);
    if ($(this).children().attr("href") == "#rates-table") {
      $('.modal-rate li a[href="#inclusionstab"]').addClass("actived");
      $('#main-modal [data-id="#inclusionstab"]')
        .addClass("actived")
        .fadeIn(500);
    }
  });

  $(".close-modal").click(function () {
    $("html").removeClass("scrollbar-hide");
    $("#main-modal").removeClass("popup-active");
    $("#main-modal .wwx-title-item a").removeClass("active");
    $("#main-modal .wwx-tab-inner-content")
      .siblings()
      .removeClass("active")
      .fadeOut(10);
    $("#main-modal").removeClass("active-scroll");
  });

  $("#main-modal .modal-main-nav .wwx-title-item a").click(function (e) {
    e.preventDefault();
    $(".modal-main-nav .wwx-title-item a").removeClass("active");
    $(this).addClass("active");
    var listHrefValue = $(this).attr("href");
    $('#main-modal [data-id="' + listHrefValue + '"]')
      .siblings()
      .removeClass("active")
      .fadeOut(10);
    $('#main-modal [data-id="' + listHrefValue + '"]')
      .addClass("active")
      .fadeIn(1000);
    $("#main-modal .modal-main-nav").removeClass("show");
    $("#main-modal .modal-rate").removeClass("show");
    var itemText = $("#main-modal .modal-main-nav a.active").text();
    $("#main-modal .dropdown-option.main-list h4 span").text(itemText);
    if ($(this).attr("href") == "#rates-table") {
      $('.modal-rate li a[href="#inclusionstab"]').addClass("actived");
      $('#main-modal [data-id="#inclusionstab"]')
        .addClass("actived")
        .fadeIn(500);
    }
  });

  //Modal accordion
  $(".wp-block-mku-accordion").click(function () {
    $(this).toggleClass("active");
    $(this).children(".accordion-body").slideToggle(500);
    $(this).siblings(".wp-block-mku-accordion").removeClass("active");
    $(this)
      .siblings(".wp-block-mku-accordion")
      .children(".accordion-body")
      .slideUp(500);
  });
  // dropdown options
  $("#main-modal .dropdown-option h4").click(function () {
    $("#main-modal .wwx-tabs-title-list").toggleClass("show");
  });

  // main modal rate inner nav
  $(".modal-rate li a").click(function (e) {
    e.preventDefault();
    $(".modal-rate li a").removeClass("actived");
    $(this).addClass("actived");
    var getTragetId = $(this).attr("href");
    $('#main-modal [data-id="' + getTragetId + '"]')
      .addClass("actived")
      .fadeIn(500);
    $('#main-modal [data-id="' + getTragetId + '"]')
      .siblings()
      .removeClass("actived")
      .fadeOut(1);
    $("#main-modal .modal-rate").removeClass("show");
    $("#main-modal .modal-main-nav").removeClass("show");
  });

  // parallax header banner
  $(window).bind("load resize scroll", function (event) {
    $(".header-banner").each(function () {
      var thisOffsetTop = $(this).offset().top;
      var winHeight = $(window).height();
      var mainOffset = thisOffsetTop - winHeight;
      var winScrollTop = $(window).scrollTop();
      var topPosition = winScrollTop - mainOffset;
      if (winScrollTop > mainOffset) {
        $(this)
          .children(".header-banner__img")
          .css("top", parseInt(topPosition / 4.5) + "px");
      }
    });
  });

  // header Slider
  $(".header-banner__slider")
    .on("init", function (event, slick) {
      $(".current").text(slick.currentSlide + 1);
      $(".total").text(slick.slideCount);
    })
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".header-banner__prev"),
      nextArrow: $(".header-banner__next"),
      speed: 1300,
      infinite: true,
      autoplay: true,
      fade: true,
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $(".current").text(nextSlide + 1);
    });

  $(window).on("load", function () {
    AOS.refresh();
  });
  $(function () {
    AOS.init({ duration: 1000, once: true, delay: 300 });
  });
});
