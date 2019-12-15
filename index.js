const express = require("express");
require("./models/User")
require("./services/passport");
const mongoose = require("mongoose");
const keys = require("./config/keys/keys");

const app = express();

require("./routs/authRoutes")(app);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const PORT = process.env.PORT || 50000;
app.listen(PORT);
