"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number";

// console.log(document.querySelector(".number").textContent);
// document.querySelector(".number").textContent = 18;

// document.querySelector(".score").textContent = 100;

document.querySelector(".guess").value = 20;
console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
