const express = require("express");
require("./models/User");
require("./services/passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const PORT = process.env.PORT || 50000;
app.listen(PORT);
