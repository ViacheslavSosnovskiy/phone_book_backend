const Joi = require("joi");
const {Schema, model } = require("mongoose")

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: emailRegexp,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
}, {versionKey: false, timestamps: true})

// userSchema.post("save",)

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const schemas = {
    registerSchema
}

const User = model("user", userSchema)

module.exports = {
    User,
    schemas,
}



