const sendToken = (user, statusCode, res, message) => {
  const token = user.getJwtToken();

  const cookieExpireTimeInDays = parseInt(process.env.COOKIE_EXPIRE_TIME, 10);
  const cookieExpireTimeInMiliS = cookieExpireTimeInDays * 24 * 60 * 60 * 1000;
  const expireDate = new Date(Date.now() + cookieExpireTimeInMiliS);

  const isProduction = process.env.NODE_ENV === "production";
  const options = {
    expires: expireDate,
    httpOnly: true,
    sameSite: "Lax",
    secure: isProduction,
  };

  const { password, ...rest } = user._doc;
  console.log(token);

  res.status(statusCode).cookie("token", token, options).json({
    status: true,
    token,
    user: rest,
    message: message,
  });
};

module.exports = sendToken;
