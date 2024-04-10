const productModel = require('../model/product.model');
const ProductService = require('../services/product.service');
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
        slug = now() + '-' + slug;
        throw slug;
      } else {
        return slug;
      }
    } catch (new_slug) {
      this.uniqueSlug(new_slug);
    }
  };
  addProduct = (req, res, next) => {
    try {
      let data = req.body;
      let validation = this.prod_svc.validateProductData(data);
      if (validation) {
        throw validation;
      } else {
        //data entry
        let slug = slugify(data.title);
        slug = this.uniqueSlug(slug);
        data.after_discount = data.price - (data.price * data.discout) / 100;
        if (!data.brand || data.brand === 'null') {
          data.brand = null;
        }
        if (req.file) {
          let images = [];
          req.files.map((image) => {
            images.push(image.filename);
          });
          data.images = images;
        }
        let result = this.prod_svc.addProduct(data);
        if (result) {
          res.json({
            result: data,
            status: true,
            msg: 'product created sucessfully',
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
}
module.exports = productController;
