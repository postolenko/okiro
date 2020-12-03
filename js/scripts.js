function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getSlidesHeight() {
    $(".slider_2 .slide").css({"height" : "auto"});
    slidesHeight = $(".siderHeight").outerHeight(true) + 20;
    $(".slider_2 .slide").each(function() {
        $(this).height(slidesHeight);
    });
}

function getCatalogHeight() {
    if($("#promoDesc").length > 0) {
        $("#sidebar").css({
            "max-height" : "auto"
        });
        $("#sidebar").css({
            "max-height" : $("#promoDesc").height() + "px"
        });
    } else {
        $("#sidebar").css({
            "max-height" : "auto"
        });
    }
}

function setSubMenusPosition() {
    if(bodyWidth <= 1024) {
        $("[data-submenu]").each(function() {
            subMenuName = $(this).attr("data-submenu");
            $(this).appendTo("[data-submenu-item = '"+subMenuName+"']");
        });
    } else {
        $("[data-submenu]").each(function() {
            $(this).appendTo(".inners_menus");
        });
    }
}

function getMapPosition() {
    if(bodyWidth <= 600) {
        $(".map_box").each(function() {
            nameName = $(this).attr("id");
            $(this).appendTo("[data-mapid = '"+nameName+"']");
        });
    } else {
        $(".map_box").each(function() {
            $(this).appendTo(".maps_box");
        });
    }
}

function getOrderBoxPosition() {
    if(bodyWidth <= 1124) {
        $(".order_box_append").each(function() {
            $(".order_box").appendTo(".order_box_append");
        });
    } else {
        $(".order_box_append").each(function() {
            $(".order_box").appendTo("#orderBoxWrapp");
        });
    }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {
    getCatalogHeight();
    if($('#sidebar').length > 0) {
        $('#sidebar').mCustomScrollbar({
            callbacks:{
                whileScrolling:function(){
                    $("[data-submenu].active").each(function() {
                        subMenuName = $(this).attr("data-submenu");
                        subMenuParent = $("[data-submenu-item = '"+subMenuName+"']");
                        topCoord = subMenuParent.offset().top;
                        leftCoord = $("#sidebar").offset().left + $("#sidebar").width() + 10;
                        $(this).css({
                            "top" : topCoord + "px",
                            "left" : leftCoord + "px"
                        });
                    });
                }
            }
        });
    }
});

$(window).resize(function() {
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    setSubMenusPosition();
    setTimeout(function() {
        getSlidesHeight();
    }, 300);
    getCatalogHeight();
    getMapPosition();
    getOrderBoxPosition();
    getAnimation();
});

$(document).scroll(function() {
    getAnimation();
});

$(document).ready(function() {

    setSubMenusPosition();
    getSlidesHeight();
    getMapPosition();
    getOrderBoxPosition();
    getAnimation();
    

    $(".catalog_title").on("click", function(e) {
      if( $("#sidebar").is(":hidden") ) {
        $("#sidebar").slideDown(700);
        getCatalogHeight();
      } else {
        $("#sidebar").slideUp(700);
      }
    });

    // ----------------------

    if($("#map").length > 0) {
        ymaps.ready(function () {        
            var myMap = new ymaps.Map('map', {
                center: [55.755814, 37.617635],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark1 = new ymaps.Placemark([55.755814, 37.617635], {
                hintContent: ''
            }, {
                // iconLayout: 'default#imageWithContent',
                // iconImageHref: 'img/yellow_marker.png',
                // iconImageSize: [39, 35],
                // iconImageOffset: [19, -17]
            });
            myMap.geoObjects.add(myPlacemark1);        
        });
    }

    if($("#map2").length > 0) {
        ymaps.ready(function () {        
            var myMap2 = new ymaps.Map('map2', {
                center: [55.755814, 37.617635],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark2 = new ymaps.Placemark([55.755814, 37.617635], {
                hintContent: ''
            }, {
                // iconLayout: 'default#imageWithContent',
                // iconImageHref: 'img/yellow_marker.png',
                // iconImageSize: [39, 35],
                // iconImageOffset: [19, -17]
            });
            myMap2.geoObjects.add(myPlacemark2);
        });
    }

    // ------------

    $(".custom_select_title").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".custom_select");
      dropdownBlock = parentBlock.find(".custom_select_dropdown");
      if(dropdownBlock.is(":hidden")) {
        dropdownBlock.slideDown(300);
        parentBlock.addClass("active");
      } else {
        dropdownBlock.slideUp(300);
        parentBlock.removeClass("active");
      }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
          $(".custom_select").each(function() {
            if($(this).hasClass("active")) {
              $(this).removeClass("active");
              $(this).find(".custom_select_dropdown").slideUp(300);
            }
          });
      }
    });

    $(document).mouseup(function (e){
        e.preventDefault();
        var hide_element = $('.custom_select_dropdown');        
        if (!hide_element.is(e.target)
                && hide_element.has(e.target).length === 0) {
                hide_element.closest(".custom_select").removeClass("active");
                hide_element.slideUp(300);
        }
    });

    $(".custom_select_dropdown p").on("click", function(e) {
      e.preventDefault();
      value = $(this).attr("data-value");
      parentBlock = $(this).closest(".custom_select");
      inputHidden = parentBlock.find("input[type='hidden']");
      inputHidden.val(value);
      selectTitle = parentBlock.find(".custom_select_title p");
      selectTitle.text(value);
      $(this).closest(".custom_select_dropdown").slideUp(300);
      parentBlock.removeClass("active");
    });

    // ------------

    if($("#sl").length > 0) {
        var slider = document.getElementById('sl');
        noUiSlider.create(slider, {
            start: [20],
            connect: false,
            tooltips: true,
            format: wNumb({
                decimals: 0
            }),
            pips: {
                mode: 'steps',
                stepped: true,
                density: 100
            },
            range: {
                'min': 10,
                'max': 1000
            }
        });
    }

    // --------------

    $(".count_box button").click(function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".count_box");
        countInput = parentBlock.find(".count_num input");
        countVal = countInput.val();
        if(countVal == "") {
            countVal = 1;
        }
        if( $(this).hasClass("minus_btn") && countVal > 1 ) {
            countVal--;
        } else if( $(this).hasClass("plus_btn")) {
            countVal++;
        }
        countInput.val(countVal);
    });

    // -------------

    if( $(".big_slider").length > 0 ) {
        $(".big_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: '.miniature_slider',
        });

        $('.miniature_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.big_slider',
            dots: false,
            focusOnSelect: true,
            arrows: true,
            vertical: true,
            prevArrow: $("#topBtn"),
            nextArrow: $("#bottomBtn"),
            verticalSwiping: true,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  vertical: false,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  vertical: false,
                  slidesToShow: 2
                }
              }
            ]
        });
    }

    if( $(".goods_cards_2").length > 0 ) {
        $(".goods_cards_2").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 5
                }
              },
              {
                breakpoint: 1124,
                settings: {
                    arrows: true,
                    slidesToShow: 4
                }
              },
              {
                breakpoint: 900,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
              },
                {
                    breakpoint: 700,
                    settings: {
                    arrows: true,
                    slidesToShow: 2
                }
              },
                {
                    breakpoint: 480,
                    settings: {
                    arrows: true,
                    slidesToShow: 1
                }
              }
            ]
        });
    }

    // ---------

     if($("#map_3").length > 0) {
        ymaps.ready(function () {       
            var myMap3 = new ymaps.Map('map_3', {
                center: [55.755814, 37.617635],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark3 = new ymaps.Placemark([55.755814, 37.617635], {
                hintContent: ''
            }, {
                // iconLayout: 'default#imageWithContent',
                // iconImageHref: 'img/yellow_marker.png',
                // iconImageSize: [39, 35],
                // iconImageOffset: [19, -17]
            });
            myMap3.geoObjects.add(myPlacemark3);        
        });
    }

    if($("#map_4").length > 0) {

        ymaps.ready(function () {        
            var myMap4 = new ymaps.Map('map_4', {
                center: [55.755814, 37.617635],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark4 = new ymaps.Placemark([55.755814, 37.617635], {
                hintContent: ''
            }, {
                // iconLayout: 'default#imageWithContent',
                // iconImageHref: 'img/yellow_marker.png',
                // iconImageSize: [39, 35],
                // iconImageOffset: [19, -17]
            });
            myMap4.geoObjects.add(myPlacemark4);        
        });

    }

    // ----------------

    if( $(".promo_slider").length > 0 ) {
        $(".promo_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 8000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: $(".promo_slider_prev"),
            nextArrow: $(".promo_slider_next")
        });
    }

    // ----------------

    if( $(".offer_slider").length > 0 ) {
        $(".offer_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            appendArrows: $(".offer_slider_arrows")
        });
    }

    // ----------------

    if( $(".slider_2").length > 0 ) {
        $(".slider_2").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 8000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

    // ----------------    

    $(document).on('mouseenter', '[data-submenu-item]', function() {
        if(bodyWidth > 1024) {
            subMenuName = $(this).attr("data-submenu-item");
            topCoord = $(this).offset().top;
            leftCoord = $("#sidebar").offset().left + $("#sidebar").width() + 10;
            subMenu = $("[data-submenu = '"+subMenuName+"']");
            subMenu.addClass("active");
            subMenu.css({
                "top" : topCoord + "px",
                "left" : leftCoord + "px"
            });
        }
    });
    $(document).on('mouseleave', '[data-submenu-item]', function() {
        if(bodyWidth > 1024) {
            subMenuName = $(this).attr("data-submenu-item");
            subMenu = $("[data-submenu = '"+subMenuName+"']");
            subMenu.removeClass("active");
            subMenu.css({
                "top" : 0,
                "left" : -999999 + "px"
            });
        }
    });
    $(document).on('mouseenter', '[data-submenu]', function() {
        if(bodyWidth > 1024) {
            subMenuName = $(this).attr("data-submenu");
            subMenuParent = $("[data-submenu-item = '"+subMenuName+"']");
            topCoord = subMenuParent.offset().top;
            leftCoord = $("#sidebar").offset().left + $("#sidebar").width() + 10;
            $(this).addClass("active");
            $(this).css({
                "top" : topCoord + "px",
                "left" : leftCoord + "px"
            });
        }
    });
    $(document).on('mouseleave', '[data-submenu]', function() {
        if(bodyWidth > 1024) {
            $(this).removeClass("active");
            $(this).css({
                "top" : 0,
                "left" : -999999 + "px"
            });
        }
    });

    $(".catalog_list_wrapp .down_btn").on('click', function(e) {
        if(bodyWidth <= 1024) {
            e.preventDefault();
            parentBlock = $(this).closest("li");
            dropdownBlock = parentBlock.find(".sub_menu");
            link = $(this).closest("a");
            if(dropdownBlock.is(":hidden")) {
                dropdownBlock.slideDown(300);
                link.addClass("active");
                $(this).addClass("active");
            } else {
                dropdownBlock.slideUp(300);
                link.removeClass("active");
                $(this).removeClass("active");
            }
        }
    });

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    $("#resp_nav .close_nav").on("click", function(e) {
      e.preventDefault();
      $("#resp_nav").fadeOut(300);
      $(".respmenubtn").removeClass("active");
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth <= 900) {
              $("#resp_nav").fadeOut(300);
              $(".respmenubtn").removeClass("active");
      }
    });

    // --------------

    $("#filtersBtn").on("click", function(e) {
      if( $("#catalogSidebar").is(":hidden") ) {
        $("#catalogSidebar").slideDown(700);
      } else {
        $("#catalogSidebar").slideUp(700);
      }
    });

});