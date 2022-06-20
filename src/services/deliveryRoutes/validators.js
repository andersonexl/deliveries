import { check } from 'express-validator';
import { validateResult } from './utils';

const validateCreate = [
   check('maximun_distance')
      .exists()
      .not()
      .isEmpty()
      .isNumeric(),
   check('considerer_traffic')
      .exists()
      .not()
      .isEmpty()
      .isBoolean(),
   check('plot')
      .optional({ checkFalsy: true })
      .isBoolean(),
   check('maximun_distance_between_points')
      .optional({ checkFalsy: true })
      .isNumeric(),
   (req, res, next) => {
      validateResult(req, res, next);
   }
]

export {
   validateCreate
}