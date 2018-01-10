function slideshow(src, el) {
  var img = $(el).closest('section').find('figure img')
  var old_src = img.attr("src")
  if (old_src != src) { // Do work only if the new requested image is different than the image already on the screen
    var figure = $(img).closest('figure')
    var old_bg = figure.css("background-image")
    var new_bg = "url(" + src + ")"
    var active = $(el).closest('ul').find('a') //Find all other a elements so we can remove the active class form them
    $(active).removeClass("active")
    $(el).addClass("active")
    $(img).animate({opacity:0.01},500, function(){
      $(img).attr("src",src);
      $(img).animate({opacity:1},500);
    });
  };
};


    /*
    $(figure).css("background-image",new_bg)
    $(img).fadeTo(500,.01, function(){
      $(img).attr("src",src);
      $(img).css("opacity",1);
    })
    */
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
