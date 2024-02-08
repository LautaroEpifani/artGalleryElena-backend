import express from 'express';
import cors from 'cors';
import paymentRoutes from './routes/paymentRoute';
import 'dotenv/config';

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON
app.use(cors());

// Rutas
app.use('/api/payments', paymentRoutes);

app.options('*', cors());

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});