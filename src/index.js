const path = require("path");

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");

const usersController = require("./users/controller");
require("./auth");

const PORT = 3000;

const app = express();

// Middlewares
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/users/", usersController);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.render("index.ejs", {
    id: 1,
    name: "Chuck Norris",
    avatar: "chuck.jpg",
    admin: false,
  });
});

app.get(
  "/admin",
  passport.authenticate("bearer", { session: false }),
  function (req, res) {
    res.render("admin.ejs", {
      ...req.user,
      id: req.user.id,
      admin: true,
    });
  }
);

console.log(`Env ${process.env.NODE_ENV}`);

// Start
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
