
    $(document).ready(function(){
    $('.delivery-optional-p').click(function(){
      $(".delivery-optional-p").toggleClass("delivery-dec");
      $(".cart-deliv-sec-1").toggleClass("delivery-dec");
      $(".delivery-fee").toggleClass("delivery-dec");
    });
  });


    $(document).ready(function(){
    $('.pro-delivery-btn').click(function(){
      $(".pro-delivery-btn").toggleClass("delivery-dec");
      $(".delivery-optional-p").toggleClass("delivery-dec");
    });
  });


$(document).ready(function(){
    $('.nav-toggler').click(function(){
      $(".nav-icons").addClass("togle-navBar");
      $(".nav-body").addClass("togle-navBar");
    });
  });

$(document).ready(function(){
    $('.togleOut-icon').click(function(){
      $(".nav-icons").removeClass("togle-navBar");
      $(".nav-body").removeClass("togle-navBar");
    });
  });


$(document).ready(function(){
    $('.nav-body').click(function(){
      $(".nav-icons").removeClass("togle-navBar");
      $(".nav-body").removeClass("togle-navBar");
    });
  });


    $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>50){
        $(".toggle-up").addClass("show-toggle-up");
      }
      else{
        $(".toggle-up").removeClass("show-toggle-up");
      }
    });
});


$(document).ready(function(){
    $('.search-btn').click(function(){
      $(".sub-navBar").addClass("togle-sub-navBar");
    });
  });

$(document).ready(function(){
    $('.close-search').click(function(){
      $(".sub-navBar").removeClass("togle-sub-navBar");
    });
  });


    $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>0){
        $(".top-nav").addClass("addbg-nav");
      }
      else{
        $(".top-nav").removeClass("addbg-nav");
      }
    });
});











function set_anim(){
  setInterval(offtimset,21000);
     setTimeout(function(){
    $('.location-popup').addClass('show-location-popup');
},2000);
}
function offtimset(){
  setTimeout(function(){
    $('.anim-banner').removeClass('JsAnimated');
},10000);
   setTimeout(function(){
   $('.anim-banner').addClass('JsAnimated');
   $('.hidden-anim').addClass('JsAnimated');
},11000);

      setTimeout(function(){
   $('.hidden-anim').removeClass('JsAnimated');
},20000);
     
     
}








// homepage js


$(document).ready(function(){
    $('.loaction-close').click(function(){
      $(".location-popup").removeClass("show-location-popup");
    });
  });




$(document).ready(function(){
    $('.location-select').click(function(){
      $(".input-sec").addClass("show-location-popup");
    });
  });

$(document).ready(function(){
    $('.input-sec-body').click(function(){
      $(".input-sec").removeClass("show-location-popup");
    });
  });

$(document).ready(function(){
    $('.close-input-sec').click(function(){
      $(".input-sec").removeClass("show-location-popup");
    });
  });



$('.cart-owl').owlCarousel({
      items: 7,
        loop: true,
        margin: 0,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ['<span class="ti-angle-left">', '<span class="ti-angle-right">'],
        smartSpeed: 500,
         responsive: {
              0: {
                items: 1,
            },
            200: {
                items: 2,
            },
              300: {
                items: 2,
            },
                330: {
                items: 3,
            },
               550: {
                items: 4,
            },
             600: {
                items: 5,
            },
            680: {
                items: 6,
            },
            1300: {
                items: 8,
            }
        }
    });


$('.part-owl').owlCarousel({
      items: 7,
        loop: true,
        margin: 0,
        center: true,
        autoplay: true,
        nav: false,
        dots: false,
        navText: ['<span class="ti-angle-left">', '<span class="ti-angle-right">'],
          smartSpeed: 1000,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
         responsive: {
              0: {
                items: 1,
            },
             250: {
                items: 2,
            },
             500: {
                items: 3,
            },
             700: {
                items: 4,
            },
            1300: {
                items: 7,
            }
        }
    });


   $('.product-owl').owlCarousel({
      items: 6,
        loop: true,
        margin: 20,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ['<span class="ti-angle-left">', '<span class="ti-angle-right">'],
        smartSpeed: 500,
         responsive: {
              0: {
                items: 1,
            },
             400: {
                items: 2,
            },
            700: {
                items:3,
            },
            800: {
                items: 4,
            },
            1000: {
                items: 5,
            },
            1300: {
                items: 6,
            }
        }
    });







function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}


function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}










    $(document).ready(function(){
    $('.search-opt-btn').hover(function(){
      $(".hero-search-main").toggleClass("Query-search-main");
    });
  });

            $(document).ready(function(){
    $('.product-li').click(function(){
      $(".product-input").addClass("Query-search");
       $(".rider-input").removeClass("Query-search");
    });
  });

        $(document).ready(function(){
    $('.rider-li').click(function(){
      $(".product-input").removeClass("Query-search");
       $(".rider-input").addClass("Query-search");
    });
  });












    $(document).ready(function(){
    $('.Nav-search-opt-btn').hover(function(){
      $(".navSearchp-main").toggleClass("Query-navSearchp-main");
    });
  });



    $(document).ready(function(){
    $('.Nav-product-li').click(function(){
      $(".Nav-product-input").addClass("Nav-Query-search");
       $(".Nav-rider-input").removeClass("Nav-Query-search");
    });
  });

        $(document).ready(function(){
    $('.Nav-rider-li').click(function(){
      $(".Nav-product-input").removeClass("Nav-Query-search");
       $(".Nav-rider-input").addClass("Nav-Query-search");
    });
  });







// this is for input checkinga and unchecking others
$('.sort-input').on('change', function() {
  $('.sort-input').not(this).prop('checked', false);
})















          function ReviewInputFocus(){
    var rInput = document.getElementById('review-input-box').value;

    if(rInput == null || rInput !== ""){
        $(".review-input").addClass("addBg-to-btn");
    }
     else if(rInput == null || rInput == ""){
        $(".review-input").removeClass("addBg-to-btn");
    }
}




$(document).ready(function(){
    $('.rating-btn').click(function(){
        $(".review-sec").addClass("show-review-sec");
         $(".review-sec-body").addClass("show-review-sec");
    });
  });
$(document).ready(function(){
    $('.close-review-sec').click(function(){
        $(".review-sec").removeClass("show-review-sec");
        $(".review-sec-body").removeClass("show-review-sec");
    });
  });
$(document).ready(function(){
    $('.review-sec-body').click(function(){
        $(".review-sec").removeClass("show-review-sec");
        $(".review-sec-body").removeClass("show-review-sec");
    });
  });



              $(document).ready(function(){
        $('.vendor-review').click(function(){
            $(".vendor-review-drop").addClass("show-review-dropDown");
        });
      });


   $(document).ready(function(){
        $('.close-review-sec').click(function(){
            $(".review-dropDown").removeClass("show-review-dropDown");
        });
      });
      $(document).ready(function(){
        $('.review-dropDown-body').click(function(){
            $(".review-dropDown").removeClass("show-review-dropDown");
        });
      });

      $(document).ready(function(){
        $('.rating-btn').click(function(){
            $(".review-dropDown").removeClass("show-review-dropDown");
        });
      });
