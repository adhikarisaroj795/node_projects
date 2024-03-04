const models = require("../models");

function save(req, res) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.image_url,
    categoryId: req.body.category_id,
    userId: 1,
  };
  models.post
    .create(post)
    .then((result) => {
      res.status(201).json({
        message: "post created sucessfully",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong",
        error: error,
      });
    });
}
function show(req, res) {
  const id = req.params.id;
  models.post
    .findByPk(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(error);
  res.status(500).json({
    message: " something went wrong",
  });
}

module.exports = {
  save: save,
  show: show,
};
