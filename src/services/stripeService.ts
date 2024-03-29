import Stripe from 'stripe';
import { LineItem } from '../interfaces/interfaces';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: '2023-10-16' });

export const createSession = async (lineItems: LineItem[]) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems.map(item => ({
            price: item.price_id, 
            quantity: 1,
        })),
        mode: 'payment',
        success_url: 'https://artgalleryelena.vercel.app/success',
        cancel_url: 'https://artgalleryelena.vercel.app/cancel',
    });

    return session;
};