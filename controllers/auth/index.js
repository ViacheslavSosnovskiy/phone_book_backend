// const googleAuth = require("./googleAuth")
// const googleRedirect = require("./googleRedirect")
const signup = require("./signup");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");
const signin = require("./signin");
const getCurrent = require("./getCurrent");
const signout = require("./signout");
const updateAvatar = require("./updateAvatar");

const { ctrlWrapper } = require("../../helpers");

module.exports = {
  // googleAuth: ctrlWrapper(googleAuth),
  // googleRedirect: ctrlWrapper(googleRedirect),
  signup: ctrlWrapper(signup),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
  signin: ctrlWrapper(signin),
  getCurrent: ctrlWrapper(getCurrent),
  signout: ctrlWrapper(signout),
  updateAvatar: ctrlWrapper(updateAvatar),
};
