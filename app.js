var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
//NnPsjXQeEzj7cFjN
mongoose
  .connect(
    "mongodb+srv://cody:NnPsjXQeEzj7cFjN@cluster0.tagm0.mongodb.net/node-nucamp?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB Connected to database!");
  })
  .catch(() => {
    console.log("MongoDB Connection failed!");
  });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const meetingRouter = require("./routes/meetingRouter");
const positionRouter = require("./routes/positionRouter");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/meetings", meetingRouter);
app.use("/positions", positionRouter);
module.exports = app;
