const { HttpError } = require("../helpers");

const validate = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw HttpError(400, message.error);
    }
    next();
  };
};
