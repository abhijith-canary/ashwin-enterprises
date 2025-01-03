(function ($) {
    "use strict";
 
    
    // Wait for the page to fully load
    window.addEventListener('load', function () {
        // Hide the spinner
        const spinner = document.getElementById('loadingSpinner');
        spinner.style.display = 'none';

        // Show the main content
        const mainContent = document.getElementById('mainContent');
        mainContent.style.display = 'block';
    });

    
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
    // Close the navigation menu when a link is clicked
    function closeMenu() {
        const navLinks = document.getElementById("navLinks");
        const hamburger = document.getElementById("hamburger");

        // Remove active and open classes to close the menu
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
    }

    // Add event listeners to all navigation links
    document.querySelectorAll('.nav-menu').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // // Event card slider 
    let currentSlide = 0; 
    const slides = document.querySelectorAll(".card");
    const dots = document.querySelectorAll(".dot");

    // Function to show the specified slide
    function showSlide(index) {
    document.querySelector(".slider-wrapper").style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    // Update the current slide index
    currentSlide = index;
    }

    // Auto-slide functionality (optional)
    setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;    
    showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds


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


    // js script for smooth scroll effect 1
    function updateScrollOffset() {
        let offsetValue = 70;  

        if (window.matchMedia("(max-width: 400px)").matches) {
            offsetValue = 73; 
        }
        else if (window.matchMedia("(max-width: 600px) and (min-width: 400px)").matches) {
            offsetValue = 75; 
        }
        else if (window.matchMedia("(max-width: 1200px) and (min-width: 600px)").matches) {
            offsetValue = 65; 
        }
        new SmoothScroll('a[href*="#"]', {
            speed: 500,
            speedAsDuration: true,
            offset: offsetValue
        });
    }
    updateScrollOffset();
    window.addEventListener("resize", updateScrollOffset);

    function toggleReadMore(button) {
        const paragraph = button.parentElement.querySelector(".jobvaluation-paragraph");
        const dots = paragraph.querySelector(".dots");
        const moreText = paragraph.querySelector(".more-text");
        const buttonText = button.querySelector(".button-text");
    
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            buttonText.textContent = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            buttonText.textContent = "Read less";
            moreText.style.display = "inline";
        }
    }

    function chooseFunction(event) {
        var parentElement = event.target.closest('.choose-box');  
        var dots = parentElement.querySelector(".choose-dots");
        var moreText = parentElement.querySelector(".choose-more-text");
        var linkText = event.target; 
        var icon = linkText.querySelector('i');
    
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            linkText.innerHTML = "Read more";
            linkText.appendChild(icon);
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            linkText.innerHTML = "Read less";
            linkText.appendChild(icon);
            moreText.style.display = "inline";
        }
    }
     
    document.querySelectorAll('.read-more-link').forEach(function(link) {
        link.addEventListener('click', chooseFunction);
    });
    

    // // Blogs carousel
    // $(".blog-carousel").owlCarousel({
    //     autoplay: true,
    //     dots: false,
    //     loop: true,
    //     nav : true,
    //     navText : [
    //         '<i class="bi bi-chevron-left" aria-hidden="true"></i>',
    //         '<i class="bi bi-chevron-right" aria-hidden="true"></i>'
    //     ],
    //     responsive: {
    //         0:{
    //             items:1
    //         },
    //         576:{
    //             items:1
    //         },
    //         768:{
    //             items:2
    //         },
    //         992:{
    //             items:3
    //         }
    //     }
    // });

    function makeCall(phoneNumber) {
        window.location.href = `tel:${phoneNumber}`;
    }

    // footer session whatsapp  
    function sendToWhatsApp(event) {
        event.preventDefault();  

        const email = document.getElementById("emailInput").value; 
        const phoneNumber = "9947070280";  
        const message = `Hello, This is my email: ${email}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; 
        
        setTimeout(() => {
            window.open(whatsappURL, "_blank");
        }, 50); 

        emailInput.value = "";
    }


    // contact session whatsapp 
    function openWhatsApp() { 
        const phoneNumber = "9947070280"; 
        const message = "Hello! Thank you for reaching out to us. Please let us know your query, and we’ll get back to you as soon as possible";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Open the WhatsApp link
        window.open(whatsappURL, "_blank");

        setTimeout(() => {
            window.open(whatsappURL, "_blank");
        }, 10); 
    }

 