import { Server } from 'socket.io';

const WEBSOCKET_CORS = {
  origin: "*",
  methods: ["GET", "POST"],
};

export class SocketService extends Server {
  private static socketInstance: SocketService;
  private constructor (httpServer) {
    super(httpServer, {
      cors: WEBSOCKET_CORS
    })
  }

  static getInstanceSocket(httpServer): SocketService {
    if (!this.socketInstance) {
      this.socketInstance = new SocketService(httpServer);
    }
    return this.socketInstance;
  }
}