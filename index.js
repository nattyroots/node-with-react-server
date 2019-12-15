const express = require("express");
require("./services/passport");
const app = express();
//require("./routs/authRoutes")(app);

const PORT = process.env.PORT || 50000;
app.listen(PORT);
