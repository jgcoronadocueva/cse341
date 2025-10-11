// controllers/baseController.js
const baseController = {};

baseController.getHome = function (req, res) {
  /* #swagger.ignore = true */
  res.render("index", { environment: process.env.NODE_ENV });
};

module.exports = baseController;
