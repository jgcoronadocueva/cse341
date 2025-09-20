// controllers/baseController.js
const baseController = {};

baseController.getHome = function (req, res) {
    res.send("Gisella Galarza");
};

module.exports = baseController;