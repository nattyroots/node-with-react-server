const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys/keys");
require("./models/User")
require("./services/passport");

const app = express();
require("./routs/authRoutes")(app);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const PORT = process.env.PORT || 50000;
app.listen(PORT);
