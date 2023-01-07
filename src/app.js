"use strict";

const adviceContainer = document.getElementById("advice-container");
const generate = document.getElementById("new");
const id = document.getElementById("id");
const advice = document.getElementById("advice");

const newQuote = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      const { slip } = data;
      id.textContent = `Advice #${slip.id}`;
      advice.textContent = slip.advice;
    });
};

window.onload = newQuote();

generate.addEventListener("click", function () {
  newQuote();
});
