import { PrismaClient } from '@prisma/client';
import { logger } from '@src/utils';

const prisma = new PrismaClient();

export async function ConnectToDB() {
	try {
		await prisma.$connect();
		logger.info('Connected to db...');
	} catch (error) {
		logger.warn('Error::', error);
	}
}

export async function DisconnectFromDb() {
	try {
		await prisma.$disconnect();
		logger.info('Disconnected from db!');
	} catch (error) {
		logger.warn('Error::', error);
	}
}
