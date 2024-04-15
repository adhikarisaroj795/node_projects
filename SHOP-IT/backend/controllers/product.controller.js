const ProductService = require("../services/product.service");
const ErrorHandler = require("../utils/error.handler");
const catchAsyncError = require("../middlewares/catchAsyncErrors");

class ProductController {
  constructor() {
    this.prod_svc = new ProductService();
  }
  //* Add products to the database
  addNewProduct = catchAsyncError(async (req, res, next) => {
    let data = req.body;
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
  getProducts = catchAsyncError(async (req, res, next) => {
    let products = await this.prod_svc.getAllProducts();

    res.status(200).json({
      count: products.length,
      sucess: true,
      message: "Product fetched Sucessfully",
      result: products,
    });
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
