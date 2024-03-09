const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');

// router.get('/', (req, res) => {
//   res.status(200).send('welcome to my blog using router');
// });

router.route('/').get(authControllers.home);

router.route('/register').post(authControllers.register);

module.exports = router;
