const Url = require("../models/Url");

const allUrlsHistoryController = async (req, res) => {
  const allUser = await Url.find({});
  if (!allUser) {
    res.status(404).json({ message: "data base empty" });
  }
  return res.status(200).json({ message: allUser });
};
module.exports = allUrlsHistoryController;
