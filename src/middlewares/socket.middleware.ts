import { Socket } from "socket.io";

export const authSocketMiddleware = async (socket: Socket, next: any) => {
  try {
    // here socket.handshake.auth.token is passed from client and it needs to be validated from DB or other sources..
    if (socket.handshake.auth.token) {
      next();
    } else {
      const err = new Error("unauthorized");
      next(err);
    }
  } catch (e) {
    next(new Error("unauthorized"));
  }
};
