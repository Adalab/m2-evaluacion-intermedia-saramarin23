"use strict";

const button = document.querySelector(".js-btn");
const input = document.querySelector(".js-input");
const instructions = document.querySelector(".js-instructions__number");
const tries = document.querySelector(".js-tries");
const randomNumber = Math.ceil(Math.random() * 100);

let triesNumber = 0;

function update(event) {
  event.preventDefault();
  showFeedback();
  showCounter();
}

function showCounter() {
  triesNumber++;
  tries.innerHTML = triesNumber;
}

const writeInstruction = function(Text) {
  instructions.innerHTML = Text;
};

function showFeedback() {
  const userNumber = parseInt(input.value);
  if (userNumber < 1 || userNumber > 100) {
    writeInstruction("Prueba un número entre 1 y 100");
  } else if (userNumber > randomNumber) {
    writeInstruction("Demasiado alto");
  } else if (userNumber === randomNumber) {
    writeInstruction("¡HAS GANADO, CAMPEONA!");
  } else {
    writeInstruction("Demasiado bajo");
    console.log("Número introducido: ", userNumber);
    console.log("Número ganador: ", randomNumber);
  }
}

button.addEventListener("click", update);
