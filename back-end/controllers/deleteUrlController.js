const Url = require("../models/Url");

const deleteUrlController = async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    res.status(404).json({ message: "{not found _id for delete}" });
  }
  const deleted = await Url.findByIdAndDelete({ _id });
  if (!deleted) {
    res.status(404).json({ message: "{not found id for delete}" });
  }
  res.status(204).json({ message: "{deleted successfully}", deleted });
};
module.exports = deleteUrlController;
