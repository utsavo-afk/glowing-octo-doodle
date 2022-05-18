import { Router } from 'express';
import { validateReq } from '@src/middleware';
import { UserController } from '@src/controllers';
import { signupSchema } from '@src/validation';

const router = Router();

router.route('/user').post(validateReq(signupSchema), UserController.signup);

export default router;
