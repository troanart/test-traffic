"use strict";
$(document).ready(function () {
  $("#range").ionRangeSlider({
    skin: "round",
    type: "single",
    min: 1,
    max: 12,
    from: 1,
    step: 1,
    grid: true,
    grid_snap: true,
    grid_num: 5,
    values: ["1 month", "3 month", "6 month", "9 month", "12 month"],
  });

  $("#range2").ionRangeSlider({
    skin: "round",
    type: "single",
    min: 300,
    max: 10000,
    from: 777,
    step: 1,
    grid: true,
    grid_num: 4,
    grid_snap: false,
    postfix: " €",
  });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const input = document.querySelector("#phone");
const iti = window.intlTelInput(input, {
  initialCountry: "it",
  separateDialCode: true,
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});

const burger = document.querySelector(".nav__burger");
const modal = document.querySelector(".modal");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  modal.classList.toggle("active");
  nav.classList.toggle("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    nav.classList.remove("active");
  }
});

const closeCross = document.querySelector(".modal__close");

closeCross?.addEventListener("click", (e) => {
  e.stopPropagation();
  modal.classList.remove("active");
  nav.classList.remove("active");
});

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  if (name.value.trim().length < 3) {
    alert("Name must be at least 3 characters long.");
    isValid = false;
  }

  const surname = document.getElementById("surname");
  if (surname.value.trim().length < 3) {
    alert("Surname must be at least 3 characters long.");
    isValid = false;
  }

  const email = document.getElementById("email");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.value.match(emailPattern)) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  const phone = document.getElementById("phone");
  const phonePattern = /^\+?[0-9]{1,15}$/;
  if (!phone.value.match(phonePattern)) {
    alert("Please enter a valid phone number.");
    isValid = false;
  }

  if (isValid) {
    alert("Form is valid! You can submit now.");
  }
});
