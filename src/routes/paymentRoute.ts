import express from 'express';
import { createCheckoutSession } from '../controllers/paymentController'; // Asegúrate de que este archivo exista en tu proyecto

const router = express.Router();

router.post('/create-checkout-session', createCheckoutSession);

export default router;
