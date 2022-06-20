import DeliveryRoutes from './model';

const createDeliveryRoute = (req, res) => {
   DeliveryRoutes.newRoute(req.body)
   .then(route => {
      res.status(200).send(JSON.stringify({
         error: false,
         status: 200,
         body: route
      }));
   })
   .catch(err => {
      console.error(err);
      res.status(500).send(JSON.stringify({
         error: true,
         status: 500,
         body: err.message
      }));
   });  
}

const getAllRoutes = (req, res) => {
   DeliveryRoutes.getRoutes()
   .then(route => {
      console.error(err);
      res.status(200).send(JSON.stringify({
         error: false,
         status: 200,
         body: route
      }));
   })
   .catch(err => {
      res.status(500).send(JSON.stringify({
         error: true,
         status: 500,
         body: err.message
      }));
   });
}

export {
   getAllRoutes,
   createDeliveryRoute
}