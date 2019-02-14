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
      "value": "#777777"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#777777"
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
      "color": "#777777",
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
        "enable": true,
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
//Functions for Nav//
function scrollWin() {
    'use strict';
    window.scrollTo(0, 0);
}
function openNav() {
    'use strict';
    document.getElementById("nav").style.zIndex = '1';
    document.getElementById("nav").style.opacity = '0';
    document.getElementById("navContainer").style.zIndex = '12';
    document.getElementById("navContainer").style.opacity = '1';
}
function closeNav() {
    'use strict';
    document.getElementById("nav").style.zIndex = '12';
    document.getElementById("nav").style.opacity = '1';
    document.getElementById("navContainer").style.zIndex = '1';
    document.getElementById("navContainer").style.opacity = '0';
}
function home() {
    'use strict';
    closeNav();
    scrollWin();
    document.getElementById("intro").style.zIndex = '11';
    document.getElementById("education").style.zIndex = '1';
    document.getElementById("awards").style.zIndex = '1';
    document.getElementById("experience").style.zIndex = '1';
    document.getElementById("intro").style.opacity = '1';
    document.getElementById("education").style.opacity = '0';
    document.getElementById("awards").style.opacity = '0';
    document.getElementById("experience").style.opacity = '0';
    document.getElementById("intro").style.height = 'auto';
    document.getElementById("education").style.height = '0px';
    document.getElementById("awards").style.height = '0px';
    document.getElementById("experience").style.height = '0px';
    document.getElementById("intro").style.overflow = 'auto';
    document.getElementById("education").style.overflow = 'hidden';
    document.getElementById("awards").style.overflow = 'hidden';
    document.getElementById("experience").style.overflow = 'hidden';
    document.getElementById("socialMedia").style.zIndex = '15';
    document.getElementById("socialMedia").style.opacity = '1';
}
function education() {
    'use strict';
    closeNav();
    scrollWin();
    document.getElementById("intro").style.zIndex = '1';
    document.getElementById("education").style.zIndex = '11';
    document.getElementById("awards").style.zIndex = '1';
    document.getElementById("experience").style.zIndex = '1';
    document.getElementById("intro").style.opacity = '0';
    document.getElementById("education").style.opacity = '1';
    document.getElementById("awards").style.opacity = '0';
    document.getElementById("experience").style.opacity = '0';
    document.getElementById("intro").style.height = '0px';
    document.getElementById("education").style.height = 'auto';
    document.getElementById("awards").style.height = '0px';
    document.getElementById("experience").style.height = '0px';
    document.getElementById("intro").style.overflow = 'hidden';
    document.getElementById("education").style.overflow = 'auto';
    document.getElementById("awards").style.overflow = 'hidden';
    document.getElementById("experience").style.overflow = 'hidden';
    document.getElementById("socialMedia").style.zIndex = '1';
    document.getElementById("socialMedia").style.opacity = '0';
    
}
function awards() {
    'use strict';
    closeNav();
    scrollWin();
    document.getElementById("intro").style.zIndex = '1';
    document.getElementById("education").style.zIndex = '1';
    document.getElementById("awards").style.zIndex = '11';
    document.getElementById("experience").style.zIndex = '1';
    document.getElementById("intro").style.opacity = '0';
    document.getElementById("education").style.opacity = '0';
    document.getElementById("awards").style.opacity = '1';
    document.getElementById("experience").style.opacity = '0';
    document.getElementById("intro").style.height = '0px';
    document.getElementById("education").style.height = '0px';
    document.getElementById("awards").style.height = 'auto';
    document.getElementById("experience").style.height = '0px';
    document.getElementById("intro").style.overflow = 'hidden';
    document.getElementById("education").style.overflow = 'hidden';
    document.getElementById("awards").style.overflow = 'auto';
    document.getElementById("experience").style.overflow = 'hidden';
    document.getElementById("socialMedia").style.zIndex = '1';
    document.getElementById("socialMedia").style.opacity = '0';
}
function experience() {
    'use strict';
    closeNav();
    scrollWin();
    document.getElementById("intro").style.zIndex = '1';
    document.getElementById("education").style.zIndex = '1';
    document.getElementById("awards").style.zIndex = '1';
    document.getElementById("experience").style.zIndex = '11';
    document.getElementById("intro").style.opacity = '0';
    document.getElementById("education").style.opacity = '0';
    document.getElementById("awards").style.opacity = '0';
    document.getElementById("experience").style.opacity = '1';
    document.getElementById("intro").style.height = '0px';
    document.getElementById("education").style.height = '0px';
    document.getElementById("awards").style.height = '0px';
    document.getElementById("experience").style.height = 'auto';
    document.getElementById("intro").style.overflow = 'hidden';
    document.getElementById("education").style.overflow = 'hidden';
    document.getElementById("awards").style.overflow = 'hidden';
    document.getElementById("experience").style.overflow = 'auto';
    document.getElementById("socialMedia").style.zIndex = '1';
    document.getElementById("socialMedia").style.opacity = '0';
}