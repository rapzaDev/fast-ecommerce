import { Router } from 'express';

import AuthRouter from './auth'
import UserRouter from './user'
import ProductRouter from './product';

const routes = Router();

routes.use('/api/auth', AuthRouter);
routes.use('/api/users', UserRouter);
routes.use('/api/products', ProductRouter);


export default routes;