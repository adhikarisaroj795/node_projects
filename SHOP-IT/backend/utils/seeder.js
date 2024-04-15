const productModel = require("../models/product.model");
const path = require("path");
const envPath = path.join(__dirname, "..", "config", "config.env");

require("dotenv").config({ path: envPath });
const conntectDb = require("../config/db.config");

const products = require("../data/product");

//* setting dotenv file

conntectDb();

const seedProducts = async () => {
  try {
    await productModel.deleteMany();
    console.log("products are deleted");
    await productModel.insertMany(products);
    console.log("All products are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
