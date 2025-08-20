document.addEventListener("DOMContentLoaded", function () {
  // ------------------ Scroll Behavior ------------------
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

  // ------------------ Scroll-up Button ------------------
  document.querySelector(".scroll-up-btn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "auto" }); // instant scroll
    document.documentElement.style.scrollBehavior = "auto";
  });

  // ------------------ Smooth Scroll for Menu ------------------
  document.querySelectorAll(".navbar .menu li a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  // ------------------ Toggle Menu ------------------
  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
  });

  // ------------------ Typing Animation (Typed.js) ------------------
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

  // ------------------ Colleges Carousel (Owl Carousel) ------------------
  if (typeof $ !== "undefined" && $(".college-carousel").length) {
    $(".college-carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: true, // shows next/prev arrows
      dots: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    });
  }

  // ------------------ Stop Jump Animation after 1 minute ------------------
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 60000);
});
