const express = require("express")
const cors = require("cors")
require("dotenv").config()
const logger = require("morgan")

const app = express()

const formatsLogger = app.get("env") === "devalopment" ? "dev" : "short"

const authRouter = require("./routes/api/auth")

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRouter)

module.exports = app