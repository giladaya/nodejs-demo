const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const usersController = require("./users/controller");

const PORT = 3000;

const app = express();

// Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/users/", usersController);

// Start
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
