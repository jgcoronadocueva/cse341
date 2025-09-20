// controllers/baseController.js
const baseController = {}

baseController.getHome = async function (req, res) {
    res.send("Gisella Galarza")
};

module.exports = baseController;