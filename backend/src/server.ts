import { createServer, Server as HttpServer } from 'http';
import { Server as IoServer } from 'socket.io';
import { app } from './app';
import config from './config';
import { SocketController } from './socketController';
import { logger } from './utils';

export class WsServer {
	public static readonly PORT = config.PORT;
	private httpConnection: HttpServer;
	private socketConnection: IoServer;
	private socketController: SocketController;

	constructor() {
		this.httpConnection = createServer(app);
		this.socketConnection = new IoServer(this.httpConnection, { cors: { origin: `http://localhost:3000` } });
		this.socketController = new SocketController(this.socketConnection);
		this.listen();
	}

	private listen() {
		this.httpConnection.listen(WsServer.PORT, () => logger.info(`Server running @ http://localhost:${WsServer.PORT}`));
	}
}
export default new WsServer();
