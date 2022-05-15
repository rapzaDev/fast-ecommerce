import { Router } from 'express';
import AuthorizationController from '../../controllers/Authorization/AuthorizationController';
import VerifyToken from '../../middlewares/VerifyToken';

const UserRouter = Router();

// UserRouter.put("/:id", VerifyToken, (req, res) => {
//   if (req.user._id === req.params.id || req.user.isAdmin){
      
//   }
// });

const authorization = new AuthorizationController();
UserRouter.put("/:id", VerifyToken, authorization.create);

// const registerUserController = new RegisterUserController();
// const loginController = new LoginController();

// UserRouter.post('/register', registerUserController.create);

export default UserRouter;