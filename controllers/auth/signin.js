const bcrypt = required("bcrypt")

const { HttpError } = require("../../helpers")
const { User } = require("../../models/user")

const signin = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if (!user) {
        throw HttpError(401, "Email or password are invalid")
    }

    const comparePassword = bcrypt.compare(password, user.password)
    if(!comparePassword || user.email) {
        throw HttpError(401, "Email or password are invalid")
    }

    res.json({
        email,
    })
}