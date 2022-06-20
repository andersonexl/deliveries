import { routesForMaximunDistance, filterDeliveriesForMaximumDistance, filterDeliveriesForTraffic } from './utils';
import database from '../../../files/database';
import mockData from '../../../data/mockData.json';

const TABLE = 'routes';

class DeliveryRoutes {

   static getRoutes = async () => {
      try {
         return database[TABLE] || [];
      } catch (error) {
         throw new Error(error);       
      }
   }

   static newRoute = async (data) => {
      try {
         const { maximun_distance, considerer_traffic, plot, maximun_distance_between_points } = data;
         let deliveries = mockData;
         if (maximun_distance_between_points) deliveries = filterDeliveriesForMaximumDistance(deliveries, maximun_distance_between_points);
         if (considerer_traffic || considerer_traffic === false) deliveries = filterDeliveriesForTraffic(deliveries, considerer_traffic);
         let route = routesForMaximunDistance(deliveries, maximun_distance);
         database[TABLE].push(route);
         return route;
      } catch (error) {
         throw new Error(error);       
      }
   } 
}

export default DeliveryRoutes;