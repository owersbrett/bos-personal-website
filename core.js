$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 0){
            $(".array").css({"opacity" : "1"})
        }
        else {
            $(".array").css({"opacity" : "0"})
        }
    })
})