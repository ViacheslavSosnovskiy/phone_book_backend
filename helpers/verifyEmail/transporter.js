const nodemailer = require("nodemailer");

const { META_EMAIL, META_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: META_EMAIL,
    pass: META_PASSWORD,
  },
});

module.exports = transport;
