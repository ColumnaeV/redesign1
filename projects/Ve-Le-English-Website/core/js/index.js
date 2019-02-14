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
    $(window).scroll(function(){
        if($(window).scrollTop() > $("#notify").offset().top){
            $("#navBar").css("background-color","#222");
            $("#selectedTab").css("color","#fff");
            $("#vyLe").css("color","#fff");
        }else{
            $("#navBar").css("background-color","#fff");
            $("#selectedTab").css("color","#000");
            $("#vyLe").css("color","#000");
        }
    });
    //Animated Loading//
    (function($) {
    $.fn.seqfx = function() {
        var elements = this,
            l = elements.length,
            i = 0;

        function execute() {
            var current = $(elements[i]);
            i = (i) % l;

            current
                .fadeIn(400)
                .delay(200)
                .fadeOut(400, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$("#loadingIcon").seqfx();
});