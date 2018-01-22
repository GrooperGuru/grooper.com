$(document).ready(function(){
  $('section > .btn-lrg').closest('section').next('section').css( "display", "none");
});

function moreInfo(el) {
  var section = $(el).closest('section').next('section');
  section.slideToggle();
};
