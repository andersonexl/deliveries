import { Router } from 'express';
import { createDeliveryRoute, getAllRoutes } from './controller';

const router = Router();

router.get('/', getAllRoutes);
router.post('/', createDeliveryRoute);


export default router;
