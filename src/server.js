import express from 'express';
import cors from 'cors';
import App from './v1/routes/index.js';
const server = express();

server.use(cors());
server.use(express.json());
server.use(App);
server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
