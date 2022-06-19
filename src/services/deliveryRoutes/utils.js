import mockData from '../../../data/mockData.json';

const routesForMaximunDistance = (maximun_distance) => {
   try {
      let route = { routeId: getUniqueID(), steps: []};
      let deliveryPickup = [];
      let deliveryLocations = [];
      let maxDistance = 0;
      for (const delivery of mockData){
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

const getUniqueID = () => {
   return String(Date.now());
}

export {
   routesForMaximunDistance,
   getUniqueID
}