const sendToken = (user, statusCode, res, message) => {
  const token = user.getJwtToken();
  const cookieExpiresTime = parseInt(process.env.COOKIE_EXPIRE_TIME);
  const expireDate = new Date(Date.now() + cookieExpiresTime);

  const options = {
    expires: expireDate,
    httpOnly: true,
    secure: process.env.NODE_ENV === "PRODUCTION",
  };

  const { password, ...rest } = user._doc;

  res.status(statusCode).cookie("token", token, options).json({
    status: true,
    token,
    user: rest,
    msg: message,
  });
};

module.exports = sendToken;
