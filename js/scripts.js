var navMain = document.querySelector(".main-nav");
var navToogle = document.querySelector(".main-nav__toogle");
var pageHeader = document.querySelector(".page-header");

pageHeader.classList.remove("page-header--nojs");
navMain.classList.remove("main-nav--nojs");

navToogle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
  }
});
