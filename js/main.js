(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    // Shrink the navbar on scroll
    window.onscroll = function () {
        var navbar = document.getElementById("navbar");
        var navLogoHead = document.getElementById("navLogoHead");
        var navLogoHead2 = document.getElementById("navLogoHead2");

        if (window.scrollY > 50) {
            navbar.classList.add("shrink");
            navLogoHead.style.opacity = "0"; // Hide logo head
            navLogoHead2.style.opacity = "0"; // Hide logo head 2
        } else {
            navbar.classList.remove("shrink");
            navLogoHead.style.opacity = "1"; // Show logo head
            navLogoHead2.style.opacity = "1"; // Show logo head 2
        }
    };

   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });

// -----------------------------------
$(".carousel-item-2").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        }
    }
});
// -----------------------------------
})(jQuery);
