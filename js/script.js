$('#bannar').slick(
    {
        arrows: false ,
        dots : true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500
    }
);

$('.review_slider').slick(
    {
        arrows: true,
        dots : false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:`<i class="fa-solid fa-angle-left left-icon"></i>`,
        nextArrow:`<i class="fa-solid fa-angle-right right-icon"></i>`,
        centerMode: true,
        centerPadding: '0px',
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


