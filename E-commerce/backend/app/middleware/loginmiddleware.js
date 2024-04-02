const loginCheck = (req, res, next) => {
  let is_logged_in = false;

  if (is_logged_in) {
    next();
  } else {
    next({
      status_code: 401,
      msg: "unauthenticated",
    });
  }
};

module.exports = loginCheck;
