// connect to db and listen on server

import { ConnectToDB, DisconnectFromDb } from './helpers/db.helper';
import serverListen from './server';
import { logger } from './utils';

ConnectToDB()
	.then(() => {
		serverListen;
	})
	.catch(async error => {
		logger.warn('Error::', error);
		await DisconnectFromDb();
	});
