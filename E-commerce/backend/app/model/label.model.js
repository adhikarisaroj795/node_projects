const mongoose = require("mongoose");
const labelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["banner", "brand"],
      default: "banner",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
  }
);

const labelModel = mongoose.model("Label", labelSchema);
module.exports = labelModel;
