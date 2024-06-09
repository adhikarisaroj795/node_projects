const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    refer: "Categorie",
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    refer: "User",
  },
});

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
