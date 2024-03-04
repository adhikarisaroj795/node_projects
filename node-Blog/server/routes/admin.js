const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminLayout = '../views/layouts/admin';

/**
 * GET /
 * Admin - Login Page
 */

router.get('/admin', async (req, res) => {
  try {
    const locals = {
      title: 'Admin',
      description: 'simple blog created with nodejs',
    };
    res.render('admin/index', { locals, layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
});
/**
 * POST /
 * ADMIN - check Login
 */

router.post('/admin', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    console.log(username, password);
    if (req.body.username === 'admin' && req.body.password === 'password') {
      res.send('you are logged in');
    } else {
      res.send('wrong username');
    }
  } catch (error) {
    console.log(error);
  }
});

/**
 * POST /
 * ADMIN - Register
 */

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await User.create({ username, password: hashedPassword });
      res.status(201).json({ message: 'user created', user });
    } catch (error) {
      if (error.code === 11000) {
        res.status(409).json({ message: 'user alreaddy in use' });
      }
      res.status(500).json({ message: 'internal server error' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
