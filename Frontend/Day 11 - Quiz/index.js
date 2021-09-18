const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: [
      "Douglas Crockford",
      "Sheryl Sandberg",
      "Brendan Eich",
      "Dr. Chuck",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which one of these is a JavaScript package manager",
    answers: ["Node.js", "TypeScript", "npm", "React"],
    correctAnswer: 2,
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: ["Angular", "jQuery", "RequireJS", "ESLint"],
    correctAnswer: 3,
  },
  {
    question: "What is JS?",
    answers: [
      "JavaScript",
      "JS Letters of Alphabet",
      "Kuch bhi",
      "Aur Kuch bhi",
    ],
    correctAnswer: 0,
  },
];

const quiz = document.getElementById("quiz");
const buttons = document.getElementById("buttons");

let questionIndex = 0;
let Score = 0;

function renderButtons() {
  const prevBtn = `<button class="btn" id="previous-btn">Previous</button>`;
  const nexBtn = `<button class="btn" id="next-btn">Next</button>`;
  buttons.innerHTML = prevBtn + nexBtn;
  const prev = document.getElementById("previous-btn");
  const next = document.getElementById("next-btn");
  prev.addEventListener("click", handlePrev);
  next.addEventListener("click", handleNext);
}

function renderQuestion(questionObj) {
  const { question, answers, correctAnswer } = questionObj;
  const htmlString = `
        <div class="quiz-card">
            <div class="question">
                <h3>${question}</h3>
            </div>
            <div class="options">
                <p class="option">${answers[0]}</p>
                <p class="option">${answers[1]}</p>
                <p class="option">${answers[2]}</p>
                <p class="option">${answers[3]}</p>
            </div>
        </div>
    `;
  quiz.innerHTML = htmlString;

  const options = document.getElementsByClassName("option");
  Array.from(options).forEach((option) => {
    option.addEventListener("click", (event) => {
      handleClick(event, correctAnswer);
    });
  });

  renderButtons();
}

function handleClick(event, correctAnswer) {
  const userAnswer = event.target.innerText;
  const answer = myQuestions[questionIndex].answers[correctAnswer];
  if (userAnswer === answer) {
    event.target.classList.add("correctAnswer");
  } else {
    event.target.classList.add("wrongAnswer");
  }
}

function handlePrev() {
  questionIndex = Math.max(0, (questionIndex - 1) % myQuestions.length);
  renderQuestion(myQuestions[questionIndex]);
  console.log(questionIndex);
}

function handleNext() {
  questionIndex = Math.min(
    myQuestions.length - 1,
    (questionIndex + 1) % myQuestions.length
  );
  renderQuestion(myQuestions[questionIndex]);
  console.log(questionIndex);
}

renderQuestion(myQuestions[questionIndex]);
