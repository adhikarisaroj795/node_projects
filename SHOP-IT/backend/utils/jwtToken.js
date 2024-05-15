const sendToken = (user, statusCode, res, message) => {
  const token = user.getJwtToken();

  // Option for cookie
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE_TIME),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
    message: message,
  });
};

module.exports = sendToken;
