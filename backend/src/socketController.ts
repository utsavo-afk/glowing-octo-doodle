import { Server as IoServer, Socket } from 'socket.io';
import { SOCKET_EVENTS } from './constants/socketEvents';

export class SocketController {
	private socketHandler: IoServer;

	constructor(handler: IoServer) {
		this.socketHandler = handler;
		this.lsiten();
	}
	private lsiten() {
		this.socketHandler.on(SOCKET_EVENTS.CONNECT, (socket: Socket) => {
			console.log('new user connected ', socket.id);
			socket.emit('init', { data: 'hello user!' });

			socket.on(SOCKET_EVENTS.DISCONNECT, () => {
				console.log('user disconnected!');
			});
		});
	}
}
