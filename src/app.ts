// config env path
import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

// config alias module and metadata
import "module-alias/register";
import "reflect-metadata";

// lib create app
import express from "express";
import { createServer } from "http";
import { SocketService } from "@libs/socket/socket.service";
import { authSocketMiddleware } from "./middlewares/socket.middleware";
import { StripeService } from "@libs/stripe/stripe.service";

const app = express();

const httpServer = createServer(app);
const io = SocketService.getInstanceSocket(httpServer);
const stripe = StripeService.getStripeService();


httpServer.listen(3000, () => {
  console.log(`Server is running in port ${3000}`);
});
