const bcrypt = require("bcrypt")

const { User } = require("../../models/user")
const {HttpError} = require("../../helpers")

const signup = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if (user) {
        throw HttpError(409, "Email already in use")
    }

    const hashPassword = await bcrypt.hash(password, 10)
    console.log("createHashPassword:", hashPassword)

    // const comparePassword = await bcrypt.compare(password, createHashPassword)

    const newUser = await User.create({...req.body, password: hashPassword})

    res.status(201).json({
        name: newUser.name,
        message: "Success",
        password: newUser.password
    })

}

module.exports = signup