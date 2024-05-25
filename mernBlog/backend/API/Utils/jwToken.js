const sendToken = (user, statusCode, res, message) => {
  const token = user.getJwtToken();

  // Convert cookie_expire_time from days to milliseconds
  const cookieExpireTimeInDays = parseInt(process.env.COOKIE_EXPIRE_TIME, 10);
  const cookieExpireTimeInMillis = cookieExpireTimeInDays * 24 * 60 * 60 * 1000; // Convert days to milliseconds
  const expireDate = new Date(Date.now() + cookieExpireTimeInMillis);

  const options = {
    expires: expireDate,
    httpOnly: true,
    sameSite: "None", // Ensure cross-site context compliance
    secure: true, // Ensure the cookie is only sent over HTTPS
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
    message: message,
  });
};

module.exports = sendToken;
