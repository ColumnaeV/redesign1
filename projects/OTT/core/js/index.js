particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00a0d1"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#00a0d1"
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
        "opacity_min": 0.1,
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
      "color": "#00a0d1",
      "opacity": 0.75,
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
//Script for Nav Scrolling Functions//
$(document).ready(function (){
    $("#tabHome").click(function (){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
    });
    $(".down, h4").click(function (){
        $('html, body').animate({
            scrollTop: $("#info").offset().top
        }, 1000);
    });
    $("#tabAbout").click(function (){
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
        }, 1000);
    });
    $("#tabProjects").click(function (){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
    });
    $("#tabContact").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
    $("#tabCredits").click(function (){
        $('html, body').animate({
            scrollTop: $("#credits").offset().top
        }, 1000);
    });
    //Tab Scroll CSS Control//
    $(window).scroll(function(){
        if($(window).scrollTop() > -1000 && $(window).scrollTop() < $("#aboutMe").offset().top - 200){
            $("#tabHome").css("color","#ffffff");
            $("#tabHome").css("background-color","#345678");
            document.title = 'OTT | Home';
        }else{
            $("#tabHome").css("color","#345678");
            $("#tabHome").css("background-color","rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#aboutMe").offset().top - 200 && $(window).scrollTop() < $("#projects").offset().top - 200){
            $("#tabAbout").css("color","#ffffff");
            $("#tabAbout").css("background-color","#345678");
            document.title = 'OTT | About Us';
        }else{
            $("#tabAbout").css("color","#345678");
            $("#tabAbout").css("background-color","rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#projects").offset().top - 200 && $(window).scrollTop() < $("#contact").offset().top - 200){
            $("#tabProjects").css("color","#ffffff");
            $("#tabProjects").css("background-color","#345678");
            document.title = 'OTT | Services';
        }else{
            $("#tabProjects").css("color","#345678");
            $("#tabProjects").css("background-color","rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#contact").offset().top - 200 && $(window).scrollTop() < $("#credits").offset().top - 200){
            $("#tabContact").css("color","#ffffff");
            $("#tabContact").css("background-color","#345678");
            document.title = 'OTT | Contact Us';
        }else{
            $("#tabContact").css("color","#345678");
            $("#tabContact").css("background-color","rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#credits").offset().top - 200){
            $("#tabCredits").css("color","#ffffff");
            $("#tabCredits").css("background-color","#345678");
            document.title = 'OTT | Donate';
        }else{
            $("#tabCredits").css("color","#345678");
            $("#tabCredits").css("background-color","rgba(0,0,0,0)");
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
                .delay(1400)
                .fadeOut(600, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$(".down, h4").seqfx();
});