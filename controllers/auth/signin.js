const { HttpError } = require("../../helpers")
const { User } = require("../../models/auth")

const signin = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if (!user) {
        throw HttpError(401, "Email or password are invalid")
    }

    res.json({
        email,
    })
}