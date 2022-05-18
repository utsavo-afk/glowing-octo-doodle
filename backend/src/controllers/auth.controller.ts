import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { logger } from '@src/utils';

class AuthController {
	static login(req: Request, res: Response) {
		const { username, password } = req.body;
		logger.info(username, password);
		try {
			// find user service
			// verify password
			// sign jwt
			// send response
		} catch (error) {
			// handle error
			return res.status(StatusCodes.BAD_REQUEST).send(error);
		}
	}
}

export default AuthController;
