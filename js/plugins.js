/*global $, console*/

//Adjust Slider Height
var upperh = $(".upper-bar").innerHeight(),
    navh   = $(".navbar").innerHeight(),
    winh   = $(window).height();
$(".slider, .carousel-item").height(winh - (navh + upperh));

//Shuffle Portfolio 
$(".portfolio ul li").on("click", function () {
    'use strict';
    $(this).addClass('active').siblings().removeClass('active');
    
    if ($(this).data('class') === 'all') {
        $('.images .pic').css('display', "inline-block");
    } else {
        $('.images .pic').css('display', 'none');
        $($(this).data('class')).parent().css('display', "inline-block");
    }
});

//Scroll Up Button
var bscroll = $(".scroll");
$(window).scroll(function () {
    'use strict';
    if ($(this).scrollTop() >= 500) {
        bscroll.show();
    } else {
        bscroll.hide();
    }
});
bscroll.click(function () {
    'use strict';
    $('html,body').animate({scrollTop : 0}, 1000);
});


