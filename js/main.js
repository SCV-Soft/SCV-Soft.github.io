/*
 * Theme Name: Pixom- Multipages HTML Business Template
 * File name: main.js
 * Description: Pixom- Multipages HTML Business Template
 * Version: 1.0
 */


(function($) {
    "use strict";

    //Run function when document ready
    $(document).ready(function() {

        init_backtotop();
        init_loader();
        init_testimonials();
        init_part();
        init_blog();
        init_sponsors();
        init_fullheight();
        init_slider();

    });


    /*------------------------------------------*/
    /*           /*Nav Scroll Fix /*
        /*------------------------------------------*/



    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 40) {
            $("nav.transparrent-bg").css({
                'background-color': '#fff',
            });
            $("nav.transparrent-bg .menuzord-menu > li > a").css({
                'padding-top': '40px',
                'color': '#333'
            });
            $("nav.transparrent-bg .menuzord-brand").css({
                'margin-top': '6px',
            });
            $("nav.transparrent-bg .right_mp_menu > ul > li > a").css({
                'padding-top': '40px',
                'color': '#333'
            });
            $(".changeable").attr("src", "img/logo.png");
        } else {
            $("nav.transparrent-bg").css({
                'background-color': 'transparent',
            });
            $("nav.transparrent-bg .menuzord-menu > li > a").css({
                'padding-top': '40px',
                'color': '#fff'
            });
            $("nav.transparrent-bg .menuzord-brand").css({
                'margin-top': '6px',
            });
            $("nav.transparrent-bg .right_mp_menu > ul > li > a").css({
                'padding-top': '40px',
                'color': '#fff'
            });
            $(".changeable").attr("src", "img/logo.png");
        }


    });



    /*------------------------------------------*/
    /*           /*Menu /*
        /*------------------------------------------*/


    $("#menuzord").menuzord({
        align: "right",
        scrollable: true
    });


    /*------------------------------------------*/
    /*           /*. Go to top /*
        /*------------------------------------------*/


    function init_backtotop() {
        if ($('#back-to-top').length)
        {
            var scrollTrigger = 100,
                backToTop = function ()
            {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger)
                {
                    $('#back-to-top').addClass('show');
                }
                else
                {
                    $('#back-to-top').removeClass('show');
                }
            };
            backToTop();
            $(window).on('scroll', function ()
                {
                    backToTop();
                });
            $('#back-to-top').on('click', function (e)
                {
                    e.preventDefault();
                    $('html,body').animate(
                        {
                            scrollTop: 0
                        }, 900);
                });
        }

    }


    /*------------------------------------------*/
    /*      /*. loader /*
        /*------------------------------------------*/



    function init_loader() {
        var loader = $('#loader');
        loader.addClass('loaded');
        $('#preloader').delay(250).fadeOut('fast');
    }





    /*------------------------------------------*/
    /*         /*. Testimonials /*
        /*------------------------------------------*/

    function init_testimonials() {
        if ($('.testimonials-carousel').length) {
            $('.testimonials-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                autoplayHoverPause: false,
                autoplay: 5000,
                smartSpeed: 700,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    760: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1100: {
                        items: 3
                    }
                }
            });
        }
    }
    /*------------------------------------------*/
    /*         /*. Business Partners /*
        /*------------------------------------------*/

    function init_part() {
        if ($('.part-carousel').length) {
            $('.part-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplayHoverPause: false,
                autoplay: 5000,
                smartSpeed: 700,
                navText: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    760: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1100: {
                        items: 3
                    }
                }
            });
        }
    }

    /*------------------------------------------*/
    /*         /*. blog /*
        /*------------------------------------------*/

    function init_blog() {
        if ($('.blog-carousel').length) {
            $('.blog-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplayHoverPause: false,
                autoplay: 5000,
                smartSpeed: 700,
                navText: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    760: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1100: {
                        items: 2
                    }
                }
            });
        }

    }
    /*------------------------------------------*/
    /*         /*. Sponsors Slider /*
        /*------------------------------------------*/


    function init_sponsors() {
        if ($('.sponsors-slider').length) {
            $('.sponsors-slider').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                smartSpeed: 500,
                autoplay: 4000,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    800: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                }
            });
        }

    }




    /*------------------------------------------*/
    /*           /*. full-heigh banner /*
        /*------------------------------------------*/


    function init_fullheight() {
        $(".full-height").height($(window).height()), 
            $(window).on("resize", function () {

                $(".full-height").height($(window).height())
            })

    }

    /*------------------------------------------*/
    /*           /*. Image Slide/*
        /*------------------------------------------*/

    function init_slider() {
        $("#owl-slider").owlCarousel({
            nav: !0,
            loop: !0,
            autoplay: !0,
            margin: 0,
            navText: ["<a><span></span></a>", "<a><span></span></a>"],
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                600: {
                    items: 1,
                    dots: !1
                },
                1e3: {
                    items: 1
                }
            }  
        });

    }


    /*------------------------------------------*/
    /*           /*. Typist Text Banner /*
        /*------------------------------------------*/



    "function" == typeof Typist && new Typist(document.querySelector(".typist-text"), {
        letterInterval: 60,
        textInterval: 3e3
    });



})(jQuery); // JavaScript Document

// JavaScript Document// JavaScript Document

