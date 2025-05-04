const baseController = {};

baseController.buildHome = async function (req, res) {
    const name = "Gisella Galarza"; // Name to be displayed
    res.render("index", { name }); // Pass the name to the view
};

module.exports = baseController;