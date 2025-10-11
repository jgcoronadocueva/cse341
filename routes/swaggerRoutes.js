const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("../docs/swagger-output.json");

router.use('/', swaggerUi.serve);
router.get('/', (req, res) => {
  /* #swagger.ignore = true */
  swaggerUi.setup(swaggerDocument)(req, res);
});

module.exports = router;