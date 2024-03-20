const { z } = require('zod');

const validateSong = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    console.log(err);
    const status = 400;
    const message = 'Fill the input properly';
    const extraDetails = err.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };
    next(error);
  }
};

module.exports = validateSong;
