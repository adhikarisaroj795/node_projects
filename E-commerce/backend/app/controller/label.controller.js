const LabelService = require("../services/label.service");
class LabelController {
  Lbl_svc;
  constructor() {
    this.Lbl_svc = new LabelService();
  }
  store = async (req, res, next) => {
    let data = req.body;
    console.log(data);
    let validation = this.Lbl_svc.validateLabel(req.body, req.file);
    console.log("from validation", validation);
    //banner, brandas
    if (validation) {
      next({
        status_code: 400,
        msg: validation,
      });
    } else {
      try {
        data.image = req.file.filename;
        let sucess = await this.Lbl_svc.labelCreate(data);
        console.log(sucess);
        res.json({
          result: sucess,
          status: true,
          msg: "label created",
        });
      } catch (error) {
        console.error("LabelCreate", error);

        next({
          status_code: 400,
          msg: error,
        });
      }
    }
  };

  update = async (req, res, next) => {
    let data = req.body;
    console.log(data);

    let validation = this.Lbl_svc.validateLabel(req.body, req.file);
    if (validation.image) {
      delete validation.image;
    }
    //banner, brandas
    if (Object.keys(validation).length > 0) {
      next({
        status_code: 400,
        msg: validation,
      });
    } else {
      try {
        if (req.file) {
          data.image = req.file.filename;
        }
        let id = req.params.id;
        console.log(id);

        let sucess = await this.Lbl_svc.labelUpdate(data, id);
        console.log("from update", sucess);
        res.json({
          result: data,
          status: true,
          msg: "label Updated",
        });
      } catch (error) {
        console.error("LabelUpdate", error);

        next({
          status_code: 400,
          msg: error,
        });
      }
    }
  };

  getAllLabels = async (req, res, next) => {
    try {
      let data = await this.Lbl_svc.getLabels();
      res.json({
        result: data,
        status: true,
        msg: "label fetched sucessfully",
      });
    } catch (error) {
      console.error("labelFetch", error);
      next({
        status_code: 400,
        msg: error.message,
      });
    }
  };

  deleteLabelById = async (req, res, next) => {
    try {
      let data = await this.Lbl_svc.deleteById(req.params.id);
      res.json({
        result: null,
        status: true,
        msg: "Label Deleted Sucessfully",
      });
    } catch (error) {
      console.error("LabelDelete:", error);
      next({
        status_code: 400,
        msg: error,
      });
    }
  };
}

module.exports = LabelController;
