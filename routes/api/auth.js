const express = require("express")

const router = express.Router()

const ctrl = require("../../controllers/auth")

router.post("/signup", ctrl.signup)

module.exports = router