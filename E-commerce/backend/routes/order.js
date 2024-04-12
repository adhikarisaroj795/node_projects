const express = require('express');
const router = express.Router();
const loginCheck = require('../app/middleware/loginmiddleware');
const OrderController = require('../app/controller/order.controller');
const order_ctrl = new OrderController();
router
  .route('/')
  .get((req, res, next) => {
    res.json({ msg: 'hello-world' });
  })
  .post(loginCheck, order_ctrl.createOrder);

router
  .route('/:id')
  .get(loginCheck, (req, res, next) => {})
  .patch((req, res, next) => {});

module.exports = router;
