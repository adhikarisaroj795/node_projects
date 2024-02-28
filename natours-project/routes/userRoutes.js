const express = require('express');
const { route } = require('./tourRoutes');
const userController = require('./../Controllers/userController');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log(`hello Tour id is : ${val}`);
  next();
});

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUsers);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
