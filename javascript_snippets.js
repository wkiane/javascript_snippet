Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

// if ($('#Something').isInViewport()) {}
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
