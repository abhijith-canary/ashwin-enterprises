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

    
    // Service Owlcarousel Slider
    $(document).ready(function() {
        const carousel = $(".carousel-item-2");
    
        carousel.owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000, // Adjust autoplay speed if needed
            smartSpeed: 1000,
            margin: 30,
            mouseDrag: false,
            touchDrag: false,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
        
        document.addEventListener("DOMContentLoaded", function () {
            // Ensure your elements exist before adding event listeners
            const readmoreLinks = document.querySelectorAll('.readmore-link');
            const closeButtons = document.querySelectorAll('.hover-close');
        
            if (readmoreLinks.length > 0) {
                readmoreLinks.forEach(link => {
                    link.addEventListener('click', function (event) {
                        event.preventDefault();
                        const parentBox = link.closest('.hover-box3');
                        const hoverDiv = parentBox?.querySelector('.manufacture-hover');
                        const boxDiv = parentBox?.querySelector('.manufacture-box');
        
                        if (hoverDiv && boxDiv) {
                            hoverDiv.style.display = 'block';
                            boxDiv.style.display = 'none';
                        }
                    });
                });
            }
        
            if (closeButtons.length > 0) {
                closeButtons.forEach(closeBtn => {
                    closeBtn.addEventListener('click', function () {
                        const parentBox = closeBtn.closest('.hover-box3');
                        const hoverDiv = parentBox?.querySelector('.manufacture-hover');
                        const boxDiv = parentBox?.querySelector('.manufacture-box');
        
                        if (hoverDiv && boxDiv) {
                            hoverDiv.style.display = 'none';
                            boxDiv.style.display = 'block';
                        }
                    });
                });
            }
        });
        
        
        // Variable to track autoplay state
        let isAutoplayRunning = true;    

        // Add click event to toggle autoplay
        $(".hover-box3").on("click", function () {
            if (isAutoplayRunning) {
                carousel.trigger('stop.owl.autoplay');
            } else {
                carousel.trigger('play.owl.autoplay', [3000]);
            }
            isAutoplayRunning = !isAutoplayRunning;
        });
    
    });
    
})(jQuery);

    // navbar working for responsive view
    function toggleMenu() {
        const navLinks = document.getElementById("navLinks");
        const hamburger = document.getElementById("hamburger");

        // Toggle the active class for showing/hiding the menu
        navLinks.classList.toggle("active");

        // Toggle the open class for changing the hamburger icon
        hamburger.classList.toggle("open");
    }

    // // Event card slider 
    // let currentSlide = 0; 
    // const slides = document.querySelectorAll(".card");
    // const dots = document.querySelectorAll(".dot");

    // // Function to show the specified slide
    // function showSlide(index) {
    // document.querySelector(".slider-wrapper").style.transform = `translateX(-${index * 100}%)`;

    // dots.forEach(dot => dot.classList.remove("active"));
    // dots[index].classList.add("active");

    // // Update the current slide index
    // currentSlide = index;
    // }

    // // Auto-slide functionality (optional)
    // setInterval(() => {
    // currentSlide = (currentSlide + 1) % slides.length;    
    // showSlide(currentSlide);
    // }, 5000); // Change slide every 5 seconds


    // card from btn click
    document.addEventListener("DOMContentLoaded", function() {

        const modal = document.getElementById("contactModal");
        const closeButton = document.querySelector(".close");
        const cardButtons = document.querySelectorAll(".card-btn"); 

        function openModal() {
            if (modal) {
                modal.style.display = "flex"; 
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            }
        }
        function closeModal() {
            if (modal) {
                modal.style.display = "none"; 
                document.body.style.overflow = 'auto'; 
            }
        }
        cardButtons.forEach(button => {
            button.addEventListener("click", openModal);
        });

        if (closeButton) {
            closeButton.addEventListener("click", closeModal);
        }
    });


    document.addEventListener('DOMContentLoaded', function () {
        // Select the modal and the close button
        const modal = document.getElementById("contactModal");
        const closeButton = modal.querySelector(".close");

        // Function to open the modal
        function openModal() {
            modal.style.display = "flex"; 
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }
        // Function to close the modal
        function closeModal() {
            modal.style.display = "none"; 
            document.body.style.overflow = 'auto'; // Allow background scroll
        }
        document.querySelectorAll('.event-card-btn').forEach(button => {
            button.addEventListener("click", openModal);
        });
        closeButton.addEventListener("click", closeModal);

    });

