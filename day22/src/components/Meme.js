import { useState } from "react";

function Meme({ meme, setMeme }) {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "nk4456542",
    password: "nk4456542",
    boxes: []
  });

  function generateMeme() {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeme({ ...meme, url: data.data.url }))
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="meme">
      <img src={meme.url} alt={meme.name} />
      <div>
        {[...Array(meme.box_count)].map((_, index) => {
          return (
            <input
              key={index}
              type="text"
              placeholder={`Meme Caption ${index + 1}`}
              onChange={(e) => {
                const newBoxes = form.boxes;
                newBoxes[index] = { text: e.target.value };
                setForm({ ...form, boxes: newBoxes });
              }}
            />
          );
        })}
      </div>
      <div>
        <button onClick={generateMeme}>Generate Meme</button>
        <button onClick={() => setMeme(null)}>Choose Template</button>
      </div>
    </div>
  );
}

export default Meme;
