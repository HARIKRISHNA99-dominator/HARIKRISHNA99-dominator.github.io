document.addEventListener("DOMContentLoaded", function () {

  // ----------------------------
  // Initialize Swiper for College Section
  // ----------------------------
  new Swiper(".college-swiper", {
    loop: true,
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
  // Scroll behavior
  // ----------------------------
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const scrollBtn = document.querySelector(".scroll-up-btn");

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
  document.querySelector(".scroll-up-btn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "auto" }); // instant scroll
    document.documentElement.style.scrollBehavior = "auto";
  });

  // ----------------------------
  // Smooth scroll on menu items click
  // ----------------------------
  document.querySelectorAll(".navbar .menu li a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  // ----------------------------
  // Toggle menu/navbar
  // ----------------------------
  document.querySelector(".menu-btn").addEventListener("click", function () {
    const menu = document.querySelector(".navbar .menu");
    const menuIcon = document.querySelector(".menu-btn i");

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
