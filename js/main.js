$(".aside__btn").click(function() {
    $(this).toggleClass("open");
});
$(".aside__ul li").children().click(function() {
    $(this).toggleClass("open");
});
$(window).scroll(function(){
    if ( $(this).scrollTop() > 50) {
        $('.header').addClass("fixed")
    } else {
        $('.header').removeClass("fixed")
    }
});