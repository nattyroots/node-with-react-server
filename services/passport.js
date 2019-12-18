const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys/keys.js");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshTocken, profile, done) => {
      //console.log(accessToken, refreshTocken, profile, done);
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        console.log("user already exists");
        return done(null, existingUser);
      }
      console.log(
        `the user ${profile._raw} is new, creating record in users db for it`
      );
      const user = await new User({ googleID: profile.id }).save();
      done(null, user);
    }
  )
);
