const Url = require("../models/Url");

const getAllUrlsController = async (req, res) => {
  const allUrls = await Url.find({});
  const results = {};
  if (!allUrls) res.status(404).json({ message: "db empty" });

  const page = +parseInt(req.query.page);
  const limit = +parseInt(req.query.limit);
  console.log(req.query);
  const startingPoint = (page - 1) * limit;
  const endingPoint = page * limit;

  results.totalPage = Math.ceil(allUrls.length / limit);
  results.totalUrls = allUrls.length;

  if (endingPoint < allUrls.length) {
    results.next = {
      page: page + 1,
    };
  }
  if (startingPoint > 0)
    results.prev = {
      page: page - 1,
    };
  results.urls = allUrls.slice(startingPoint, endingPoint);

  return res.status(200).json(results);
};
module.exports = getAllUrlsController;
