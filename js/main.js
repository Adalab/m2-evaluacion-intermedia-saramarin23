"use strict";

const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const instructions = document.querySelector(".instructions__number");
const tries = document.querySelector(".tries");
const randomNumber = Math.ceil(Math.random() * 100);

tries.innerHTML = 0;

function guessNumber() {
  tries.innerHTML++;
  //debugger;
  const userNumber = parseInt(input.value);
  if (userNumber < randomNumber && userNumber >= 1 && userNumber <= 100) {
    instructions.innerHTML = "Demasiado bajo";
  } else if (
    userNumber > randomNumber &&
    userNumber >= 1 &&
    userNumber <= 100
  ) {
    instructions.innerHTML = "Demasiado alto";
  } else if (
    userNumber === randomNumber &&
    userNumber >= 1 &&
    userNumber <= 100
  ) {
    instructions.innerHTML = "¡HAS GANADO, CAMPEONA!";
  } else {
    instructions.innerHTML = "Prueba un número entre 1 y 100";
  }
  console.log(userNumber);
  console.log(randomNumber);
}

button.addEventListener("click", guessNumber);
