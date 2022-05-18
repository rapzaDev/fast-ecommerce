import { Router } from 'express';
import { VerifyTokenAndAdmin } from '../../middlewares/VerifyToken';

import CreateProductController from '../../controllers/Product/CreateProductController';
import UpdateProductController from '../../controllers/Product/UpdateProductController';

const ProductRouter = Router();

const create_product_controller = new CreateProductController();
ProductRouter.post("/", VerifyTokenAndAdmin, create_product_controller.create);

const update_product_controller = new UpdateProductController();
ProductRouter.put("/:id", VerifyTokenAndAdmin, update_product_controller.create);

export default ProductRouter;