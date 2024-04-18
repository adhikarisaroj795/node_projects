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
  //   updateOrderProcess = async (id, next) => {
  //     try {
  //       const order = await orderModel.findById(id);
  //       console.log(order);

  //       if (order.orderStatus === "Delivered") {
  //         throw new ErrorHandler("You have already delivered this product", 400);
  //       }

  //       for (const item of order.orderItems) {
  //         await this.updateStock(item.product, item.quantity);
  //       }
  //     } catch (error) {
  //       next(error); // Pass the error to the error handling middleware
  //     }
  //   };
}
module.exports = OrderService;
