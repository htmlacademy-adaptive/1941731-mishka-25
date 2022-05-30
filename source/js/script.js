let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
let map = document.querySelector(".contacts__map");
let mapImg = document.querySelector(".contacts__map-img");

map.classList.remove("contacts__map--nojs");
mapImg.classList.remove("contacts__map-img--nojs");
navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
