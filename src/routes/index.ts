import { Router } from 'express';

import UserRouter from './user'
import AuthRouter from './auth'

const routes = Router();

routes.use('/api/auth', AuthRouter);

export default routes;