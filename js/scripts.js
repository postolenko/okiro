var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    // if( $(".portfolio_slider").length > 0 ) {
    //     $(".portfolio_slider").not(".slick-initialized").slick({
    //         dots: true,
    //         arrows: true,
    //         autoplay: true,
    //         autoplaySpeed: 4000,
    //         speed: 1200,
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         // fade: true,
    //         responsive: [
    //             {
    //               breakpoint: 900,
    //               settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //               }
    //             },
    //             {
    //               breakpoint: 540,
    //               settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //               }
    //             }
    //           ]
    //     });
    // }

    $(".catalog_title").on("click", function(e) {
      if( $("#sidebar").is(":hidden") ) {
        $("#sidebar").slideDown(700);
      } else {
        $("#sidebar").slideUp(700);
      }
    });

    // ----------------------

    ymaps.ready(function () {
        if($("#map").length > 0) {
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
        }
    });

    ymaps.ready(function () {
        if($("#map2").length > 0) {
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
        }
    });

});