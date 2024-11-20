import { createServer } from 'node:http';
import 'dotenv/config';

import app from './app/index.app.js'; // Import the app from the app folder

const PORT = process.env.PORT || 3000;

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`HTTP Server launched at http://localhost:${PORT} !!!`);
  }
});
