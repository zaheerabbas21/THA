var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { SECRET } = require("./config/index");
var passport = require("passport"); //google/fb authentication
//require("./database/index");

require("./database/mongo");

//redis
const { redisClient, RedisStore, session } = require("./database/redis");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json()); //instead of bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// redis middleware
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 1000 * 60 * 10,
    },
  })
);

// passport middleware
app.use(passport.initialize());
require("./middlewares/passport")(passport);

//My Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/passport", require("./routes/passport"));
app.use("/products", require("./routes/products"));
app.use("/stream", require("./routes/stream"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
