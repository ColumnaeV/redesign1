function openSecNav() {
    'use strict';
    document.getElementById("secondNav").hidden = false;
    document.getElementById("tripleMenu").hidden = true;
    document.getElementById("tripleMenuClose").hidden = false;
    document.getElementById("completeBody").hidden = true;
}
function closeSecNav() {
    'use strict';
    document.getElementById("completeBody").hidden = false;
    document.getElementById("secondNav").hidden = true;
    document.getElementById("tripleMenu").hidden = false;
    document.getElementById("tripleMenuClose").hidden = true;
}
//Scrolling Tabs//
function toOTP() {
    'use strict';
    var OTPMenu = document.getElementById("OTP");
    OTPMenu.scrollIntoView();
}
function toTUTORS() {
    'use strict';
    var TUTORMenu = document.getElementById("TUTORS");
    TUTORMenu.scrollIntoView();
}
function toMATERIAL() {
    'use strict';
    var MATERIALMenu = document.getElementById("MATERIAL");
    MATERIALMenu.scrollIntoView();
}
function toCONTACT() {
    'use strict';
    var CONTACTMenu = document.getElementById("CONTACT");
    CONTACTMenu.scrollIntoView();
}
function toOTP1() {
    'use strict';
    closeSecNav();
    var OTPMenu1 = document.getElementById("OTP");
    OTPMenu1.scrollIntoView();
}
function toTUTORS1() {
    'use strict';
    closeSecNav();
    var TUTORSMenu1 = document.getElementById("TUTORS");
    TUTORSMenu1.scrollIntoView();
}
function toMATERIAL1() {
    'use strict';
    closeSecNav();
    var MATERIALMenu1 = document.getElementById("MATERIAL");
    MATERIALMenu1.scrollIntoView();
}
function toCONTACT1() {
    'use strict';
    closeSecNav();
    var CONTACTMenu1 = document.getElementById("CONTACT");
    CONTACTMenu1.scrollIntoView();
}