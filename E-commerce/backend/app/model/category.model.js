const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    parent: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
    },
    brand: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Label',
      },
    ],
  },
  {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }
);

const categoryModel = mongoose.model('Category', categorySchema);
module.exports = categoryModel;
