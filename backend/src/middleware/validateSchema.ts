import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as Yup from 'yup';

const validate = (schema: Yup.AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await schema.validate({
			body: req.body,
			query: req.query,
			params: req.params,
		});
		return next();
	} catch (error) {
		if (error instanceof Yup.ValidationError) {
			return res.status(StatusCodes.NOT_ACCEPTABLE).send(error.message);
		}
		return res.status(StatusCodes.BAD_REQUEST).send({ error });
	}
};

export default validate;
