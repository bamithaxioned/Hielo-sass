$(document).ready(function (){
  // Hamburger JS Starts
  $(".header__menu").click(function () {
    $(".hamburger").toggleClass("hamburger--active");
    $(".navigation").toggleClass("navigation--active");
    $(".menu").toggleClass("menu--active");
    if ($('.hamburger').hasClass("hamburger--active")) $("html").css({ overflow: "hidden" });
    else $("html").css({ overflow: "auto" });
  });
  // Hamburger JS Ends
  // Header Sticky Js Starts
  $(window).scroll(function (){
    if(scrollY > 0)  $(".header").addClass("header--sticky");
    else  $(".header").removeClass("header--sticky");
  });
  // Header Sticky Js Ends
});


