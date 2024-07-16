const sendToken = (user, statusCode, res, message) => {
  const token = user.getJwtToken();

  const cookieExpiresTimeInDays = parseInt(process.env.COOKIE_EXPIRE_TIME, 10);
  const cookieExpireTimeInMilis = cookieExpiresTimeInDays * 24 * 60 * 60 * 1000;
  const expireDate = new Date(Date.now() + cookieExpireTimeInMilis);

  const isProduction = process.env.NODE_ENV === "PRODUCTION";

  const options = {
    expires: expireDate,
    httpOnly: true,
    sameSite: "Lax",
    secure: isProduction,
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
