var hidden = true;

$(".title").hover(function() {

});

$(".title").click(function() {
    if($(this).siblings(".content-p").is(":visible")){
        $(this).siblings(".content-p").hide();
    }else {
        $(this).siblings(".content-p").show();
    }
})


