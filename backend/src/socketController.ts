import { Server as IoServer, Socket } from 'socket.io';
import { SOCKET_EVENTS } from './constants/socketEvents';
import { logger } from './utils';

export class SocketController {
	private socketHandler: IoServer;

	constructor(handler: IoServer) {
		this.socketHandler = handler;
		this.lsiten();
	}
	private lsiten() {
		this.socketHandler.on(SOCKET_EVENTS.CONNECT, (socket: Socket) => {
			logger.info('new user connected ', socket.id);
			socket.emit('init', { data: 'hello user!' });

			socket.on(SOCKET_EVENTS.DISCONNECT, () => {
				logger.info('user disconnected!');
			});
		});
	}
}
