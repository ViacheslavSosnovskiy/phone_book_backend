const { HttpError, createMailOptions, transport } = require("../../helpers");
const { User } = require("../../models/user");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email not found");
  }

  if (user.verify) {
    throw HttpError(401, "Email already verified");
  }

  const resendVerifiationCode = createMailOptions(
    user.email,
    user.verificationCode
  );

  await transport.sendMail(resendVerifiationCode);

  res.json({
    message: "Email verification sent successfully",
  });
};

module.exports = resendVerifyEmail;
