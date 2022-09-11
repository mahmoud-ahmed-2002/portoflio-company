$(document).ready(function () {
  $("#pagepiling").pagepiling({
    menu: ".navbar-nav-mobile",
    anchors: [
      "home",
      "about",
      "project",
      "testimonials",
      "partners",
      "news",
      "contact",
    ],
    scrollingSpeed: 280,
    navigation: {
      textColor: "#000",
      bulletsColor: "#e1b788",
      position: "right",
      tooltips: [
        "home",
        "about",
        "project",
        "testimonials",
        "partners",
        "news",
        "contact",
      ],
    },
    //events
    afterLoad: function (anchorLink, index) {
      $(".pp-section .intro").removeClass("animate");
      $(".active .intro").addClass("animate");
      aos();

      // ------------ header scroll

      $(".pp-scrollable").scroll(function () {
        if ($(this).scrollTop() > 0) {
          $(".navbar").addClass("header-shadow");
        } else {
          $(".header").removeClass("header-shadow");
        }
      });

    },
    afterRender: function () {},
  });

  if ($(".a-carousel-testimonial").length) {
    $(".a-carousel-testimonial").owlCarousel({
      items: 1,
      navText: [
        '<i class="lni lni-chevron-left"></i>',
        '<i class="lni lni-chevron-right"></i>',
      ],
      smartSpeed: 750,
      margin: 30,
      dots: false,
      nav: true,
    });
  }
});

//   close and open navbar links
$(".toggler i").click(function () {
  console.log("1");
  $(".navbar-mobile").removeClass("close-navbar");
  $(".navbar-mobile").addClass("open-navbar");
});
$(".close-icon i").click(function () {
  console.log("1");
  $(".navbar-mobile").addClass("close-navbar");
  $(".navbar-mobile").removeClass("open-navbar");
});

function aos() {
  AOS.init({
    duration: 800,
    delay: 5 - 00,
  });
}

//  change background on project section
$(".project-box").on("mouseover", function () {
  var index = $(".project-box").index(this);
  $(".bg-changer .section-bg")
    .removeClass("active")
    .eq(index)
    .addClass("active");
});
