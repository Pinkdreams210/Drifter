// JavaScript Document
$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.toTop();
            this.smoothScroll();
            this.changeSize();
            this.tabSlider();
            this.showMainMenu();
            this.infoOn();
        },

        //totop
        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $("#totop").fadeIn();
                }
                else {
                    $("#totop").fadeOut();
                }
            });
            $("#totop a").click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        },

        //smoothScroll
        smoothScroll: function () {
            $('a[href^="#"]').click(function () {
                var wWidth = $(window).width();
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if (wWidth <= 640) {
                        $('html,body').animate({scrollTop: p.top - 60}, 500);
                        $('#sp-gnavi').removeClass('open');
                    } else {
                        $('html,body').animate({scrollTop: p.top - 80}, 500);
                    }
                }
                return false;
            });
        },

        //change size
        changeSize: function () {
            $('#gnavi .has > a').click(function () {
                $('#gnavi .has a.active').not(this).trigger('click');
                $(this).toggleClass('active');
                $(this).next('.sub').stop().slideToggle();
            });

            var resizeTimer;

            $(window).on('resize', function(e) {
                clearTimeout(resizeTimer);

                resizeTimer = setTimeout(function() {
                    // screen is SP
                    if (!$('.menu-icon').is(':visible')) {
                        $('.sub').removeAttr('style');
                        $('.menu-icon').removeClass('active');

                        // hide main menu for SP screen
                        $('#gnavi').show();
                    } else { // screen is PC
                        // show main menu for PC screen
                        $('#gnavi').hide();
                    }
                }, 250);

            });

        },

        //tabSlider on header
        tabSlider: function () {
            $(".tab-slider--body").hide();
            $(".tab-slider--body:first").show();
            $(".tab-slider--nav li").click(function () {
                $(".tab-slider--body").hide();
                var activeTab = $(this).attr("rel");
                $("#" + activeTab).fadeIn();
                if ($(this).attr("rel") === "tab2") {
                    $('.tab-slider--tabs').addClass('slide');
                } else {
                    $('.tab-slider--tabs').removeClass('slide');
                }
                $(".tab-slider--nav li").removeClass("active");
                $(this).addClass("active");
            });
        },

        //show main menu
        showMainMenu: function () {
            $('.menu-icon').click(function () {
                $(this).toggleClass('active');
                $('#gnavi').slideToggle('fast');

                $('#gnavi .has > a').removeClass('active');
                $('#gnavi .has .sub').hide();
            });

            $('#gnavi .close a').click(function () {
                $('.menu-icon').trigger('click');
            });
        },

        // info-on
        infoOn: function() {
            // show popup
            $('.open-popup').click(function () {
                var popup = $(this).parent().find('.popup');

                // hide others popup
                $('.popup').not(popup).hide();

                // show popup
                popup.toggle();

                // close gnavi (menu)
                if ($('.menu-icon').is(':visible') && $('#gnavi').is(':visible')) {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').hide();
                }
            });

            // close popup when click to button
            $('.popup_close').click(function () {
                $(this).closest('.popup ').hide();
            });

            // close popup when click in the document
            $(document).click(function () {
                $('.popup:visible').hide();
            });
        }

    };

    obj.init();

});
