$(function(){
  var complete  = document.querySelectorAll('.roadmap .complete').length;
  var testing   = document.querySelectorAll('.roadmap .testing').length;
  var progress  = document.querySelectorAll('.roadmap .in_progress').length;
  var pending   = document.querySelectorAll('.roadmap .pending').length;
  var final = Math.floor( ( complete + (testing * .67) + (progress * .33) ) / ( complete + testing + progress + pending ) * 360, );
  var string = "rotate(" + final + "deg)"
  $('.pie span').css( {'transform': string} );
});
