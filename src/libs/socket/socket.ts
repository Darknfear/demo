import { Server } from 'socket.io';
import { Server as HttpServer} from 'http';
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from './interfaces/socket.interface';

const WEBSOCKET_CORS = {
  origin: "*",
  methods: ["GET", "POST"],
};

export class SocketService extends Server<
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData
> {
  private static socketInstance: SocketService;
  private constructor(app: HttpServer) {
    super(app, {
      cors: WEBSOCKET_CORS,
    });
  }

  static getInstanceSocket(app: HttpServer): SocketService {
    if (!this.socketInstance) {
      this.socketInstance = new SocketService(app);
    }
    return this.socketInstance;
  }
}