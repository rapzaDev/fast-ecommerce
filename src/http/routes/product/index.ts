import { Router } from 'express';
import { VerifyTokenAndAdmin } from '../../middlewares/VerifyToken';

import CreateProductController from '../../controllers/Product/CreateProductController';

const ProductRouter = Router();

const create_product_controller = new CreateProductController();
ProductRouter.post("/", VerifyTokenAndAdmin, create_product_controller.create);

export default ProductRouter;