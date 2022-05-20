import { Router } from 'express';
import { VerifyToken, VerifyTokenAndAdmin } from '../../middlewares/VerifyToken';
// Controllers
import CreateOrderController from '../../controllers/Order/CreateOrderController';
import UpdateOrderController from '../../controllers/Order/UpdateOrderController';
import DeleteOrderController from '../../controllers/Order/DeleteOrderController';
import GetOrderController from '../../controllers/Order/GetOrderController';
import GetAllOrdersController from '../../controllers/Order/GetAllOrdersController';

const OrderRouter = Router();

const create_Order_controller = new CreateOrderController();
OrderRouter.post("/", VerifyToken, create_Order_controller.create);

const get_all_Orders_controller = new GetAllOrdersController();
OrderRouter.post("/", VerifyTokenAndAdmin, get_all_Orders_controller.create);

const get_Order_controller = new GetOrderController();
OrderRouter.post("/find/:userId", VerifyToken, get_Order_controller.create);

const update_Order_controller = new UpdateOrderController();
OrderRouter.put("/:id", VerifyToken, update_Order_controller.create);

const delete_Order_controller = new DeleteOrderController();
OrderRouter.delete("/:id", VerifyToken, delete_Order_controller.create);

export default OrderRouter;