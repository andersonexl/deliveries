import express from 'express';
import cors from 'cors';
import deliveryRoutes from './services/deliveryRoutes/routes';
import config from './config';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/routes', deliveryRoutes);

const PORT = config.PORT;

app.listen(PORT, () => {
   console.log(`Running server in port ${PORT}`);
});
