import expressJSDocSwagger from "express-jsdoc-swagger";

const options = {
    info: {
      version: '1.0.0',
      title: 'Dice Forge API',
      description: 'Documentation de l\'API de Dice Forge',
    },
    // Base directory which we use to locate your JSDOC files
    baseDir: import.meta.url.substring(7, import.meta.url.lastIndexOf('/')),
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: '../**/*.js',
    // URL where SwaggerUI will be rendered
    swaggerUIPath: process.env.API_DOCUMENTATION_ROUTE || '/api-docs',
    // Expose Open API JSON Docs documentation in `apiDocsPath` path.
    exposeApiDocs: true,
    // Open API JSON Docs endpoint.
    apiDocsPath: '/api',
  };

/**
 * swagger middleware factory
 * @param {object} app Express application
 * @returns {object} Express JSDoc Swagger middleware that will generate the documentation
 */
export default (app) => expressJSDocSwagger(app)(options);