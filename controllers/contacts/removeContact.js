const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);

  if (!result) {
    throw HttpError(404, "Contact not found");
  }

  res.status(204);
};

module.exports = removeContact;
