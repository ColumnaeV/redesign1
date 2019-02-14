function navigate() {
    'use strict';
    window.location.assign("data/TemplateAugust.html");
}
function openNav() {
    'use strict';
    document.getElementById("sideNav").style.width = "16vw";
    document.getElementById("calendar").style.opacity = "0.2";
}
function closeNav() {
    'use strict';
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("calendar").style.opacity = "1";
}

function allClasses() {
    'use strict';
    var showAll = document.querySelectorAll('.ZERO, .ONE, .TWO, .THREE, .FOUR, .FIVE, .SIX, .SEVEN, .EIGHT');
    for (var i = 0; i < showAll.length; i++) {
    showAll[i].hidden = false;
    }
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("calendar").style.opacity = "1";
}

function zero() {
    'use strict';
    allClasses();
    var showAll = document.querySelectorAll('.ONE, .TWO, .THREE, .FOUR, .FIVE, .SIX, .SEVEN, .EIGHT');
    for (var i = 0; i < showAll.length; i++) {
    showAll[i].hidden = true;
    }
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("calendar").style.opacity = "1";
}

function first() {
    'use strict';
    allClasses();
    var showAll = document.querySelectorAll('.ZERO, .TWO, .THREE, .FOUR, .FIVE, .SIX, .SEVEN, .EIGHT');
    for (var i = 0; i < showAll.length; i++) {
    showAll[i].hidden = true;
    }
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("calendar").style.opacity = "1";
}

function second() {
    'use strict';
    allClasses();
    var showAll = document.querySelectorAll('.ZERO, .ONE, .THREE, .FOUR, .FIVE, .SIX, .SEVEN, .EIGHT');
    for (var i = 0; i < showAll.length; i++) {
    showAll[i].hidden = true;
    }
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("calendar").style.opacity = "1";
}

function third() {
    'use strict';
    allClasses();
    var showAll = document.querySelectorAll('.ZERO, .ONE, .TWO, .FOUR, .FIVE, .SIX, .SEVEN, .EIGHT');
    for (var i = 0; i < showAll.length; i++) {
    showAll[i].hidden = true;
    }
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("calendar").style.opacity = "1";
}

function fourth() {
    'use strict';
    allClasses();
    var showAll = document.querySelectorAll('.ZERO, .ONE, .TWO, .THREE, .FIVE, .SIX, .SEVEN, .EIGHT');
    for (var i = 0; i < showAll.length; i++) {
    showAll[i].hidden = true;
    }
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("calendar").style.opacity = "1";
}

function fifth() {
    'use strict';
    allClasses();
    var showAll = document.querySelectorAll('.ZERO, .ONE, .TWO, .THREE, .FOUR, .SIX, .SEVEN, .EIGHT');
    for (var i = 0; i < showAll.length; i++) {
    showAll[i].hidden = true;
    }
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("calendar").style.opacity = "1";
}

function sixth() {
    'use strict';
    allClasses();
    var showAll = document.querySelectorAll('.ZERO, .ONE, .TWO, .THREE, .FOUR, .FIVE, .SEVEN, .EIGHT');
    for (var i = 0; i < showAll.length; i++) {
    showAll[i].hidden = true;
    }
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("calendar").style.opacity = "1";
}

function seventh() {
    'use strict';
    allClasses();
    var showAll = document.querySelectorAll('.ZERO, .ONE, .TWO, .THREE, .FOUR, .FIVE, .SIX, .EIGHT');
    for (var i = 0; i < showAll.length; i++) {
    showAll[i].hidden = true;
    }
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("calendar").style.opacity = "1";
}

function eighth() {
    'use strict';
    allClasses();
    var showAll = document.querySelectorAll('.ZERO, .ONE, .TWO, .THREE, .FOUR, .FIVE, .SIX, .SEVEN');
    for (var i = 0; i < showAll.length; i++) {
    showAll[i].hidden = true;
    }
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("calendar").style.opacity = "1";
}