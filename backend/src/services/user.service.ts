import { PrismaClient, User } from '@prisma/client';

class UserService {
	private dbClient: PrismaClient;

	constructor() {
		this.dbClient = new PrismaClient();
	}

	public async create({ username, email, password }: User) {
		const [createdUser] = await this.dbClient.$transaction([
			this.dbClient.user.create({
				data: {
					username,
					email,
					password,
				},
			}),
		]);

		return createdUser;
	}
}

export default new UserService();
