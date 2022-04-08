const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;
const User = require("./users/service.js");

const SECRET = "abc";

function decodeToken(token, prefix) {
  if (token.startsWith(SECRET) && token.length > prefix.length) {
    const id = parseInt(token.substring(prefix.length));
    if (isNaN(id)) {
      return null;
    }
    return id;
  }
  return null;
}

// Init passport
passport.use(
  new BearerStrategy(function (token, done) {
    const id = decodeToken(token, SECRET);
    if (id != null) {
      const user = User.getOne(id);
      if (user) {
        return done(null, user); //allows the call chain to continue to the intented route
      }
      // return done(null, false); //no such user
    }

    return done(null, false); //returns a 401 to the caller
  })
);
