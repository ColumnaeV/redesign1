var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "september", "October", "November", "December"];
var hours = ["Good night", "Grab some sleep", "Grab some sleep", "Grab some sleep", "Grab some sleep", "Grab some sleep", "Top of the morning to you", "Top of the morning to you", "Top of the morning to you", "Good morning", "Good morning", "Good morning", "Good afternoon", "Good afternoon", "Good afternoon", "Good afternoon", "Good afternoon", "Good afternoon", "Good evening", "Good evening", "Good evening", "Good evening", "Good night", "Good night"];

function nth(d) {
    'use strict';
    if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default:  return "th";
        }
}
document.getElementById("textSlot").innerHTML = hours[d.getHours()];
document.getElementById("date").innerHTML = days[d.getDay()] + ", the " + d.getDate()+nth(date) + " day of " + months[d.getMonth()] + ", " + d.getFullYear();

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
//Local Storage//
var input = document.getElementById("noteContainer");
function save() {
    'use strict';
        localStorage.setItem("notes", input.value);
}

function loadData() {
    'use strict';
        document.getElementById("noteContainer").innerHTML = localStorage.getItem("notes");
}
function data() {
    'use strict';
    startTime();
    loadData();
}