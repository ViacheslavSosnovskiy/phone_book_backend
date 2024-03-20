const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

const authRouter = require("./routes/api/auth")

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRouter)

module.exports = app