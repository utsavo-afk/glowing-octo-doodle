import { PrismaClient } from '@prisma/client';

class AuthService {
	private dbClient: PrismaClient;
	constructor() {
		this.dbClient = new PrismaClient();
	}
}

export default new AuthService();
