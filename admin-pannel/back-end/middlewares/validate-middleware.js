const { z } = require('zod');

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    console.log(err);
    const status = 400;
    const message = 'Fill the input porperly';
    const extraDetails = err.errors[0].message;
    // res.status(400).json({ msg: message });

    const error = {
      status,
      message,
      extraDetails,
    };
    next(error);
  }
};

module.exports = validate;
