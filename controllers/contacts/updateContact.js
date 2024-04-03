const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(400, error.message);
  }

  res.json({
    result,
    message: "Contact was updated successfully",
  });
};

module.exports = updateContact;
