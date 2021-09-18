var express = require('express');
const fs = require('fs')
const path = require('path');
var router = express.Router();

/* GET users listing. */


router.get('/file/:filename(*$)', function (req, res) {
  const filename = req.params.filename
  const fullpath = path.join(__dirname, "../public/images")
  const abspath = path.join(fullpath, filename)

  if (fs.statSync(abspath).isFile()) {                // checks if it is a folder or a file
    if (fs.existsSync(path.join(fullpath, filename))) //prevents from routes being visible
      res.sendFile(path.join(fullpath, filename));
    else
      res.sendStatus(404)
    // res.send('respond with a resource');
  } else {
    res.sendStatus(404).send('it is a folder')
  }
});

router.get('/file', function (req, res) {
  res.send('respond with a resource');

});

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});




module.exports = router;
