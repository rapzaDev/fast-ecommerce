import { Router } from 'express';

import RegisterUserController from '../../controllers/Auth/RegisterUserController';

const AuthRouter = Router();
const registerUserController = new RegisterUserController();

AuthRouter.post('/register', registerUserController.create);

export default AuthRouter;