# Swagger-Autogen

Swagger Implementation in Full-Stack Project (Node.js)

## Overview

This repository demonstrates the integration of Swagger for API documentation in a full-stack Node.js project. Swagger enables automatic API documentation generation and provides an intuitive interface for testing APIs, including support for JWT authentication.

## Features

- **Automatic API Documentation**: Uses swagger-autogen package to generate documentation from project structure and code comments
- **JWT Authentication Support**: Enhanced middleware for JWT token handling in API documentation
- **Dynamic Configuration**: Host and port configuration via environment variables
- **Interactive Swagger UI**: Graphical interface at `/api-docs` for API exploration and testing

## Folder Structure

```
├── swagger.js           # Documentation generation
├── swaggerEnhancer.js   # JWT token handling middleware
└── app.js              # Main server entry point
```

## Installation

```bash
npm i swagger-autogen
```

## Usage

Generate Swagger documentation:
```bash
node swagger.js
```

Start the server:
```bash
npm start
# or
yarn start
```

Access Swagger UI at `http://localhost:8080/api-docs`

## Files Explanation

### swagger.js
Handles automatic documentation generation using swagger-autogen:
- Configures API title, description, host, schemes, and security
- Specifies output path for Swagger JSON
- Defines files to scan for API routes

### swaggerEnhancer.js
Middleware for JWT authentication support:
- Adds Authorization parameter to documentation
- Enables secured API testing via Swagger UI
- Manages JWT token handling

### app.js
Main application setup:
- Express server configuration
- Middleware integration
- Swagger UI setup with generated JSON

## Benefits

- **Improved Collaboration**: Clear documentation for all team members
- **Efficient Testing**: Browser-based API testing interface
- **Automated Documentation**: Reduces manual effort and maintains consistency
- **Security Integration**: JWT authentication testing without exposing credentials

## Implementation Steps

1. Run server and navigate to `/api-docs`
2. Use Swagger UI to explore endpoints
3. Include JWT tokens for testing secured routes

## Author

[@anusthan12](https://github.com/anusthan12)
