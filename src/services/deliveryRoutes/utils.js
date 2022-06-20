import { validationResult } from 'express-validator/src/validation-result';

/**
 * @param {array<object>} deliveries 
 * @param {int} maximun_distance_between_points 
 * @returns {array<object>}
 */
const filterDeliveriesForMaximumDistance = (deliveries, maximun_distance_between_points) => {
   return deliveries.filter((delivery) => delivery.distance <= maximun_distance_between_points);
}
/**
 * @param {array<object>} deliveries 
 * @param {boolean} considerer_traffic 
 * @returns {array<object>}
 */
const filterDeliveriesForTraffic = (deliveries, considerer_traffic) => {
   return deliveries.filter((delivery) => ((delivery.traffic <= 3 && !considerer_traffic) || (delivery.traffic >= 4 && considerer_traffic)));
}
/**
 * @param {array<object>} deliveries 
 * @param {int} maximun_distance 
 * @returns {array<object>}
 */
const routesForMaximunDistance = (deliveries, maximun_distance) => {
   try {
      let route = { routeId: getUniqueID(), steps: []};
      let deliveryPickup = [];
      let deliveryLocations = [];
      let maxDistance = 0;
      for (const delivery of deliveries){
         maxDistance += delivery.distance;
         if (maxDistance >= maximun_distance) break;
         deliveryPickup.push({id: delivery.id, point: delivery.pickup_location});
         deliveryLocations.push({id: delivery.id, point: delivery.delivery_location});
      }
      route.steps = deliveryPickup.concat(deliveryLocations);
      return route;
   } catch (error) {
      throw (error);
   }
}
/**
 * @returns {string} - ID Timestamp
 */
const getUniqueID = () => {
   return String(Date.now());
}

const validateResult = (req, res, next) => {
   try {
      validationResult(req).throw();
      return next();
   } catch (error) {
      res.status(403).send(JSON.stringify({
         error: true,
         status: 403,
         body: error
      }));
   }
}

export {
   routesForMaximunDistance,
   getUniqueID,
   filterDeliveriesForMaximumDistance,
   filterDeliveriesForTraffic,
   validateResult
}