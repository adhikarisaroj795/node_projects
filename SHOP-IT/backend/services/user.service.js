const userModel = require("../models/user.model");
const ErrorHandler = require("../middlewares/error.middleware");
class UserService {
  registerUser = async (name, email, password) => {
    console.log(name, email, password);

    try {
      const user = await userModel.create({
        name,
        email,
        password,
        avtar: {
          public_id: "avatars/ksdgdgdgdsgsdvk",
          url: "https://res.cloudinary.com/shopit/image/uploads/avatars/ksdgdgdgdsgsdvk",
        },
      });
      console.log(user);
      return user;
    } catch (error) {
      console.log(error.message);
    }
  };
}
module.exports = UserService;
