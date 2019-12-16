if (process.env.NODE_ENV === "production") {
  console.log("this is production environment");
} else {
  console.log("this is dev environment");
  module.exports = require("./dev");
}
