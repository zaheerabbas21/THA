const root = document.getElementById("root");

function handleToggle(event) {
  const box = event.target;
  if (box.classList.contains("red")) {
    box.classList.remove("red");
    box.classList.add("white");
  } else {
    box.classList.remove("white");
    box.classList.add("red");
  }
}

const alienArray = [
  129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
  190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
  250, 252, 266, 268, 271, 273,
];

function createAlien(boxes, alienArray) {
  alienArray.forEach((alien) => boxes[alien].classList.add("white"));
}

function initiliaze() {
  let htmlString = "";
  for (let i = 1; i <= 400; i++) {
    htmlString += '<div class="box red"></div>';
  }
  root.innerHTML = htmlString;
  const boxes = document.getElementsByClassName("box");
  //   console.log(boxes);

  //   for (let i = 0; i < boxes.length; i++) {
  //     console.log(boxes.item(i));
  //   }

  const boxesArray = Array.from(boxes);
  boxesArray.forEach((box) => {
    box.addEventListener("click", handleToggle);
  });

  createAlien(boxesArray, alienArray);
}

initiliaze();

// const root = document.getElementById("root");

// function initiliaze() {
//   htmlString = "";
//   for (let i = 0; i < 400; i++) {
//     htmlString += '<div class="box red"></div>';
//   }
//   root.innerHTML = htmlString;
//   const rootAll = document.querySelectorAll(".box");
//   //   console.log(rootAll);
//   const rootArray = Array.from(rootAll);
//   rootArray.forEach((box) => {
//     box.addEventListener("click", handleToggle);
//   });
// }

// function handleToggle(event) {
//   const box = event.target;
//   if (box.classList.contains("red")) {
//     box.classList.remove("red");
//     box.classList.add("white");
//   } else {
//     box.classList.remove("white");
//     box.classList.add("red");
//   }
// }

// initiliaze();
