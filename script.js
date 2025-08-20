document.addEventListener("DOMContentLoaded", function () {

  // ----------------------------
  // Initialize Swiper for College Section
  // ----------------------------
  const collegeSwiper = new Swiper(".college-swiper", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: { slidesPerView: 2 },
    1000: { slidesPerView: 3 },
  },
});

  // ----------------------------
  // Function to update active/side slide styling
  // ----------------------------
  function updateSlideStyles(swiper) {
    swiper.slides.forEach((slide) => {
      const box = slide.querySelector(".box");
      slide.classList.remove("swiper-slide-prev", "swiper-slide-next", "swiper-slide-active");
      box.style.transform = "scale(0.9)";
      box.style.opacity = "0.6";
      box.style.boxShadow = "none";
    });

    const activeSlide = swiper.slides[swiper.activeIndex];
    const prevSlide = swiper.slides[swiper.previousIndex];
    const nextSlide = swiper.slides[swiper.activeIndex + 1] || swiper.slides[0];

    if (activeSlide) {
      const box = activeSlide.querySelector(".box");
      box.style.transform = "scale(1.1)";
      box.style.opacity = "1";
      box.style.boxShadow = "0 15px 25px rgba(0,0,0,0.5)";
      activeSlide.classList.add("swiper-slide-active");
    }

    if (prevSlide) prevSlide.classList.add("swiper-slide-prev");
    if (nextSlide) nextSlide.classList.add("swiper-slide-next");
  }

  // ----------------------------
  // Scroll behavior
  // ----------------------------
  const navbar = document.querySelector(".navbar");
  const scrollBtn = document.querySelector(".scroll-up-btn");

  window.addEventListener("scroll", function () {
    // Sticky navbar on scroll
    if (window.scrollY > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    // Scroll-up button show/hide
    if (window.scrollY > 500) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // ----------------------------
  // Scroll-up button click
  // ----------------------------
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ----------------------------
  // Smooth scroll on menu items click
  // ----------------------------
  document.querySelectorAll(".navbar .menu li a").forEach((link) => {
    link.addEventListener("click", () => {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  // ----------------------------
  // Toggle menu/navbar
  // ----------------------------
  const menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", () => {
    const menu = document.querySelector(".navbar .menu");
    const menuIcon = menuBtn.querySelector("i");
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
  });

  // ----------------------------
  // Typing animation (Typed.js)
  // ----------------------------
  const typingStrings = ["Web Developer", "Developer", "Free Styler", "Designer", "Interior Designer"];

  new Typed(".typing", {
    strings: typingStrings,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing-2", {
    strings: typingStrings,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // ----------------------------
  // Stop the jump animation after 1 minute
  // ----------------------------
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 60000);

});
