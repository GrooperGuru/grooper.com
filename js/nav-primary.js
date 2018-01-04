
	var checkbox = document.getElementById("checkbox_click");
  var logo    = $("#nav_primary > a");
  var social  = $("nav .social")
  var body    = $("body")
  var menu    = $("#nav_primary > ul")


function menuTransition(){
  menu.css("transition", "margin .3s linear");
}

function noScroll(){

	if (checkbox.checked){
		body.addClass("noScroll");
		menuTransition();
		logo.animate({opacity: 0},100);
		social.css("marginLeft", "-5%");
  } else {
		body.removeClass("noScroll");
		social.css("marginLeft", "100%");
		logo.animate({opacity: 1},200);
	}
}

var resizeTimer;

window.onresize = transitionOff;
function transitionOff(){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function(e) {
    if (screen.width > 600){
      /*menuTransition();*/
      menu.css("transition", "margin 0s linear");
      logo.animate({opacity: 1},200); /* brings the grooper logo back */
      checkbox.checked = false; /* since we are larger than 600px screen, we always want to reset the state of the checbox to unchecked */
    }
  }, 300);
};
