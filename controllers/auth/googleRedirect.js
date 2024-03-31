// const queryString = require("query-string")
// const URL = require("url")
const axios = require("axios");

const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, BASE_URL, FRONTEND_URL } =
  process.env;

const googleRedirect = async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = queryString.parse(urlObj.search);

  const code = urlParams.code;
  if (!code || code === undefined) {
    throw HttpError(409);
  }

  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: "post",
    data: {
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: `${BASE_URL}/api/auth/google-redirect`,
      grant_type: "authorization_code",
      code,
    },
  });

  const userData = await axios({
    url: "https://www.googleapis.com/oauth2/v2/userinfo",
    method: "get",
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`,
    },
  });

  const user = await User.findOne(userData.data.email);

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  return res.redirect(`${FRONTEND_URL}?accessToken=${userData.data.token}`);
};
module.exports = googleRedirect;
