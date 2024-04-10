const CategoryService = require('../services/category.service');
const slugify = require('slugify');
class categoryController {
  constructor() {
    this.cat_svc = new CategoryService();
  }
  createCategory = async (req, res, next) => {
    try {
      let data = req.body;
      console.log(data);
      let error = this.cat_svc.validateCategoryData(data);

      if (error) {
        next({
          status_code: 400,
          msg: error,
        });
      } else {
        if (req.file) {
          data.image = req.file.filename;
        }
        if (!data.parent || data.parent === 'null') {
          data.parent = null;
        }

        //slug
        data.slug = slugify(data.title, {
          lower: true,
          replacement: '-',
        });
        let result = await this.cat_svc.addCategory(data);
        if (result) {
          res.json({
            result: result,
            status: true,
            msg: 'category created sucessfully',
          });
        } else {
          next({
            status_code: 400,
            msg: 'sorry there was problem creating category',
          });
        }
      }
    } catch (error) {
      console.error('CategoryCreate: ', error);
      next({
        status_code: 400,
        msg: error.message,
      });
    }
  };
  updateCategory = async (req, res, next) => {
    try {
      let data = req.body;
      console.log(data);
      let error = this.cat_svc.validateCategoryData(data);

      if (error) {
        next({
          status_code: 400,
          msg: error,
        });
      } else {
        if (req.file) {
          data.image = req.file.filename;
        }
        if (!data.parent || data.parent === 'null') {
          data.parent = null;
        }

        let result = await this.cat_svc.updateCategory(data, req.params.id);
        if (result) {
          res.json({
            result: result,
            status: true,
            msg: 'category updated sucessfully',
          });
        } else {
          next({
            status_code: 400,
            msg: 'sorry there was problem updating category',
          });
        }
      }
    } catch (error) {
      console.error('Categoryupdate: ', error);
      next({
        status_code: 400,
        msg: error.message,
      });
    }
  };
  getAllCats = async (req, res, next) => {
    try {
      let result = await this.cat_svc.getAllCategory();
      console.log(result);
      res.json({
        result: result,
        status: true,
        msg: 'category fetched sucessfully',
      });
    } catch (error) {
      console.error('CategoryList: ', error);
      next({
        status_code: 400,
        msg: error,
      });
    }
  };
  getCategoryDetails = async (req, res, next) => {
    try {
      let result = await this.cat_svc.getAllCategoryDetail(req.params.id);

      res.json({
        result: result,
        status: true,
        msg: 'categorydetail fetched sucessfully',
      });
    } catch (error) {
      console.error('CategoryList: ', error);
      next({
        status_code: 400,
        msg: error,
      });
    }
  };

  deleteCategoryByid = async (req, res, next) => {
    try {
      let result = await this.cat_svc.deleteCategoryByid(req.params.id);

      res.json({
        result: null,
        status: true,
        msg: 'category deleted sucessfully',
      });
    } catch (error) {
      console.error('categorydelete: ', error);
      next({
        status_code: 400,
        msg: error,
      });
    }
  };
}
module.exports = categoryController;
