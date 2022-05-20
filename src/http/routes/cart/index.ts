import { Router } from 'express';
import { VerifyToken, VerifyTokenAndAdmin } from '../../middlewares/VerifyToken';
import CreateCartController from '../../controllers/Cart/CreateCartController';
import UpdateCartController from '../../controllers/Cart/UpdateCartController';
import DeleteCartController from '../../controllers/Cart/DeleteCartController';
import GetCartController from '../../controllers/Cart/GetCartController';
import GetAllCartsController from '../../controllers/Cart/GetAllCartsController';

const CartRouter = Router();

const create_cart_controller = new CreateCartController();
CartRouter.post("/", VerifyToken, create_cart_controller.create);

const get_all_carts_controller = new GetAllCartsController();
CartRouter.post("/", VerifyTokenAndAdmin, get_all_carts_controller.create);

const get_cart_controller = new GetCartController();
CartRouter.post("/find/:userId", VerifyToken, get_cart_controller.create);

const update_cart_controller = new UpdateCartController();
CartRouter.put("/:id", VerifyToken, update_cart_controller.create);

const delete_cart_controller = new DeleteCartController();
CartRouter.delete("/:id", VerifyToken, delete_cart_controller.create);

export default CartRouter;