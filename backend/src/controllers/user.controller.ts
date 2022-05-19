import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { hash } from 'argon2';
import userService from '@src/services/user.service';

class UserController {
	static async signup(req: Request, res: Response) {
		const user: User = req.body;

		try {
			const _hash = await hash(user.password);
			user.password = _hash;
			const { id, username } = await userService.create(user);

			return res.status(StatusCodes.CREATED).send({ data: { user: { id, username }, accessToken: '' }, status: 'ok' });
		} catch (error) {
			return res.status(StatusCodes.BAD_REQUEST).send(error);
		}
	}
}

export default UserController;
