
$(document).ready(function () {

    // menu scripts ---- //

    $('.header-mnu-item').hover(function () {
        $(this).children('.header-mnu-drop-list').stop(false, true).fadeIn(300);
    }, function () {
        $(this).children('.header-mnu-drop-list').stop(false, true).fadeOut(300);
    });

    $('.toggle-nav').on('click', function () {
        $(this).toggleClass('on');

        var $this = $(this);
        if ($this.hasClass('on')) {
            $('.mnu-wrapper').animate({
                right: '0'
            }, 400);
            $('body').animate({
                right: '250px'
            }, 400);
        } else {
            $('.mnu-wrapper').animate({
                right: '-250px'
            }, 400);
            $('body').animate({
                right: '0'
            }, 400);
        }

        return false;
    });

    $('.mnu-drop').click(function () {
        $(this).toggleClass('active').next().toggle(400);
    });

    // parasites slider
    var swiper = new Swiper(".parasites__slider", {
        slidesPerView: 2.5,
        speed: 700,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 3.5,
            },

            500: {
                slidesPerView: 4,
            }
        }
    });


    // video slider
    var swiper = new Swiper(".video__slider", {
        slidesPerView: 1.5,
        spaceBetween: 10,
        speed: 700,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            620: {
                slidesPerView: 2.1,
            },
            767: {
                slidesPerView: 2.4,
            },
            991: {
                spaceBetween: 25,
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1399: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
            1599: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1799: {
                slidesPerView: 3,
                spaceBetween: 70,
            }
        }
    });


    // services slider
    var swiper = new Swiper(".services__slider", {
        slidesPerView: 1.5,
        spaceBetween: 10,
        speed: 700,
        breakpoints: {
            500: {
                slidesPerView: 2.1,
            },
            650: {
                slidesPerView: 2.3,
            },
            768: {
                slidesPerView: 2.8,
            },

            991: {
                slidesPerView: 3.6,
                spaceBetween: 15,
            },

            1199: {
                slidesPerView: 4,
                spaceBetween: 17,
            }
        }
    });

    // acordeon faq ---- //
    $('.faq__row-head').click(function () {
        var thisEl = $(this)
        $('.faq__row').not(thisEl.closest('.faq__row')).removeClass('active');
        $('.faq__row-body').not(thisEl.next('.faq__row-body')).slideUp();
        thisEl.closest('.faq__row').toggleClass('active');
        thisEl.next('.faq__row-body').slideToggle('active');
    });

    // video-play ----- //
    $('.video-play').click(function () {
        var dataYoutube = $(this).parents('.video-item').attr('data-youtube');
        $(this).parents('.video-item').html('<iframe src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
    });

    // comand item ---- //
    $('.comand__item').hover(function () {
        var indexItem = $(this).attr('data-item');
        $('.comand__tabs .name').removeClass('active');
        $('.comand__item').removeClass('active');
        $(this).addClass('active');
        $('#' + indexItem).addClass('active');
    });

    // clients marquee
    var swiper = new Swiper(".clients__marquee", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        speed: 4000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

    // certificates slider
    var swiper = new Swiper(".certificates__slider", {
        slidesPerView: 'auto',
        spaceBetween: 5,
        speed: 700,
    });

    // certificates tabs
    $('.certificates__names .name-row').on('click', function () {
        var tabCertificate = $('.certificates__names .name-row');
        var tabIndex = $(this).attr('data-sertificate');
        var bodyCertificate = $('.certificates__body');
        tabCertificate.removeClass('active');
        $(this).addClass('active');
        bodyCertificate.removeClass('show');
        $("#" + tabIndex).addClass('show');
    });

    // counter --- //
    var countsect = $('.countsect')
    function counter() {
        var numCount = 0;

        $(window).scroll(function () {
            var oTop = $('.countsect').offset().top - window.innerHeight;
            if (numCount == 0 && $(window).scrollTop() > oTop) {
                $('.count').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');

                    $({ countNum: $this.text() }).animate({
                        countNum: countTo
                    },

                        {
                            duration: 2000,
                            easing: 'linear',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }
                        });
                        numCount = 1;
                });
            }

        })
    }
    if (countsect.length) {
        counter()
    }

});