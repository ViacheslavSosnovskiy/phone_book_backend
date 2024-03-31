const { META_EMAIL, BASE_URL } = process.env;

const createMailOptions = (userEmail, verificationCode) => {
  return {
    from: META_EMAIL,
    to: userEmail,
    subject: "Verify your email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationCode}">Click here to verify your email</a>`,
  };
};

module.export = createMailOptions;
