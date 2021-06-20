let square = document.querySelector(".square");

console.log(square);

for (let i = 1; i <= 400; i++) {
  square.innerHTML += "<div class='box'></div>";
}

let boxs = document.querySelectorAll(".box");

console.log(boxs);
boxs.forEach((box, index) => {
  box.addEventListener("click", () => {
    box.classList.toggle("changeColor");
  });

  if (
    index == 129 ||
    index == 130 ||
    index == 148 ||
    index == 149 ||
    index == 150 ||
    index == 151 ||
    index == 167 ||
    index == 168 ||
    index == 169 ||
    index == 170 ||
    index == 171 ||
    index == 172 ||
    index == 186 ||
    index == 187 ||
    index == 189 ||
    index == 190 ||
    index == 192 ||
    index == 193 ||
    index == 206 ||
    index == 207 ||
    index == 209 ||
    index == 210 ||
    index == 212 ||
    index == 213 ||
    index == 208 ||
    index == 211 ||
    index == 228 ||
    index == 231 ||
    index == 247 ||
    index == 249 ||
    index == 250 ||
    index == 252 ||
    index == 266 ||
    index == 268 ||
    index == 271 ||
    index == 273
  ) {
    box.classList.add("changeColor");
  }
});
