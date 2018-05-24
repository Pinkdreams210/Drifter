(function ($) {
    $(document).ready(function () {

        $('#gnavi li.active').addClass('open').children('ul').show();
        $('#gnavi li.has02>a').on('click', function () {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(200);
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown(200);
                element.siblings('li').children('ul').slideUp(200);
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(200);
            }
        });

    });
})(jQuery);


/*********SCROLLBAR***************/
(function ($) {
    $(window).load(function () {
        /* custom scrollbar fn call */
        $(".content-scroll01").mCustomScrollbar({
            scrollButtons: {
                enable: true
            }
        });
        $(".content-scroll02").mCustomScrollbar({
            scrollButtons: {
                enable: true
            }
        });
    });
})(jQuery);


/*********Countdown Time***************/
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Sep 30, 2018 00:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second)


