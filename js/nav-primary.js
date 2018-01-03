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

var resizeTimer;

window.onresize = transitionOff;
function transitionOff(){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function(e) {
    if (screen.width > 600){
      /*menuTransition();*/
      $("#menu").css("transition", "margin 0s linear");
      $(".grooper_logo").animate({opacity: 1},200); /* brings the grooper logo back */
      document.getElementById("checkbox_click").checked = false; /* since we are larger than 600px screen, we always want to reset the state of the checbox to unchecked */
    }
  }, 300);
};


/*
var time = 200
function menuTransition(){
	$("#nav_social").css("transform", "translateX(100%)");
  $("nav ul").css("transform", "translateX(100%)");
}
function noScroll(){
	var checkbox_click = document.getElementById("checkbox_click")
	if (checkbox_click.checked){
		$("body").addClass("noScroll");
		$(".grooper_logo").animate({opacity: 0},100);
    $("nav ul").css("transform", "translateX(-5%)");
    setTimeout(function(){
      $("#nav_social").css("transform", "translateX(0%)");
    }, time);
  } else {
		$("body").removeClass("noScroll");
		$("#nav_social").css("transform", "translateX(100%)");
    setTimeout(function(){
      $("nav ul").css("transform", "translateX(100%)");
      $("nav > a").animate({opacity: 1},200);
    }, time);
	}
}
var resizeTimer;

window.onresize = transitionOff;
function transitionOff(){
	if ((screen.width > 600) && (document.getElementById("checkbox_click").checked = true)){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(e) {
      $("nav ul, #nav_social").css("transform", "translateX(0%)");
      document.getElementById("checkbox_click").click()
      $("body").removeClass("noScroll");
    }, 350);
  }
}
*/
/*
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
*/
