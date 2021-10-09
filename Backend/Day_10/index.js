const express = require("express");
const app = express();
const path = require("path");

//jade steup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade"); //jade is used for view engine.

// it print the currenctly open directry.
// console.log(__dirname);

//Send Static text files to Front-End.
app.use("/", (req, res) => {
  //send filetype = text
  //res.sendFile(path.join(__dirname, "public/Hello.txt"));

  //send filetype = json
  //res.sendFile(path.join(__dirname, "public/download.jpg"));

  //downloads file on loads web-page.
  // res.download(path.join(__dirname, "public/Hello.json"));

  //downloads image file on loads webpage.
  //res.download(path.join(__dirname, "public/download.jpg"), "test.jpg");

  //jade render && render is used for sending dynamic file.
  // res.render("index", { title: "Express" });

  //cookie - setting cookie in frontend.
  res
    .status(201)
    .cookie("token", "test", {
      expire: new Date(Date.now() + 8 * 3600000), // 36k = total seconds in a hour.
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin");
});

//PORT
app.listen(5000);
