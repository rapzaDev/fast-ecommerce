import { Router } from 'express';

import RegisterUserController from '../../controllers/User/RegisterUserController';
import LoginController from '../../controllers/Auth/LoginController';

const AuthRouter = Router();
const registerUserController = new RegisterUserController();
const loginController = new LoginController();

AuthRouter.post('/register', registerUserController.create);

AuthRouter.post('/login', loginController.create);

export default AuthRouter;