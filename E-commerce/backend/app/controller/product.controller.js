const productModel = require('../model/product.model');
const ProductService = require('../services/product.service');
const slugify = require('slugify');

class productController {
  constructor() {
    this.prod_svc = new ProductService();
  }
  uniqueSlug = async (slug) => {
    try {
      let result = await productModel.findOne({
        slug: slug,
      });
      if (result) {
        slug = Date.now() + '-' + slug;
        return await this.uniqueSlug(slug);
      } else {
        return slug;
      }
    } catch (error) {
      throw error;
    }
  };
  addProduct = async (req, res, next) => {
    try {
      let data = req.body;

      let validation = this.prod_svc.validateProductData(data);
      if (validation) {
        throw validation;
      } else {
        // Generate slug only if title is provided
        let slug = data.title ? slugify(data.title) : null;
        if (slug) {
          slug = await this.uniqueSlug(slug);
        } else {
          slug = 'default-slug'; // or any default value
        }
        data.slug = slug;
        console.log('slug', slug);

        // Calculate after_discount
        data.after_discount = parseFloat(
          (data.price - (data.price * data.discount) / 100).toFixed(2)
        );
        if (isNaN(data.after_discount)) {
          data.after_discount = 0; // or any default value
        }

        // Handle brand null case
        if (!data.brand || data.brand === 'null') {
          data.brand = null;
        }

        // Handle file uploads
        if (req.files) {
          let images = req.files.map((image) => image.filename);
          data.images = images;
        }
        console.log(data);

        // Add product
        let result = await this.prod_svc.addProduct(data);
        if (result) {
          res.json({
            result: data,
            status: true,
            msg: 'product created successfully',
          });
        } else {
          next({
            status_code: 400,
            msg: 'problem while creating the product',
          });
        }
      }
    } catch (error) {
      console.log('product add', error);
      next({
        status_code: 400,
        msg: error,
      });
    }
  };
  getAllProducts = async (req, res, next) => {
    try {
      const result = await this.prod_svc.getAllProduct();
      res.json({
        result: result,
        msg: 'product fetched sucesss',
      });
    } catch (error) {
      next({
        status_code: 400,
        msg: error,
      });
    }
  };
  updateProduct = async (req, res, next) => {
    try {
      let data = req.body;

      let validation = this.prod_svc.validateProductData(data);
      if (validation) {
        throw validation;
      } else {
        // Generate slug only if title is provided
        // let slug = data.title ? slugify(data.title) : null;
        // if (slug) {
        //   slug = await this.uniqueSlug(slug);
        // } else {
        //   slug = 'default-slug'; // or any default value
        // }
        // data.slug = slug;
        // console.log('slug', slug);

        // Calculate after_discount
        data.after_discount = parseFloat(
          (data.price - (data.price * data.discount) / 100).toFixed(2)
        );
        if (isNaN(data.after_discount)) {
          data.after_discount = 0; // or any default value
        }

        // Handle brand null case
        if (!data.brand || data.brand === 'null') {
          data.brand = null;
        }

        // Handle file uploads
        if (req.files) {
          let images = req.files.map((image) => image.filename);
          data.images = images;
        }
        console.log(data);

        // Add product
        let result = await this.prod_svc.updateProduct(data, req.params.id);
        if (result) {
          res.json({
            result: data,
            status: true,
            msg: 'product updated successfully',
          });
        } else {
          next({
            status_code: 400,
            msg: 'problem while updating the product',
          });
        }
      }
    } catch (error) {
      console.log('product add', error);
      next({
        status_code: 400,
        msg: error,
      });
    }
  };

  deleteImage = async (req, res, next) => {
    try {
      let product_id = req.params.id;
      let image_name = req.params.image_name;

      // Get the product details
      let product = await this.prod_svc.getAllProductDetail(product_id);

      // Filter out the image with the specified name
      let updatedImages = product.images.filter(
        (image) => image !== image_name
      );

      // Update the product with the filtered images
      product.images = updatedImages;
      await this.prod_svc.updateProduct(product, product_id);

      // Respond with success message
      res.json({
        result: product,
        status: true,
        msg: 'Image deleted successfully',
      });
    } catch (error) {
      // Handle errors
      next({
        status_code: 400,
        msg: error.message,
      });
    }
  };
  deleteProduct = async (req, res, next) => {
    try {
      let del = await this.prod_svc.deleteProductByid(req.params.id);
      if (del) {
        res.json({
          result: null,
          status: true,
          msg: 'product deleted sucess',
        });
      }
    } catch (error) {
      next({
        status_code: 400,
        msg: error,
      });
    }
  };
  getProductById = async (req, res, next) => {
    try {
      let prod = await this.prod_svc.getAllProductDetail(req.params.id);
      if (prod) {
        res.json({
          result: prod,
          status: true,
          msg: 'product detail fetch sucess',
        });
      }
    } catch (error) {
      next({
        status_code: 400,
        msg: error,
      });
    }
  };
}
module.exports = productController;
