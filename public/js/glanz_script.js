(function ($) {
    "use strict"; // Start of use strict

    $('.gla_countdown').each(function () {
        var year = $(this).attr('data-year');
        var month = $(this).attr('data-month');
        var day = $(this).attr('data-day');
        $(this).countdown({until: new Date(year, month - 1, day)});

    });

    /*Scroll Effect*/
    $('.gla_go').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 300);
        e.preventDefault();
    });

    /* Shortcode Nav */
    var top_offset = $('header').height() - 1;

    /* Fixed for Parallax */
    $(".gla_fixed").css("background-attachment", "fixed");

    /* Music */
    $('.gla_music_icon').on('click', function () {
        $('.gla_music_icon_cont').fadeToggle();
    });

    $(window).load(function () {
        /*SkroolR*/
        if (!device.tablet() && !device.mobile()) {
            var s = skrollr.init({
                forceHeight: false,
            });
        }
    });


})(jQuery);





