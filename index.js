const express = require("express");
const mongoose = require("mongoose");
require("./services/passport");
const keys = require("./config/keys/keys");
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();
require("./routs/authRoutes")(app);

const PORT = process.env.PORT || 50000;
app.listen(PORT);
