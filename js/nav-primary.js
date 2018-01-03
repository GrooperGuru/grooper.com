function menuTransition(){
	$("#menu").css("transition", "margin .3s linear");
}
function noScroll(){
	var checkbox_click = document.getElementById("checkbox_click")
	if (checkbox_click.checked){
		$("body").addClass("noScroll");
		menuTransition();
		$(".grooper_logo").animate({opacity: 0},100);
		$("#nav_social").css("marginLeft", "0");
  } else {
		$("body").removeClass("noScroll");
		$("#nav_social").css("marginLeft", "100%");
		$("nav > a").animate({opacity: 1},200); /*grooper logo in priomary nav bar */
	}
}
var resizeTimer;

window.onresize = transitionOff;
function transitionOff(){
	if ((screen.width > 600) && (document.getElementById("checkbox_click").checked = true)){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(e) {
      menuTransition();
      document.getElementById("checkbox_click").click()
      $("body").removeClass("noScroll");
    }, 350);
  }
}
