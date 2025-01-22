// if implemented jwt token then to in api doc to add jwt token in that, this swagger enhancer will enable that part of code
const swaggerEnhancer = (req, res, next) => {
    if (req.swagger) {
        if (!req.swagger.params) {
            req.swagger.params = {};
        }
        req.swagger.params.user = {
            in: 'header',
            name: 'Authorization',
            description: 'JWT token for authentication',
            required: true,
            type: 'string'
        };
    }
    next();
};

module.exports = swaggerEnhancer;
