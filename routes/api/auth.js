const express = require("express");

const ctrl = require("../../controllers/auth");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

// router.get("/google", ctrl.googleAuth)
// router.get("/google-redirect", ctrl.googleRedirect)

router.post("/signup", validateBody(schemas.registerSchema), ctrl.signup);

router.get("/verify/:verificationCode", ctrl.verifyEmail);

router.post("/verify", validateBody(schemas.emailSchema), ctrl.resendVerifyEmail);

router.post("/signin", validateBody(schemas.loginSchema), ctrl.signin);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/signout", authenticate, ctrl.signout);

router.patch("/avatar", authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;
