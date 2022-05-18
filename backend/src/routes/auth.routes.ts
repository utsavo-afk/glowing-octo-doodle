import { Router } from 'express';
import { validateReq } from '@src/middleware';
import { AuthController } from '@src/controllers';
import { loginSchema } from '@src/validation';

const router = Router();

router.route('/auth').post(validateReq(loginSchema), AuthController.login);

export default router;
