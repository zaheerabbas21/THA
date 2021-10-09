const mongoose = require("mongoose");
const Schema = mongoose.Schema; //scehma = structure of your table

const UserSchema = new Schema({
  fullName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
});

// module.exports = User = mongoose.model("user", UserSchema);
module.exports =  mongoose.model("user", UserSchema);
