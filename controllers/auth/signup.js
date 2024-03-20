const { User } = require("../../models/auth")
const {HttpError} = require("../../helpers")

const signup = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if (user) {
        throw HttpError(409, "Email already in use")
    }

    const newUser = await User.create({...req.body})

    res.status(201).json({
        name: newUser.name,
        message: "Success"
    })

}

module.exports = signup