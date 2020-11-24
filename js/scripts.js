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

    // ymaps.ready(function () {
    //     if($("#map").length > 0) {
    //         var myMap = new ymaps.Map('map', {
    //             center: [55.755814, 37.617635],
    //             zoom: 14
    //         }, {
    //             searchControlProvider: 'yandex#search'
    //         });
    //         myPlacemark1 = new ymaps.Placemark([55.755814, 37.617635], {
    //             hintContent: ''
    //         }, {
    //             // iconLayout: 'default#imageWithContent',
    //             // iconImageHref: 'img/yellow_marker.png',
    //             // iconImageSize: [39, 35],
    //             // iconImageOffset: [19, -17]
    //         });
    //         myMap.geoObjects.add(myPlacemark1);
    //     }
    // });

    // ymaps.ready(function () {
    //     if($("#map2").length > 0) {
    //         var myMap2 = new ymaps.Map('map2', {
    //             center: [55.755814, 37.617635],
    //             zoom: 14
    //         }, {
    //             searchControlProvider: 'yandex#search'
    //         });
    //         myPlacemark2 = new ymaps.Placemark([55.755814, 37.617635], {
    //             hintContent: ''
    //         }, {
    //             // iconLayout: 'default#imageWithContent',
    //             // iconImageHref: 'img/yellow_marker.png',
    //             // iconImageSize: [39, 35],
    //             // iconImageOffset: [19, -17]
    //         });
    //         myMap2.geoObjects.add(myPlacemark2);
    //     }
    // });


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

    $(".count-box button").click(function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".count-box");
        cardRow = parentBlock.closest(".table-row");
        priceValEl = cardRow.find(".price_val");
        priceVal = parseInt( priceValEl.text() );
        countInput = parentBlock.find(".count-num input");
        countVal = countInput.val();
        if(countVal == "") {
            countVal = 1;
        }
        if( $(this).hasClass("minus-btn") && countVal > 1 ) {
            countVal--;
        } else if( $(this).hasClass("plus-btn")) {
            countVal++;
        }
        countInput.val(countVal);
        cardRow.find(".price_total_val").text(priceVal * countVal);
    });


    $(".count-num input").on("keyup", function(e) {
        cardRow = $(this).closest(".table-row");
        countVal = $(this).val();
        priceValEl = cardRow.find(".price_val");
        priceVal = parseInt( priceValEl.text() );
        cardRow.find(".price_total_val").text(priceVal * countVal);
    });


});