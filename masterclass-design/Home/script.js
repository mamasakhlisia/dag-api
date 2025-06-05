document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Initialize Owl Carousel for partners
    $('.partners-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        margin: 20,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    
    // Initialize ScrollReveal with default config
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 200,
        reset: true
    });
    
    // Configure animations for all sections below hero
    sr.reveal('.about-section', {
        delay: 200
    });
    
    sr.reveal('.about-section img', {
        delay: 300,
        origin: 'left'
    });
    
    sr.reveal('.about-section .section-title, .about-section p, .about-section .btn', {
        interval: 100
    });
    
    sr.reveal('.masterclasses-section .section-title, .masterclasses-section .lead', {
        delay: 200
    });
    
    sr.reveal('.masterclass-card', {
        interval: 100,
        delay: 300
    });
    
    sr.reveal('.features-section .section-title, .features-section .lead', {
        delay: 200
    });
    
    sr.reveal('.feature-box', {
        interval: 100,
        delay: 300
    });
    
    sr.reveal('.cta-section', {
        delay: 200,
        beforeReveal: function(el) {
            el.style.opacity = 0;
        }
    });
    
    sr.reveal('.testimonial-card', {
        origin: 'left',
        delay: 200
    });
    
    sr.reveal('.map-card', {
        origin: 'right',
        delay: 200
    });
    
    sr.reveal('.partners-section .section-title, .partners-section .lead', {
        delay: 200
    });
    
    sr.reveal('.partner-item', {
        interval: 100,
        delay: 300
    });
    
    sr.reveal('footer', {
        delay: 200
    });
    
    sr.reveal('.footer .col-lg-4', {
        delay: 200
    });
    
    sr.reveal('.footer .col-lg-2', {
        delay: 300
    });
    
    sr.reveal('.footer .col-lg-3', {
        delay: 400
    });
});