"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number";

// console.log(document.querySelector(".number").textContent);
// document.querySelector(".number").textContent = 18;

// document.querySelector(".score").textContent = 100;

// document.querySelector(".guess").value = 200;
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;
// document.querySelector(".again").addEventListener('click');

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈 Number too high";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉 Number too low";
  }
  // document.querySelector(".message").textContent = "🎉 Correct secretNumber";
});
