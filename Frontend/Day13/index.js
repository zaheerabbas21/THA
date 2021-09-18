const RANDOM_MEME_URL = "https://meme-api.herokuapp.com/gimme";
const meme = document.getElementById("meme");
const nextMemeBtn = document.getElementById("next-meme");

async function getMeme() {
  meme.innerHTML = "";
  const data = await fetch(RANDOM_MEME_URL);
  if (data.status === 200) {
    const jsonData = await data.json();
    const fragment = document.createDocumentFragment();
    const h3 = document.createElement("h3");
    h3.textContent = jsonData.title;
    const img = document.createElement("img");
    img.src = jsonData.url;
    img.alt = jsonData.title;
    fragment.appendChild(h3);
    fragment.appendChild(img);
    meme.appendChild(fragment);
  } else {
    getMeme();
  }
}

nextMemeBtn.addEventListener("click", getMeme);

getMeme();
