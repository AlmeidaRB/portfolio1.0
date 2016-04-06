$(document).ready(function(){

  $(window).resize(function(){

    // Sticky Nav
    $(function () {
        // Check the initial Position of the Sticky Header
        var nav = $('.stickynav');
        if (nav.length) {
            var stickyNavTop = nav.offset().top;
            $(window).scroll(function () {
                if ($(window).scrollTop() > stickyNavTop) {
                    $('.stickynav').addClass('sticktotop');
                } else {
                    $('.stickynav').removeClass('sticktotop');
                }
            });
        }
    });
  }).resize();

});


//$(window).on('scroll resize', function() **on
//wrap in an event listener
