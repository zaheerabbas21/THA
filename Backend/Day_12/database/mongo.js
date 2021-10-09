var mongoose = require("mongoose");

var mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;
db.on("error", function () {
  console.log("Mongodb connection error");
});
