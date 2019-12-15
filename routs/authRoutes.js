const passport = require("passport");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("hi");
  });
  app.get("/auth/google/callback", passport.authenticate("google"));
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
};
