const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const orderModel = require("../models/order.model");
const productModel = require("../models/product.model");
const OrderService = require("../services/order.service");
const ErrorHandler = require("../utils/error.handler");
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
  //update / process ordr /api/v1/auth/admin/order/:id
  updateOrderProcess = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;
    const order = await orderModel.findById(id);

    if (order.orderStatus === "Delivered") {
      throw new ErrorHandler("You have already delivered this product", 400);
    }

    for (const item of order.orderItems) {
      await this.updateStock(item.product, item.quantity);
    }

    order.orderStatus = req.body.status;
    order.deliveredAt = Date.now();
    await order.save();
    res.status(200).json({
      sucess: true,
    });
  });
  async updateStock(id, quantity) {
    const product = await productModel.findById(id);
    product.stock = product.stock - quantity;
    await product.save({ validateBeforeSave: false });
  }
  //Delete order => /api/v1/auth/admin/order/:id
  deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await orderModel.findByIdAndDelete(req.params.id);

    if (!order) {
      return next(new ErrorHandler("No order found", 404));
    }

    res.status(200).json({
      success: true,
      order,
    });
  });
}

module.exports = OrderController;
