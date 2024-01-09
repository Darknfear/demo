require("dotenv").config();
import "module-alias/register";
import "reflect-metadata";

import express from "express";
import { createServer } from "http";
import { SocketService } from "@libs/socket/socket"; 

const app = express();

const httpServer = createServer(app);
const socket = SocketService.getInstanceSocket(httpServer);
httpServer.listen(3000, () => {
  console.log(`Server is running in port ${3000}`);
});
