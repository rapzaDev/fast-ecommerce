import { Router } from 'express';
import { VerifyToken } from '../../middlewares/VerifyToken';
import AuthorizationController from '../../controllers/Authorization/AuthorizationController';
import DeleteUserController from '../../controllers/User/DeleteUserController';

const UserRouter = Router();

const authorization = new AuthorizationController();
UserRouter.put("/:id", VerifyToken, authorization.create);

const delete_action = new DeleteUserController();
UserRouter.delete("/:id", VerifyToken, delete_action.create);

export default UserRouter;