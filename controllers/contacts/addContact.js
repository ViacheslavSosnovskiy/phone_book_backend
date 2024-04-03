const { Contact } = require("../../models/contact");
const gravatar = require("gravatar");

const addContact = async (req, res) => {
  const { _id: owner, email } = req.user;

  const avatarURL = gravatar.url(email);

  const newContact = await Contact.create({ owner, ...req.body, avatarURL });

  res.status(201).json({
    newContact,
    message: "Contact added successfully",
  });
};

module.exports = addContact;
