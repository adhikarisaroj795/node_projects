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
    res.status(201).send({
      message: 'registration sucessfull',
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(400).send({ message: 'error' });
  }
};

//User login Logic

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: 'invalid credentials' });
    }
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).json({
        msg: 'login sucess',
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: 'invalid email or password' });
    }
  } catch (error) {
    next(error);
  }
};

//to send user data -user logic

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log('error from the user route', error);
  }
};

module.exports = { home, register, login, user };
