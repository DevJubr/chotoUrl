const urlController = (req, res) => {
  const { body } = req;
  res.json({ body });
  console.log(body);
};

module.exports = urlController;
