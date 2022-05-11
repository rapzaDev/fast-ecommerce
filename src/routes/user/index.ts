import { Router } from 'express';
import VerifyToken from '../../middlewares/VerifyToken';

const UserRouter = Router();

UserRouter.put("/:id", VerifyToken);

// const registerUserController = new RegisterUserController();
// const loginController = new LoginController();

// UserRouter.post('/register', registerUserController.create);

export default UserRouter;