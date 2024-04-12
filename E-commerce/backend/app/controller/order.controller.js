const { generateRandomString } = require('../../config/helpers');
const orderModel = require('../model/order.model');

class OrderController {
  createOrder = async (req, res, next) => {
    console.log(req.body);
    let cart = req.body;
    let order_id = generateRandomString(10);
    let all_order = [];
    cart.map((item) => {
      let cart_ind = {
        order_id: order_id,
        order_by: req.auth_user._id,
        product: item.product_id,
        qty: item.qty,
        sub_amount: item.total_amount,
        discount: 0,
        total_amount: item.total_amount,
        status: 'new',
      };
      all_order.push(cart_ind);
    });
    let result = await orderModel.insertMany(all_order);
    res.json({
      result: all_order,
      status: true,
      msg: 'your order placed sucessfully',
    });
  };
}
module.exports = OrderController;
