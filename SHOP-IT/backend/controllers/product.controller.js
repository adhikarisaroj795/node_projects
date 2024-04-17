const ProductService = require("../services/product.service");
const ErrorHandler = require("../utils/error.handler");
const catchAsyncError = require("../middlewares/catchAsyncErrors");

const productModel = require("../models/product.model");

class ProductController {
  constructor() {
    this.prod_svc = new ProductService();
  }

  //* Add products to the database
  addNewProduct = catchAsyncError(async (req, res, next) => {
    let data = req.body;
    req.body.user = req.user.id;

    let product = await this.prod_svc.createNewProduct(data);
    if (product) {
      res.status(201).json({
        sucess: true,
        result: product,
        msg: "Product created Sucessfuly",
      });
    }
  });
  //* Get All products from the database
  // /api/v1/product?keyword=apple
  getProducts = catchAsyncError(async (req, res, next) => {
    try {
      // Check if req.query and req.query.keyword are defined before accessing them
      // const keyword = req.query?.keyword || ""; // If req.query or req.query.keyword is undefined, set keyword to an empty string
      // console.log(keyword);

      console.log("hello 2");
      let products = await this.prod_svc.getAllProducts(req.query);
      const productCount = await productModel.countDocuments();
      res.status(200).json({
        count: products.length,
        productCount,
        success: true,
        message: "Products fetched successfully",
        result: products,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching products",
      });
    }
  });

  //* Get single product by id
  getProductById = async (req, res, next) => {
    try {
      let product = await this.prod_svc.getProductbyId(req.params.id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "No product found",
        });
      } else {
        res.status(200).json({
          status: true,
          message: "single product fetched Sucessfully",
          result: product,
        });
      }
    } catch (error) {
      next(error);
    }
  };
  //* update Product by id
  updateProductbyId = async (req, res, next) => {
    try {
      let data = req.body;
      let updatedProduct = await this.prod_svc.updateProduct(
        req.params.id,
        data
      );
      if (!updatedProduct) {
        return res.status(404).json({
          status: false,
          message: "no product found",
        });
      }
      res.status(201).json({
        sucess: true,
        result: updatedProduct,
        msg: "Product created Sucessfuly",
      });
    } catch (error) {
      console.log("error updating product", error);
    }
  };

  //* delete product by id
  deleteProductById = catchAsyncError(async (req, res, next) => {
    let deletedItem = await this.prod_svc.deleTeProduct(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({
        status: false,
        message: "no data to delete",
      });
    }
    res.status(200).json({
      status: true,
      data: deletedItem,
      message: "item deleted sucess",
    });
  });
}

module.exports = ProductController;
