import { Router } from 'express';

import AuthRouter from './auth'
import UserRouter from './user'
import ProductRouter from './product';
import CartRouter from './cart';
import OrderRouter from './order';

const routes = Router();

routes.use('/api/auth', AuthRouter);
routes.use('/api/users', UserRouter);
routes.use('/api/products', ProductRouter);
routes.use('/api/carts', CartRouter);
routes.use('/api/orders', OrderRouter);


export default routes;