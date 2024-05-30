
    $(document).ready(function(){
    $('.top-side-nav').click(function(){
      $(".nav-sec").toggleClass("shrink-nav-sec");
    });
  });

        $(document).ready(function(){
    $('.nav-togller').click(function(){
      $(".nav-togller").toggleClass("Togle-nav-togller");
      $(".nav-sec").toggleClass("Togle-nav-togller");
      $(".nav-body").toggleClass("Togle-nav-togller");
    });
  });

    $(document).ready(function(){
    $('.nav-body').click(function(){
      $(".nav-togller").removeClass("Togle-nav-togller");
      $(".nav-sec").removeClass("Togle-nav-togller");
      $(".nav-body").removeClass("Togle-nav-togller");
    });
  });



    

           $(document).ready(function(){
    $('.message-togler').click(function(){
      $('.toggle-messageCont').addClass('showMessage-div');
      $('.m-container-1').addClass('showMessage-div');
    });
  });

  $(document).ready(function(){
    $('.message-togler-10').click(function(){
      $('.toggle-messageCont-1').addClass('showMessage-div');
      $('.m-container-1').addClass('showMessage-div');
    });
  });

    $(document).ready(function(){
    $('.message-togler-11').click(function(){
      $('.toggle-messageCont-1').addClass('showMessage-div');
      $('.m-container-2').addClass('showMessage-div');
    });
  });


       $(document).ready(function(){
    $('.m-container-body').click(function(){
      $('.toggle-messageCont').removeClass('showMessage-div');
      $('.m-container-1').removeClass('showMessage-div');
      $('.m-container-2').removeClass('showMessage-div');
    });
  });

          $(document).ready(function(){
    $('.close-m-container').click(function(){
      $('.toggle-messageCont').removeClass('showMessage-div');
     $('.m-container-1').removeClass('showMessage-div');
     $('.m-container-2').removeClass('showMessage-div');
    });
  });


// w-container

$(document).ready(function(){
    $('.withdrawal-Main_btn').click(function(){
      $('.w-container').addClass('show-w-container');
    });
  });

       $(document).ready(function(){
    $('.w-container-body').click(function(){
    $('.w-container').removeClass('show-w-container');
    });
  });

          $(document).ready(function(){
    $('.withdrawal-box-closeSec-Main').click(function(){
      $('.w-container').removeClass('show-w-container');
    });
  });