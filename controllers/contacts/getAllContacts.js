const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
//   const { page, limit } = req.query;
//   const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "-updateAt", {skip, limit,}).populate("owner", "name email");

  if (!result) {
    throw HttpError(409);
  }

  res.json(result);
};

module.exports = getAllContacts;
