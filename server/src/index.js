import express from 'express';
import path from 'path';
import contactRoute from './Routes/ContactRoute.js';
import connection from './database/db.js';
import { fileURLToPath } from 'url';
import cors from 'cors';
// Constants
const PORT = process.env.PORT || 8080;
const HOST = 'localhost';

const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);
const CLIENT_BUILD_PATH = path.join(_dirname, '../../client/build');

// App
const app = express();
connection();

app.use(express.json());

// to use api endpoints in client
app.use(cors());

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// API
app.use('/api/contact', contactRoute);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
