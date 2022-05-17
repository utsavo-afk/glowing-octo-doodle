import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function ConnectToDB() {
	try {
		await prisma.$connect();
		console.log('Connected to db...');
	} catch (error) {
		console.log('Error::', error);
	}
}

export async function DisconnectFromDb() {
	try {
		await prisma.$disconnect();
		console.log('Disconnected from db!');
	} catch (error) {
		console.log('Error::', error);
	}
}
