particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": "#555"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#555"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.9,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#555",
      "opacity": 0.9,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
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
      },1500);
  }
}
//Script for Nav Scrolling Functions//
$(document).ready(function (){
    $("#tabHome").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("body").offset().top
        }, 1250, 'easeInOutExpo');
    });
    $("#tabAbout").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#aboutMe").offset().top - 100
        }, 1250, 'easeInOutExpo');
    });
    $(".down").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#aboutMe").offset().top - 100
        }, 1250, 'easeInOutExpo');
    });
    $("#tabProjects").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 100
        }, 1250, 'easeInOutExpo');
    });
    $("#tabContact").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 100
        }, 1250, 'easeInOutExpo');
    });
    //Second Nav//
    $("#tabHome2").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("body").offset().top
        }, 1250, 'easeInOutExpo');
    });
    $("#tabAbout2").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#aboutMe").offset().top - 100
        }, 1250, 'easeInOutExpo');
    });
    $("#tabProjects2").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 100
        }, 1250, 'easeInOutExpo');
    });
    $("#tabContact2").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 100
        }, 1250, 'easeInOutExpo');
    });
    //Tab Scroll CSS Control//
    $(window).scroll(function(){
        if($(window).scrollTop() > -1000 && $(window).scrollTop() < $("#aboutMe").offset().top - 200){
            $("#tabHome").css("background-color","#911a1a");
            $("#tabHome2").css("background-color","#911a1a");
            document.title = 'Maya Angelou | Home';
        }else{
            $("#tabHome").css("background-color","#c4c4c4");
            $("#tabHome2").css("background-color","#c4c4c4");
        }
        if($(window).scrollTop() >= $("#aboutMe").offset().top - 200 && $(window).scrollTop() < $("#projects").offset().top - 200){
            $("#tabAbout").css("background-color","#911a1a");
            $("#tabAbout2").css("background-color","#911a1a");
            document.title = 'Maya Angelou | Biography';
        }else{
            $("#tabAbout").css("background-color","#c4c4c4");
            $("#tabAbout2").css("background-color","#c4c4c4");
        }
        if($(window).scrollTop() >= $("#projects").offset().top - 200 && $(window).scrollTop() < $("#contact").offset().top - 200){
            $("#tabProjects").css("background-color","#911a1a");
            $("#tabProjects2").css("background-color","#911a1a");
            document.title = 'Maya Angelou | Essay Piece';
        }else{
            $("#tabProjects").css("background-color","#c4c4c4");
            $("#tabProjects2").css("background-color","#c4c4c4");
        }
        if($(window).scrollTop() >= $("#contact").offset().top - 200){
            $("#tabContact").css("background-color","#911a1a");
            $("#tabContact2").css("background-color","#911a1a");
            document.title = 'Maya Angelou | Analysis';
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