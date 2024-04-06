class LabelController {
  store = (req, res, next) => {
    res.status(200).json({
      result: req.body,
      status: true,
      msg: "Sucess creating label",
    });
  };
}

module.exports = LabelController;
