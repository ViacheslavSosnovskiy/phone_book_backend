const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);

  if (!contact) {
    throw HttpError(404, "Contact not found");
  }

  res.status(200).json({
    contact,
    message: "Contact was found successfully",
  });
};

module.exports = getContactById;
