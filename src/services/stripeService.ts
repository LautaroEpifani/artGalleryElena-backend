import Stripe from 'stripe';
import { LineItem } from '../interfaces/interfaces';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: '2023-10-16' });

export const createSession = async (lineItems: LineItem[]) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems.map(item => ({
            price: item.price_id, // Utiliza el price_id directamente
            quantity: item.quantity,
        })),
        mode: 'payment',
        success_url: 'http://localhost:5173/success',
        cancel_url: 'http://localhost:5173/cancel',
    });

    return session;
};