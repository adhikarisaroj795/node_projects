const User = require('../models/user-model');
const bcrypt = require('bcrypt');

const home = async (req, res) => {
  try {
    res.status(200).send('welcome to my imagination world');
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: 'email already exist' });
    }
    //hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(200).send({ message: userCreated });
  } catch (error) {
    res.status(400).send({ message: 'error' });
  }
};

module.exports = { home, register };
