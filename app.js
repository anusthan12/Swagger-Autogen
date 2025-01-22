require('dotenv').config();
const cors = require("cors");
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json')

// Swagger setup for API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile)); 
