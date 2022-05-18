import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class UserController {
	static signup(req: Request, res: Response) {
		const { username, email, password } = req.body;
		try {
			// create user service
			// sign jwt
			// send res
		} catch (error) {
			return res.status(StatusCodes.BAD_REQUEST).send(error);
		}
	}
}

export default UserController;
