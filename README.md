# Swagger-Autogen

Swagger Implementation in Full-Stack Project (Node.js)

[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=flat-square&logo=node.js&logoColor=white)](#)
[![Swagger](https://img.shields.io/badge/Swagger-API_Docs-85EA2D?style=flat-square&logo=swagger&logoColor=black)](#)
[![JWT](https://img.shields.io/badge/JWT-Auth_Support-000000?style=flat-square&logo=jsonwebtokens)](#)

## Overview

This repository demonstrates the integration of Swagger for API documentation in a full-stack Node.js project. Swagger enables automatic API documentation generation and provides an intuitive interface for testing APIs, including support for JWT authentication.

## Features

- **Automatic API Documentation** — Uses `swagger-autogen` to generate documentation from project structure and code comments
- **JWT Authentication Support** — Enhanced middleware for JWT token handling in API documentation
- **Dynamic Configuration** — Host and port configuration via environment variables
- **Interactive Swagger UI** — Graphical interface at `/api-docs` for API exploration and testing

## Folder Structure

```
├── swagger.js           # Documentation generation
├── swaggerEnhancer.js   # JWT token handling middleware
└── app.js               # Main server entry point
```

## Installation & Usage

```bash
npm i swagger-autogen   # Install
node swagger.js         # Generate Swagger documentation
npm start               # Start the server
```

Access Swagger UI at `http://localhost:8080/api-docs`

## Files Explanation

| File | Purpose |
| :--- | :--- |
| `swagger.js` | Configures API title, description, host, schemes, security, and scans routes to generate Swagger JSON |
| `swaggerEnhancer.js` | Adds Authorization parameter to docs, enables secured API testing, manages JWT token handling |
| `app.js` | Express server configuration, middleware integration, and Swagger UI setup with generated JSON |

## Benefits

- **Improved Collaboration** — Clear documentation for all team members
- **Efficient Testing** — Browser-based API testing interface
- **Automated Documentation** — Reduces manual effort and maintains consistency
- **Security Integration** — JWT authentication testing without exposing credentials

## Implementation Steps

1. Run `node swagger.js` to generate documentation
2. Start server and navigate to `/api-docs`
3. Use Swagger UI to explore endpoints and include JWT tokens for secured routes

## Author

<div align="center">
  <p>Built and maintained by <a href="https://github.com/anusthan12">Anusthan Singh</a> · © 2025</p>
</div>
