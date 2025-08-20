document.addEventListener("DOMContentLoaded", function () {
  // Scroll behavior
  window.addEventListener("scroll", function () {
    // Sticky navbar on scroll
    if (window.scrollY > 20) {
      document.querySelector(".navbar").classList.add("sticky");
    } else {
      document.querySelector(".navbar").classList.remove("sticky");
    }

    // Scroll-up button show/hide
    if (window.scrollY > 500) {
      document.querySelector(".scroll-up-btn").classList.add("show");
    } else {
      document.querySelector(".scroll-up-btn").classList.remove("show");
    }
  });

  // Slide-up button
  document.querySelector(".scroll-up-btn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "auto" }); // instant scroll
    document.documentElement.style.scrollBehavior = "auto";
  });

  // Smooth scroll on menu items click
  document.querySelectorAll(".navbar .menu li a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  // Toggle menu/navbar
  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
  });

  // Typing animation (using Typed.js library)
  new Typed(".typing", {
    strings: ["Web Developer", "Developer", "Free Styler", "Designer", "Interior Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing-2", {
    strings: ["Web Developer", "Developer", "Free Styler", "Designer", "Interior Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Owl carousel equivalent (needs a vanilla alternative since OwlCarousel is jQuery-based)
  // You can use Swiper.js or tiny-slider as replacement in vanilla JS.
  // Example with Swiper.js:
  // new Swiper(".carousel", {
  //   loop: true,
  //   autoplay: { delay: 2000, disableOnInteraction: false },
  //   slidesPerView: 1,
  //   breakpoints: {
  //     600: { slidesPerView: 2 },
  //     1000: { slidesPerView: 3 },
  //   }
  // });

  // Stop the jump animation after 1 minute
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 60000);
});
