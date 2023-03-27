$(window).scroll(function() {
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('scrolled');
    else sticky.removeClass('scrolled');
});

//dynamic backgroundColor in projects
$(document).ready(function(){
    $('.js-fillcolor').fillColor();
})

//menu toggle
$(document).ready(function(){
    $("#menu-button").click(function(){
        $("#menu-container").addClass("open-animation");
        $("html, body").css("overflow", "hidden");
    })
    $("#close").click(function(){
      $("#menu-container").addClass("close-animation").delay(400).queue(function(next){
          $(this).removeClass("close-animation");
          $(this).removeClass("open-animation");
            next();
        });
      $("html, body").css("overflow", "scroll");
    })
});
