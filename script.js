// Global variables for education slider
let currentSlide = 0;
const totalSlides = 3;

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Developer", "Free Styler", "Designer", "Interior Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Web Developer", "Developer", "Free Styler", "Designer", "Interior Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{ items: 1, nav: false },
            600:{ items: 2, nav: false },
            1000:{ items: 3, nav: false }
        }
    });

    // Stop the jump animation after 1 minute
    setTimeout(() => {
        $('body').addClass('loaded');
    }, 60000);

    // Initialize education slider
    updateSlider();
});

// =================== Education Slider Functions ===================
function updateSlider() {
    const sliderContainer = document.getElementById('sliderContainer');
    const cards = document.querySelectorAll('.college-card');
    const indicators = document.querySelectorAll('.indicator');
    
    const translateX = -currentSlide * 100;
    sliderContainer.style.transform = `translateX(${translateX}%)`;
    
    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        if (index === currentSlide) {
            card.classList.add('active');
        } else if (index === currentSlide - 1 || (currentSlide === 0 && index === totalSlides - 1)) {
            card.classList.add('prev');
        } else if (index === currentSlide + 1 || (currentSlide === totalSlides - 1 && index === 0)) {
            card.classList.add('next');
        }
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
    animateSlideTransition();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
    animateSlideTransition();
}

function goToSlide(slideIndex) {
    if (slideIndex >= 0 && slideIndex < totalSlides && slideIndex !== currentSlide) {
        currentSlide = slideIndex;
        updateSlider();
        animateSlideTransition();
    }
}

function animateSlideTransition() {
    const activeCard = document.querySelector('.college-card.active');
    if (activeCard) {
        activeCard.style.transform = 'translateZ(50px) scale(1.08)';
        setTimeout(() => {
            activeCard.style.transform = 'translateZ(50px) scale(1.05)';
        }, 200);
    }
}

// =================== Touch / Keyboard Controls ===================
let startX = 0;
let endX = 0;

document.getElementById('sliderContainer').addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
}, { passive: true });

document.getElementById('sliderContainer').addEventListener('touchmove', e => {
    endX = e.touches[0].clientX;
}, { passive: true });

document.getElementById('sliderContainer').addEventListener('touchend', e => {
    const threshold = 50;
    const difference = startX - endX;
    if (Math.abs(difference) > threshold) {
        if (difference > 0) nextSlide();
        else previousSlide();
    }
}, { passive: true });

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') previousSlide();
    else if (e.key === 'ArrowRight') nextSlide();
});

// =================== Auto-play with Hover Pause ===================
let autoPlayInterval;
const sliderElement = document.querySelector('.education-slider');

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
}
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

sliderElement.addEventListener('mouseenter', stopAutoPlay);
sliderElement.addEventListener('mouseleave', startAutoPlay);
startAutoPlay();

// =================== Intersection Observer ===================
const observerOptions = { threshold: 0.3, rootMargin: '0px 0px -100px 0px' };

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const educationSection = entry.target;
            educationSection.classList.add('animate-in');
            const cards = educationSection.querySelectorAll('.college-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    });
}, observerOptions);

observer.observe(document.querySelector('.education'));
