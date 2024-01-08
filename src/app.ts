import * as express from "express";
import { createServer } from 'http';

const app = express();
const server = createServer(app);
server.listen(3000, () => {
  console.log(`Server is running in port ${3000}`);
});
