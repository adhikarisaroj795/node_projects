const sendToken = (user, statusCode, res, message) => {
  const token = user.getJwtToken();

  //option for cookie
  const COOKIE_EXPIRES_TIME = process.env.COOKIE_EXPIRES_TIME || 7;
  const options = {
    expires: new Date(Date.now() + COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    sucess: true,
    token,
    user,
    message: message,
  });
};

module.exports = sendToken;
