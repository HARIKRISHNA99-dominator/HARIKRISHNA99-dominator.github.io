$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function () {
    $('html').css("scrollBehavior", "smooth");
  });

  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["Data Analyst","Web Developer", "Developer", "Designer","Machine Learning Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.4,
  });

  setTimeout(() => {
  document.querySelectorAll('.jump-text').forEach(el => {
    el.classList.add('jump-disable');
  });
  }, 60000);

  setTimeout(function () {
    $('.jump-text').addClass('jump-disable');
  }, 60000);

  $(window).on('load', function () {
    $('#preloader').fadeOut('slow');
  });
});

