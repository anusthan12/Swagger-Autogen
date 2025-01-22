const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const doc = {
  info: {
    title: 'Your App Name',
    description: 'API Documentation',
  },
  host: `localhost:${process.env.APP_PORT}`,
  schemes: ['http'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description: 'JWT token for authentication'
    },
  },
  security: [
    {
      bearerAuth: []
    }
  ]
};


// Local code will be avalible at http://localhost:8080/api-docs/, if server url then replace localhost with server url

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js', './api/*/*.js',  './api/*/*.service.js', './api/*/*.controller.js', './api/*/*.router.js',]; // all over possible files

// specific .js files
// const outputFile = './swagger-output.json';
// const endpointsFiles = [
//   './app.js',
//   './api/*/*.js',  
//   './api/*/*.controller.js',
//   './api/*/*.router.js',
//   './api/*/*.service.js'
// ];

const options = {
  autoHeaders: true,
  autoQuery: true,
  autoBody: true
};


swaggerAutogen(outputFile, endpointsFiles, doc, options);
