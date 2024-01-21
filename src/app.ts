require("dotenv").config();
import "module-alias/register";
import "reflect-metadata";

import express from "express";
import { createServer } from "http";
import { SocketService } from "@libs/socket/socket";
import { authSocketMiddleware } from "./middlewares/socket.middleware";

const app = express();

const httpServer = createServer(app);
const io = SocketService.getInstanceSocket(httpServer);
// io.of('', )
// io.use(authSocketMiddleware);
// io.on("connection", (socket) => {
//   io.initial(socket);
// });

httpServer.listen(3000, () => {
  console.log(`Server is running in port ${3000}`);
});
