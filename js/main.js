"use strict";

const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const instructions = document.querySelector(".instructions__number");
const tries = document.querySelector(".tries");
tries.innerHTML = 0;

function guessNumber() {
  debugger;
  tries.innerHTML++;
  const randomNumber = Math.floor(Math.random * 100);
  const userNumber = input.value;
  if (userNumber < randomNumber) {
    instructions.innerHTML = "Demasiado bajo";
  } else if (userNumber > randomNumber) {
    instructions.innerHTML = "Demasiado alto";
  } else if (userNumber === randomNumber) {
    instructions.innerHTML = "¡HAS GANADO, CAMPEONA!";
  } else {
    return "Error";
  }
  console.log(randomNumber);
}

button.addEventListener("click", guessNumber);
