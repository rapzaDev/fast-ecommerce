import { Router } from 'express';
import { VerifyTokenAndAdmin } from '../../middlewares/VerifyToken';

import CreateProductController from '../../controllers/Product/CreateProductController';
import UpdateProductController from '../../controllers/Product/UpdateProductController';
import DeleteProductController from '../../controllers/Product/DeleteProductController';
import GetProductController from '../../controllers/Product/GetProductController';

const ProductRouter = Router();

const create_product_controller = new CreateProductController();
ProductRouter.post("/", VerifyTokenAndAdmin, create_product_controller.create);

const get_product_controller = new GetProductController();
ProductRouter.get("/find/:id", get_product_controller.create);

const update_product_controller = new UpdateProductController();
ProductRouter.put("/:id", VerifyTokenAndAdmin, update_product_controller.create);

const delete_product_controller = new DeleteProductController();
ProductRouter.delete("/:id", VerifyTokenAndAdmin, delete_product_controller.create);

export default ProductRouter;