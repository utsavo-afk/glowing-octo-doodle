// connect to db and listen on server

import { ConnectToDB, DisconnectFromDb } from './helpers/db.helper';
import serverListen from './server';

ConnectToDB()
	.then(() => {
		serverListen;
	})
	.catch(async error => {
		console.log('Error::', error);
		await DisconnectFromDb();
	});
