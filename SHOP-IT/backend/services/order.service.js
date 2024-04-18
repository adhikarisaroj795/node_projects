const orderModel = require("../models/order.model");
const productModel = require("../models/product.model");
const ErrorHandler = require("../utils/error.handler");
class OrderService {
  getOrderDetails = async (id, next) => {
    try {
      const order = await orderModel
        .findById(id)
        .populate("user", "name email");

      return order;
    } catch (error) {
      console.log(error);
    }
  };

  myOrders = async (req) => {
    const order = await orderModel.find({ user: req.user.id });
    return order;
  };
  getAllOrder = async () => {
    return await orderModel.find();
  };
}
module.exports = OrderService;
