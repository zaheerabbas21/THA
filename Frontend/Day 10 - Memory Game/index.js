const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

const cards = document.getElementById("cards");

let isFlipped = true;
let firstCard = null;
let secondCard = null;

const htmlElement = `
    <div class="card">
        <h2 class="front"></h2>
    </div>
`;

function init() {
  htmlString = "";
  arr.forEach((element) => {
    htmlString += `
      <div class="card">
          <h2 class="flipped">${element}</h2>
      </div>
  `;
  });

  startGame();

  cards.innerHTML = htmlString;
  const cardsList = document.querySelectorAll(".card");
  cardsList.forEach((card) => {
    card.addEventListener("click", flip);
  });
}

function flip(event) {
  const card = event.target;
  console.log(this);
  const childElement = this.querySelector(".flipped");
  if (childElement.classList.contains("flipped")) {
    childElement.classList.remove("flipped");
  }
}

function startGame() {
  isFlipped = true;
  firstCard = null;
  secondCard = null;
}

init();
