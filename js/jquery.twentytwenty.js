(function($){

  $.fn.twentytwenty = function(options) {
    var options = $.extend({
      default_offset_pct: 0.5,
      no_overlay: false,
      move_with_handle_only: false,
    }, options);

    return this.each(function() {

      var sliderPct = options.default_offset_pct;
      var container = $(this);
      var beforeDirection = 'left';
      var afterDirection = 'right';


      container.wrap("<div class='sr-wrapper'></div>");
      if(!options.no_overlay) {
        container.append("<div class='sr-overlay'></div>");
      }
      var beforeImg = container.find("img:first");
      var afterImg = container.find("img:last");

      container.append("<div class='sr-handle'><i class='fa fa-arrows-h' aria-hidden='true'></i></div>");
      var slider = container.find(".sr-handle");
      container.addClass("sr-container");
      beforeImg.addClass("sr-before");
      afterImg.addClass("sr-after");

      var overlay = container.find(".sr-overlay");
      overlay.append("<div class='sr-before-label' data-content='Ugly'></div>");
      overlay.append("<div class='sr-after-label' data-content='Grooperized'></div>");

      var calcOffset = function(dimensionPct) {
        var w = beforeImg.width();
        var h = beforeImg.height();
        return {
          w: w+"px",
          h: h+"px",
          cw: (dimensionPct*w)+"px",
          ch: (dimensionPct*h)+"px"
        };
      };

      var adjustContainer = function(offset) {
        beforeImg.css("clip", "rect(0,"+offset.cw+","+offset.h+",0)");
        afterImg.css("clip", "rect(0,"+offset.w+","+offset.h+","+offset.cw+")");
        container.css("height", offset.h);
      };

      var adjustSlider = function(pct) {
        var offset = calcOffset(pct);
        slider.css("left", offset.cw);
        adjustContainer(offset);
      };

      // Return the number specified or the min/max number if it outside the range given.
      var minMaxNumber = function(num, min, max) {
        return Math.max(min, Math.min(max, num));
      };

      // Calculate the slider percentage based on the position.
      var getSliderPercentage = function(positionX, positionY) {
        var sliderPercentage = (positionX-offsetX)/imgWidth;
        return minMaxNumber(sliderPercentage, 0, 1);
      };


      $(window).on("resize.twentytwenty", function(e) {
        adjustSlider(sliderPct);
      });

      var offsetX = 0;
      var offsetY = 0;
      var imgWidth = 0;
      var imgHeight = 0;
      var onMoveStart = function(e) {
        if (((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY))) {
          e.preventDefault();
        }
        container.addClass("active");
        offsetX = container.offset().left;
        offsetY = container.offset().top;
        imgWidth = beforeImg.width();
        imgHeight = beforeImg.height();
      };
      var onMove = function(e) {
        if (container.hasClass("active")) {
          sliderPct = getSliderPercentage(e.pageX, e.pageY);
          adjustSlider(sliderPct);
        }
      };
      var onMoveEnd = function() {
          container.removeClass("active");
      };

      var moveTarget = options.move_with_handle_only ? slider : container;
      moveTarget.on("movestart",onMoveStart);
      moveTarget.on("move",onMove);
      moveTarget.on("moveend",onMoveEnd);

      slider.on("touchmove", function(e) {
        e.preventDefault();
      });

      container.find("img").on("mousedown", function(event) {
        event.preventDefault();
      });

      $(window).trigger("resize.twentytwenty");
    });
  };

})(jQuery);
