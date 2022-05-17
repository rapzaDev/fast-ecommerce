import { Router } from 'express';
import { VerifyToken, VerifyTokenAndAdmin } from '../../middlewares/VerifyToken';
import AuthorizationController from '../../controllers/Authorization/AuthorizationController';
import DeleteUserController from '../../controllers/User/DeleteUserController';
import GetUserController from '../../controllers/User/GetUserController';

const UserRouter = Router();

const authorization = new AuthorizationController();
UserRouter.put("/:id", VerifyToken, authorization.create);

const delete_action = new DeleteUserController();
UserRouter.delete("/:id", VerifyToken, delete_action.create);

const get_user = new GetUserController();
UserRouter.get("/:id", VerifyTokenAndAdmin, get_user.create);

export default UserRouter;