/*
level - 1
 * email validate - string
 * password validate
 * password == confirm
 * 
*/

const { emailValidate, passwordValidate } = require("../utils/Validate");

const registerInitialCheck = (req, res, next) => {
  //console.log("i am here");
  const { email, password, confirmPassword } = req.body;
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 8 &&
    confirmPassword === password &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    console.log("veerzz");
    next();
  } else {
    //clg
    //console.log(req.body);
    res.status(401).send("Initial checks fail");
  }
};

module.exports = registerInitialCheck;
