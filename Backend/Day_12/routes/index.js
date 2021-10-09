var express = require("express");
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerChecks");
var register = require("../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
  const sess = req.session;
  sess.username = "ravikumar";
  res.render("index", { title: "Express" });
});

router.get("/test", function (req, res, next) {
  console.log("Redis value", req.session.username);
  res.render("index", { title: "Express" });
});

/*
 * @requires {email, password, confirmPassword} - req.body
 * description
 * Security, performance and edge cases
 */

router.post("/register", registerInitialCheck, register);

module.exports = router;
