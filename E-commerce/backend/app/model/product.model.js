const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    slug: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      index: true,
    },
    description: {
      type: String,
      index: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    price: {
      type: String,
      required: true,
      min: 1,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    after_discount: {
      type: String,
      required: true,
      min: 1,
    },
    brand: {
      type: mongoose.Types.ObjectId,
      ref: 'Label',
      default: null,
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
    seller: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    images: [string],
    status: {
      type: String,
      enum: ['active, inactive'],
      default: 'inactive',
    },
    meta: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }
);

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;
