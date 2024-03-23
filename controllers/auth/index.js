const signup = require("./signup")
const signin = require("./signin")

const {ctrlWrapper} = require("../../helpers")

module.exports = {
    signup: ctrlWrapper(signup),
    signin: ctrlWrapper(signin),
}   