const path = require("path");

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const usersController = require("./users/controller");
const initViews = require("./initViews");
require("./auth");

const PORT = 3000;

const app = express();

// -----------
// Middlewares
// -----------
app.use("/assets", express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ------
// Routes
// ------
// Basic route
app.get("/hello", (req, res) => res.send("Hello World!"));
// Using router
app.use("/api/users/", usersController);

// View engine
initViews(app);

// --------------------
// Custom error handler 
// --------------------
// defined last
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

console.log(`Env ${process.env.NODE_ENV}`);

// -----
// Start
// -----
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
