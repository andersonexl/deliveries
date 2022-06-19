import express from 'express';
import cors from 'cors';
import deliveryRoutes from './services/deliveryRoutes/routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/routes', deliveryRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`Running server in port ${PORT}`);
});
