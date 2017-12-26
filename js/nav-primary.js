function menuTransition(){
	$("#menu").css("transition", "margin .3s linear");
}
function noScroll(){
	var checkbox_click = document.getElementById("checkbox_click")
	if (checkbox_click.checked){
		$("body").addClass("noScroll");
		menuTransition();
		$(".grooper_logo").animate({opacity: 0},100);
		$("#nav-social").css("marginLeft", "0");
  } else {
		$("body").removeClass("noScroll");
		$("#nav-social").css("marginLeft", "100%");
		$(".grooper_logo").animate({opacity: 1},200);
	}
}

window.onresize = transitionOff;
function transitionOff(){
	if (screen.width > 600){
		menuTransition();
	}
}
