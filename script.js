$(document).ready(function () {
    // Sticky navbar and scroll-up button toggle
    $(window).scroll(function () {
        $('.navbar').toggleClass("sticky", this.scrollY > 20);
        $('.scroll-up-btn').toggleClass("show", this.scrollY > 500);
    });

    // Scroll-up button click
    $('.scroll-up-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu click
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typed.js animation
    const options = {
        strings: ["Web Developer", "Developer", "Free Styler", "Designer", "Interior Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };
    new Typed(".typing", options);
    new Typed(".typing-2", options);

    // Owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});
