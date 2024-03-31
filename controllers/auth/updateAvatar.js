const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../models/user");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { originalname, path: tempUpload } = req.file;

  const filename = `${_id}_${originalname}`;

  const avatarDir = path.join(__dirname, "../", "../", "public", "avatars");

  const resultUpload = path.join(avatarDir, filename);

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", filename);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
    message: "The avatar has been successfully changed",
  });
};

module.exports = updateAvatar;
