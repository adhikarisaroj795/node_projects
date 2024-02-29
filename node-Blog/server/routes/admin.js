const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

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

module.exports = router;
