const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys/keys.js");
const mongoose = require("mongoose");

const User = mongoose.model("users");
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshTocken, profile, done) => {
      //console.log(accessToken, refreshTocken, profile, done);
      new User({ googleID: profile.id }).save();
    }
  )
);
