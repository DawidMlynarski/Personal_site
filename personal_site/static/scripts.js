$("button").click(function() {
    $('html,body').animate({
        scrollTop: $("#scrollTo1").offset().top},
        1200);
});