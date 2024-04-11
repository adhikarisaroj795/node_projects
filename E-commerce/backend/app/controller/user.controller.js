const UserService = require('../services/user.services');
const AuthServices = require('../services/auth.service');
class UserController {
  user_svc;
  auth_svc;
  constructor() {
    this.user_svc = new UserService();
    this.auth_svc = new AuthServices();
  }

  userRegister = async (req, res, next) => {
    try {
      let data = req.body;
      let error_msgs = this.user_svc.validateRegister(data);
      if (req.file) {
        data['image'] = req.file.filename;
      }
      console.log('db', data);

      if (Object.keys(error_msgs).length !== 0) {
        return next({
          status_code: 400,
          msg: error_msgs,
        });
      } else {
        const response = await this.user_svc.userRegister(data);
        console.log('response', response);
        res.status(200).json({
          result: response,
          status: true,
          msg: 'user registered',
        });
      }
    } catch (error) {
      next({ status_code: 500, msg: error });
    }
  };

  listAllUsers = (req, res, next) => {
    // Your implementation to list all users
  };

  userLogin = async (req, res, next) => {
    let data = req.body;
    console.log('login', data);
    try {
      if (!data.username || !data.password) {
        next({ status_code: 400, msg: 'data requierd' });
      } else {
        const user = await this.auth_svc.login(data.username, data.password);

        res.status(200).json({
          result: user,
          msg: 'user logged in',
        });
      }
    } catch (error) {
      next({ status_code: 500, msg: error.message });
    }
  };
}

module.exports = UserController;
