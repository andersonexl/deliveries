import { Router } from 'express';
import { createDeliveryRoute, getAllRoutes } from './controller';
import { validateCreate } from './validators';

const router = Router();

router.get('/', getAllRoutes);
router.post('/', validateCreate, createDeliveryRoute);

export default router;
