import { Router } from 'express';
import {
  authController,
  confirmAuthController,
  healthController,
  restaurantMenuController,
  notFoundController,
  aboutMeController,
} from './controller';
import authMiddleware from './middleware/auth-middleware';

const routes = Router();

routes.get('/health', healthController);
routes.post('/auth', authController);
routes.patch('/confirm-auth', confirmAuthController);
routes.use(authMiddleware);
routes.get('/merchant/:id?/menu', restaurantMenuController);
routes.get('/me', aboutMeController);
routes.all('*', notFoundController);

export default routes;
