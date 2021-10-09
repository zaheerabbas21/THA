// /*
//  * level - 3
//  * check if email already exists
//  * password hash
//  * email lowercase test@gmail.com / Test@gmail.com
//  * save
//  */

// const User = require('../models/user') // for postgres
const User = require("../models/mongo"); // for mongodb
const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = async (req, res) => {
  console.log(req.body);
  const { email, password, fullName } = req.body;

  try {
    //const alreadyExists = await User.findOne({ where: { email } });
    const alreadyExists = await User.findOne({ email });
    if (alreadyExists) {
      console.log("inside if");
      res.status(401).send("Email already exists.");
    } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email: email.toLowerCase(),
        password: hash,
        fullName: fullName,
      });
      const savedUser = await newUser.save();
      res.status(201).send(savedUser);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports = register;

// // const User = require('../models/user') // for postgres
// const User = require("../models/mongo"); // for mongodb
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

// /**
//  *
//  * @param {*} req
//  * @param {*} res
//  * check if email already ecists
//  * password hash
//  * email lowercase
//  * save
//  */

// const register = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const alreadyExists = await User.findOne({ where: { email } });
//     if (alreadyExists) {
//       res.status(401).send("Email already exists");
//     } else {
//       const salt = bcrypt.genSaltSync(saltRounds);
//       const hash = bcrypt.hashSync(password, salt);
//       const newUser = new User({
//         email: email.toLowerCase(),
//         password: hash,
//         fullName: "ravikumarr",
//       });
//       const savedUser = await newUser.save();
//       res.status(201).send(savedUser);
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Something went wrong");
//   }
// };

// module.exports = register;
