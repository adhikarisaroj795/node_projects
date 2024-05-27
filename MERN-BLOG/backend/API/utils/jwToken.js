const sendToken = (user, statusCode, res, message) => {
  const token = user.getJwtToken();

  const cookieExpireTimeInDays = parseInt(process.env.COOKIE_EXPIRE_TIME, 10);
  const cookieExpireTimeInMiliS = cookieExpireTimeInDays * 24 * 60 * 60 * 1000;
  const expireDate = new Date(Date.now() + cookieExpireTimeInMiliS);

  const options = {
    expires: expireDate,
    httpOnly: true,
    sameSite: "None",
    secure: true,
  };

  const { password, ...rest } = user._doc;

  res.status(statusCode).cookie("access_token", token, options).json({
    status: true,
    token,
    user: rest,
    message: message,
  });
};

module.exports = sendToken;
