"use strict";

//Get Elements from HTML
const main = document.querySelector("main");
const form = document.querySelector("#song-form");
const songNumber = document.querySelector("#song-number");
const songButton = document.querySelector("#select-button");
const engParagraph = document.querySelector(".english");
const afrParagraph = document.querySelector(".afrikaans");
const divider = document.querySelector(".divider");
const numberH4 = document.querySelector(".number");
const container = document.querySelector(".container");
const numContainer = document.querySelector("#number-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //Parsing song onto new Page
  fetch("songs.JSON")
    .then((response) => response.json())
    .then((data) => {
      //App functionality
      main.classList.add("hidden");
      const [eng, afr] = data[songNumber.value];
      numberH4.textContent=`${songNumber.value}.`
      engParagraph.textContent = eng;
      afrParagraph.textContent = afr;
      container.style.margin = 0;
      numContainer.classList.remove("hidden");
    });
});
