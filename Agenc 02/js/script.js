$('#bannar').slick(
    {
        arrows: false ,
        dots : true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500
    }
);
$(document).ready(function(){
    $(".navbar-nav li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})
$(document).ready(function(){
    $(".navbar-nav li").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})
$(document).ready(function(){
    $("#provider .container .service .row div").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})


