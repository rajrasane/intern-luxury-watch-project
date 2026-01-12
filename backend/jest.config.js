/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        "src/**/*.js",
        "!**/node_modules/**",
        "!src/server.js",
        "!src/routes/authRoutes.js",
        "!src/routes/productRoutes.js",
        "!src/models/User.js",
        "!src/models/Product.js",
        "src/controllers/authController.js",
        "!src/controllers/productController.js",
        "!src/middleware/**",
        "!src/app.js"
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
};

module.exports = config;
