//localStorage.clear();
function saveHour(hour) {
    'use strict';
    if (event.keyCode === 13) {
        localStorage.setItem(hour.id, hour.value);
    }
}

function loadData(month) {
    'use strict';
    for (var i = 0, len = localStorage.length; i < len; ++i ) {
        var currentKey = localStorage.key( i );
        if (currentKey.startsWith(month)) {
            document.getElementById(currentKey).innerHTML =
            localStorage.getItem(currentKey); 
        }
    }   
}