//Loading Function//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('bodyContainer').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.visibility="hidden";
          document.getElementById('bodyContainer').style.opacity="1";
      },1000);
  }
}
//Script for Nav Scrolling Functions//
$(document).ready(function (){
    $("#tabHome").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("body").offset().top
        }, 1000, 'easeInOutExpo');
    });
    $("#tabAbout").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#aboutMe").offset().top + 250
        }, 1000, 'easeInOutExpo');
    });
    $(".down").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#aboutMe").offset().top + 250
        }, 1000, 'easeInOutExpo');
    });
    $("#tabProjects").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top + 250
        }, 1000, 'easeInOutExpo');
    });
    $("#tabContact").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top + 250
        }, 1000, 'easeInOutExpo');
    });
    //Second Nav//
    $("#tabHome2").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("body").offset().top
        }, 1000, 'easeInOutExpo');
    });
    $("#tabAbout2").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#aboutMe").offset().top +250
        }, 1000, 'easeInOutExpo');
    });
    $("#tabProjects2").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top + 250
        }, 1000, 'easeInOutExpo');
    });
    $("#tabContact2").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top + 250
        }, 1000, 'easeInOutExpo');
    });
    //Tab Scroll CSS Control//
    $(window).scroll(function(){
        if($(window).scrollTop() > -1000 && $(window).scrollTop() < $("#aboutMe").offset().top - 200){
            $("#tabHome").css("background-color","#345678");
            $("#tabHome2").css("background-color","#345678");
            document.title = 'Sơn Nguyễn | Home';
        }else{
            $("#tabHome").css("background-color","#c4c4c4");
            $("#tabHome2").css("background-color","#c4c4c4");
        }
        if($(window).scrollTop() >= $("#aboutMe").offset().top - 200 && $(window).scrollTop() < $("#projects").offset().top - 200){
            $("#tabAbout").css("background-color","#345678");
            $("#tabAbout2").css("background-color","#345678");
            document.title = 'Sơn Nguyễn | About Me';
        }else{
            $("#tabAbout").css("background-color","#c4c4c4");
            $("#tabAbout2").css("background-color","#c4c4c4");
        }
        if($(window).scrollTop() >= $("#projects").offset().top - 200 && $(window).scrollTop() < $("#contact").offset().top - 200){
            $("#tabProjects").css("background-color","#345678");
            $("#tabProjects2").css("background-color","#345678");
            document.title = 'Sơn Nguyễn | Projects';
        }else{
            $("#tabProjects").css("background-color","#c4c4c4");
            $("#tabProjects2").css("background-color","#c4c4c4");
        }
        if($(window).scrollTop() >= $("#contact").offset().top - 200){
            $("#tabContact").css("background-color","#345678");
            $("#tabContact2").css("background-color","#345678");
            document.title = 'Sơn Nguyễn | Contact Me';
        }else{
            $("#tabContact").css("background-color","#c4c4c4");
            $("#tabContact2").css("background-color","#c4c4c4");
        }
    });
    //Animated Arrow//
    (function($) {
    $.fn.seqfx = function() {
        var elements = this,
            l = elements.length,
            i = 0;

        function execute() {
            var current = $(elements[i]);
            i = (i) % l;

            current
                .fadeIn(300)
                .delay(500)
                .fadeOut(450, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$(".down, h4").seqfx();
});
