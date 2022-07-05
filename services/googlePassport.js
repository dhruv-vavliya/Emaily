const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// Call the serializeUser with the user to generate the identifying piece of information and set into the cookie.
// Cookie is the session, take the userId, find the user, set in on the req.session.
// Here, id is mongodbId.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Take the identifying piece of information from cookie, pass into 'deserializeUser' to turn it into a User.
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        googleID: profile.id,
        username: profile.displayName,
      }).save();
      done(null, user);
    }
  )
);
