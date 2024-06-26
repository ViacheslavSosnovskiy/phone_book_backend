const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const authRouter = require("./routes/api/auth");
const contactRouter = require("./routes/api/contacts");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
