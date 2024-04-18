const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const orderModel = require("../models/order.model");
const OrderService = require("../services/order.service");
class OrderController {
  constructor() {
    this.odr_svc = new OrderService();
  }
  newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
      orderItems,
      shippingInfo,
      itemsPrice,
      shippingPrice,
      totalPrice,
      paymentInfo,
      taxPrice,
    } = req.body;
    const order = await orderModel.create({
      orderItems,
      shippingInfo,
      itemsPrice,
      shippingPrice,
      totalPrice,
      paymentInfo,
      taxPrice,
      paidAt: Date.now(),
      user: req.user._id,
    });
    res.status(200).json({
      sucess: true,
      order: order,
    });
  });
  getOrderbyId = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;
    const order = await this.odr_svc.getOrderDetails(id, next);
    if (!order) {
      res.status(400).json({
        sucess: false,
        msg: "no id found",
      });
    }

    res.status(200).json({
      sucess: true,
      result: order,
    });
  });
  //get logged in users order
  myOrders = catchAsyncErrors(async (req, res, next) => {
    const order = await this.odr_svc.myOrders(req);
    console.log(order);
    if (order.length === 0) {
      res.status(404).json({
        sucess: false,
        msg: "no order found",
      });
    }
    res.status(200).json({
      sucess: true,
      orderCount: order.length,
      order: order,
    });
  });
  //get all ordr /api/v1/auth/admin/order
  getAllOrders = catchAsyncErrors(async (req, res, next) => {
    const order = await this.odr_svc.getAllOrder();
    if (order.length === 0) {
      res.status(404).json({
        sucess: false,
        msg: "no order found",
      });
    }
    let totalAmount = 0;
    order.forEach((orders) => {
      totalAmount += orders.totalPrice;
    });
    res.status(200).json({
      sucess: true,
      totalAmount: totalAmount,
      orderCount: order.length,
      order: order,
    });
  });
}

module.exports = OrderController;
