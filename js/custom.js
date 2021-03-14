$(document).ready(function () {



    //    fixed-nav start



    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 400) {

            $(".menu-bg").addClass("fixed-nav");

        }else{
            
            $(".menu-bg").removeClass("fixed-nav")
            
        }
    });


    //    banner slider

    $(".banner-slider").slick({

        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",


    });

    //    gallery list code

    $(".gallery-bg .gallery .gallery-list ul li").click(function () {

        $(this).addClass("active").siblings().removeClass("active")

    });


    // mixitup filter

    var containerEl = document.querySelector('.gallery-content');

    var mixer = mixitup(containerEl);

    //    video-parallex 

    $(".video-bg").parallax({


        imageSrc: "../img/video-banner.jpg",

    });

    //    veno box for video

    $('.venobox').venobox({

        spinner: "wave",
        spinColor: "#b95555"

    });

    //    counter up

    $('.counter').counterUp({

        time: 2000,

    });

    //    recent slide 

    $(".recent-slider").slick({

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",


    });

    //    royal parralex

    $(".royal-bg").parallax({


        imageSrc: "../img/royal-banner.jpg",

    });









});
