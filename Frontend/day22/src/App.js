import "./styles.css";
import { useState, useEffect } from "react";
import Templates from "./components/Template";
import Meme from "./components/Meme";

export default function App() {
  const URL = "https://api.imgflip.com/get_memes";
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setTemplates(data.data.memes));
  }, []);

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {meme === null ? (
        <Templates templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}
