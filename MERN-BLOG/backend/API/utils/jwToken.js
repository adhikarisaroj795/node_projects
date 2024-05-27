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

  res.status(statusCode).cookie("token", token, options).json({
    status: true,
    token,
    user,
    message: message,
  });
};

module.exports = sendToken;
