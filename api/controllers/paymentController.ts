import { Request, Response } from 'express';
import { createSession } from '../services/stripeService'; // Asegúrate de que este archivo exista en tu proyecto

export const createCheckoutSession = async (req: Request, res: Response) => {
    try {
        const session = await createSession(req.body.lineItems);
        res.json({ id: session.id });
    } catch (error) {
        console.error('Error al crear la sesión de Checkout:', error);
        res.status(500).send('Error al procesar la solicitud');
    }
};
