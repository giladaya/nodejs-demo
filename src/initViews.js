const path = require("path");
const passport = require("passport");

module.exports = function initViews(app) {
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));

  app.get("/", function (req, res) {
    res.render("index.ejs", {
      id: 1,
      name: "Chuck Norris",
      avatar: "assets/chuck.jpg",
      admin: false,
    });
  });

  app.get(
    "/admin",
    passport.authenticate("bearer", { session: false }),
    function (req, res) {
      res.render("admin.ejs", {
        ...req.user,
        avatar: `assets/${req.user.avatar}`,
        admin: true,
      });
    }
  );
};
