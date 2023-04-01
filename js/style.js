
jQuery(document).ready(function ($) {

    const main_menu_scroll = $('#header');
    const header = $('#header');
    const next_main_menu = $('#header').next();
    const header_buffer_height = main_menu_scroll.outerHeight();
    // console.log(header.outerHeight());
    if (main_menu_scroll) {
        $(window).scroll(function() {
            const start_y = 0;
            var window_y = $(window).scrollTop();
            // console.log(window_y);
            if (window_y > 0) {
                if (!main_menu_scroll.hasClass('sticky')) {
                    main_menu_scroll.addClass('sticky');
                    next_main_menu.css('margin-top',header_buffer_height);
                }
            } else {
                if (main_menu_scroll.hasClass('sticky')) {
                    main_menu_scroll.removeClass('sticky');
                    next_main_menu.css('margin-top',0);
                }
            }
        });
    }

    //mobile menu
    $('.navbar-toggler').click(function(){
        const navbar_mobile = $('.nav-bar-text');
        if (!navbar_mobile.hasClass('nav-visible')) {
            navbar_mobile.addClass('nav-visible');
            navbar_mobile.css('top',header_buffer_height);
        }
        else{
            if (navbar_mobile.hasClass('nav-visible')) {
                navbar_mobile.removeClass('nav-visible');
            }
        }
    });
});

