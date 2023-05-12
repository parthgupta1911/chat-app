const dotenv = require("dotenv");
const app = require("./app");
dotenv.config();
const port = 2000 || process.env.PORT;
app.listen(port, () => {
  console.log("server ready");
});
