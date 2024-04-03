const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      // match:
    },
    email: {
      type: String,
      required: true,
      match: emailRegexp,
      unique: true,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const schemaContacts = Joi.object({
  name: Joi.string().required(),
  phone: Joi.number().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  avatarURL: Joi.string().required(),
});

const schemas = {
  schemaContacts,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
