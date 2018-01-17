
//var checkbox = document.getElementById("checkbox_click");
//var logo    = $("#nav_primary > a");
var Flyouts = $(".Flyout");
var scrollitTimer;

window.onscroll = hideFlyout;
function hideFlyout(){
  clearTimeout(scrollitTimer);
  scrollitTimer = setTimeout(function(e) {
    if (screen.width < 433){
      Flyouts.css("display", "none");
    }
  }, 300);
};
