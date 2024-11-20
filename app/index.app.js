import express from 'express';
import createDoc from './middlewares/api.doc.js';
import router from './routers/index.router.js';

const app = express();

/**
 * GET /api
 * @summary Get documentation
 * @tags Base
 * @return {object} 200 - success response - application/json
 * @return {object} 500 - error response - application/json
 */
createDoc(app);

app.use(router);

export default app;