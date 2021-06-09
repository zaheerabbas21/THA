const screen = document.querySelector(".screen");

function initializeValues() {
  let totalValue = 0;
  let screenBuffer = "0";
  let operator = null;
}

const buttons = document.querySelector(".calc-buttons");
buttons.addEventListener("click", function (event) {
  console.log(event.target.innerText);
});

initializeValues();
