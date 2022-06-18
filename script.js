"use strict";

const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const painel = document.querySelector("#painel");

let selectRating = "Satisfeito";

painel.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", (e) => {
  painel.innerHTML = `
        <i class="fa-duotone fa-heart"></i>
        <strong>Obrigado por sua avaliação!</strong>
        <br>
        <strong>Feedback</strong> <strong style="color: red;">${selectRating}</strong>
        <p>Vamos melhorar cada dia mais para aprender e entregar o melhor sempre! Let's code, Let's domain the world!!!.</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
