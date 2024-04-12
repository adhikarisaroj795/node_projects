const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema(
  {
    order_id: {
      type: String,
      required: true,
    },
    order_by: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      min: 1,
    },
    sub_amount: {
      type: Number,
      required: true,
      min: 1,
    },
    discount: {
      type: Number,
      default: 0,
    },
    total_amount: {
      type: Number,
      required: true,
      min: 1,
    },
    status: {
      type: String,
      enum: ['new', 'verified', 'cancelled', 'deliverd'],
      default: 'new',
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }
);

const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;
