$(".aside__btn").click(function() {
    $(this).toggleClass("open");
});
$(".aside__ul li").children().click(function() {
    $(this).toggleClass("open");
});