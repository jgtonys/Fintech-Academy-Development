const swaggerJSDoc  = require('swagger-jsdoc');
const swaggerUi     = require('swagger-ui-express');

// Swagger definition
// You can set every attribute except paths and swagger
var swaggerDefinition = {
    info: {                                             // API informations (required)
        title: 'Nodejs API',                            // Title (required)
        version: '0.0.1',                               // Version (required)
        description: 'API Specification', // Description (optional)
    },
    host: "localhost:8080",
    basePath: "/"
};

// Options for the swagger docs
var options = {
    swaggerDefinition: swaggerDefinition,               // Import swaggerDefinitions
    apis: [                                             // Path to the API docs
        'app/controllers/*.js'                                 // v1,v2... 확장가능(swaggerDefinition,swaggerSpec도 버전별로 따로 생성해야 함)
    ]
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
var swaggerSpec = module.exports.swaggerSpec = swaggerJSDoc(options);

// Swagger UI
module.exports.swaggerUi = swaggerUi;
