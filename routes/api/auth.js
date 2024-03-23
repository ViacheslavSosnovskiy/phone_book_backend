const express = require("express")

const router = express.Router()

const ctrl = require("../../controllers/auth")
const { validateBody } = require("../../middlewares")
const { schemas } = require("../../models/user")

router.post("/signup", validateBody(schemas.registerSchema), ctrl.signup)

router.post("/singin", validateBody(schemas.loginSchema), ctrl.signin)

module.exports = router 