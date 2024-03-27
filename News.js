// # Strict Mode
"use strict";
// navbar

let closeInput = document.querySelector(".close-nav");
let serviceNav = document.querySelector(".service-nav");
let openNav = document.querySelector(".nav-toggle-btn");
let CloseNav = document.querySelector(".nav-toggle");

openNav.addEventListener("click", function () {
  serviceNav.classList.add("active");
  closeInput.classList.add("active");
});

closeInput.addEventListener("click", function () {
  serviceNav.classList.remove("active");
  closeInput.classList.remove("active");
});

CloseNav.addEventListener("click", function () {
  serviceNav.classList.remove("active");
  closeInput.classList.remove("active");
});

// search input

let search = document.querySelector(".search");
let checked = document.querySelector(".section-one-cheked");
let closeInp = document.querySelector(".nav-toggle-close");
let searchInput = document.querySelector(".search-input");

search.addEventListener("click", function () {
  checked.classList.add("active");
  searchInput.classList.add("active");
});

closeInp.addEventListener("click", function () {
  checked.classList.remove("active");
  searchInput.classList.remove("active");
});

// loading

let div = document.querySelector(".loading");
let load = document.querySelector(".loader");

let myFunc = function (div, load) {
  window.onload = function () {
    if (div.getAttribute("class")) {
      div.classList.add("active");
      load.classList.add("active");
    }

    let myFunc = setTimeout(function () {
      div.classList.remove("active");
      load.classList.remove("active");
    }, 3000);

    return myFunc;
  };
};

myFunc(div, load);

let btn = document.querySelector(".button");
let header = document.querySelector("article");

window.onscroll = function () {
  if (scrollY >= 50) {
    btn.classList.add("active");
    header.classList.add("active");
  } else {
    btn.classList.remove("active");
    header.classList.remove("active");
  }

  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

jQuery(document).ready(function () {
  var options = {
    newsList: "#js-news",
    tickerRate: 80,
    loopDelay: 3000,
    startDelay: 50,
    resumeOffHover: true,
    placeHolder1: " |",
  };
  jQuery(".nav-news").newsTicker(options);
});