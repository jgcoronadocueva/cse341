// swagger.js
const swaggerAutogen = require("swagger-autogen");
const mongooseToSwagger = require('mongoose-to-swagger');
const Contact = require("../models/Contact");

const contactSchema = mongooseToSwagger(Contact);

const outputFile = "./docs/swagger-output.json";
const endPointsFiles = ["./routes/index.js"];

// Check if environment is production
const isProduction = process.env.NODE_ENV === "production";

// Render provides the domain in process.env.RENDER_EXTERNAL_HOSTNAME
const host = isProduction
  ? process.env.RENDER_EXTERNAL_HOSTNAME : `localhost:${process.env.PORT || 3000}`;

const doc = {
    info: {
      title: "Contacts API",
      description: "An API for managing contacts",
      version: "1.0.0",
    },
    host: host,
    // Uses secure HTTP protocol when in production
    schemes: isProduction ? ["https"] : ["http"],
    definitions: {
      Contact: contactSchema
    }
};

const options = {
    autoHeaders: true,
    autoQuery: true,
    autoBody: true,
    swaggerOptions: {
      operationsSorter: (a, b) => {    
      const methodsOrder = ["get", "post", "put", "delete"];
      return methodsOrder.indexOf(a.get("method")) - methodsOrder.indexOf(b.get("method"));
    }
  }
};

swaggerAutogen(outputFile, endPointsFiles, doc, options);