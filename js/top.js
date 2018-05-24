$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.MainImg();
            this.CountUp();
        },

        MainImg: function () {
            $(document).ready(function () {
                $('.skitter-large').skitter({
                    animation: 'random',
                    controls: false,
                    dots: false,
                    navigation: true,
                    label: true,
                    stop_over: false,
                    interval: 3000,
                    responsive: {
                        small: {
                            animation: 'fade',
                            max_width: 768,
                            //suffix: '-small'
                        },
                        medium: {
                            animation: 'directionRight',
                            max_width: 1024,
                            // suffix: '-medium'
                        }
                    }
                });
            });
        },

        CountUp: function () {
            $(document).ready(function () {
                $('.counter').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');

                    $({countNum: $this.text()}).animate({
                            countNum: countTo
                        },

                        {

                            duration: 4000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });


                });
            });
        },


    };

    obj.init();

});