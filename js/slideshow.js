
function slideshow(string, el) {
  //el.preventDefault
  var img = $(el).closest('section').find('figure img');
  /*
  $(img).css('opacity','0');
  $(img).attr("src",string);
  $(img).fadeTo(500,1);
  */
  /*
  $(img).fadeTo(300,.01, function(){
     $(this).delay(200).attr('src',string).bind('onreadystatechange load', function(){
        if (this.complete) $(this).fadeTo(300,1);
     });
  });
  */

    $(img).animate({opacity:0.01},500, function(){
    $(img).attr("src",string);
    $(img).animate({opacity:1},500);
  });



  console.log(string);

};
