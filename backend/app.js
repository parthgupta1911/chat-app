const express = require("express");
const cors = require("cors");
const authenticateRouter = require("./routers/authenticateRouter.js");
const AppError = require("./models/errorClass.js");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/authenticate", authenticateRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`this route is not defined ${req.originalUrl}`, 404));
});
module.exports = app;
