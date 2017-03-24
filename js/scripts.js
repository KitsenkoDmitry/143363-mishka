var navMain = document.querySelector(".main-nav");
var navToogle = document.querySelector(".main-nav__toogle");
var pageHeader = document.querySelector(".page-header");

var catalogModal = document.querySelector(".catalog-item__modal");
var productBtn = document.querySelector(".btn--product");

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

productBtn.addEventListener("click", function() {
  event.preventDefault();
  if (catalogModal.classList.contains("catalog-item__modal--closed")) {
    catalogModal.classList.remove("catalog-item__modal--closed");
    catalogModal.classList.add("catalog-item__modal--opened");
  } else {
    catalogModal.classList.remove("catalog-item__modal--opened");
    catalogModal.classList.add("catalog-item__modal--closed");
  }
});
