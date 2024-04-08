const labelModel = require("../model/label.model");

class LabelService {
  validateLabel = (data, file) => {
    console.log(data);
    let err = {
      title: "",
      image: "",
      type: "",
    };
    if (!data?.title) {
      err.title = "Tittle is required";
    } else {
      delete err.title;
    }
    if (!data?.type) {
      err.type = "Type is required";
    } else {
      delete err.type;
    }
    if (!file) {
      err.image = "Image is required";
    } else {
      delete err.image;
    }

    return Object.keys(err).length === 0 ? null : err;
  };

  labelCreate = async (data) => {
    let label = new labelModel(data);
    try {
      return await label.save();
    } catch (error) {
      throw error;
    }
  };
  labelUpdate = async (data, id) => {
    try {
      let updateddata = await labelModel.findByIdAndUpdate(id, {
        $set: data,
      });
      console.log(updateddata);
      return updateddata;
    } catch (error) {
      throw error;
    }
  };
  getLabels = async () => {
    let all_labels = await labelModel.find();
    return all_labels;
  };
  deleteById = async (id) => {
    return labelModel.findByIdAndDelete(id);
  };
}

module.exports = LabelService;
