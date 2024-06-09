const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
title: {
    type: String
},

});

const categoryModel = mongoose.model("Categorie", categorySchema);

module.exports = categoryModel;
