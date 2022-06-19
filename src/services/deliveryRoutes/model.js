import { routesForMaximunDistance } from './utils';
import database from '../../../files/database';

const TABLE = 'routes';

class DeliveryRoutes {

   // { 
   //    id: 1, 
   //    pickup_location: [23, 45], - Longitud y latitud de la ubicacion del producto
   //    delivery_location: [23, 56], - Longitud y latitud de la ubicacion de la entrega del producto
   //    distance: 7, - Distancia en kilometros que separa la recogida del punto de entrega
   //    traffic: 5 - Indica que tanto trafico hay
   //  } 
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
         console.log(`
            maximun_distance: ${maximun_distance}
            considerer_traffic: ${considerer_traffic}
            plot: ${plot}
            maximun_distance_between_points: ${maximun_distance_between_points}
         `);
         let route = routesForMaximunDistance(maximun_distance);
         database[TABLE].push(route);
         return route;
      } catch (error) {
         throw new Error(error);       
      }
   } 
}

export default DeliveryRoutes;