import 'server-only'
import Stripe from "stripe";
import { env } from "./env";

export type ExpandedPriceProduct = Stripe.Product & { default_price: Stripe.Price }
type ExpandedCheckoutSession = Stripe.Checkout.Session & {
  line_items: Stripe.ApiList<Stripe.LineItem & {
    price: Stripe.Price & {
      product: Stripe.Product
    }
  }>
}

const stripe = new Stripe(env.STRIPE_PRIVATE_KEY, {
  apiVersion: "2024-10-28.acacia",
  appInfo: {
    name: "Ignite Shop",
  },
});

export async function getProductDetails(id: string) {
  return await stripe.products.retrieve(id, {
    expand: ['default_price']
  }) as Stripe.Response<ExpandedPriceProduct>
}

export async function getProducts() {
  return await stripe.products.list({
    expand: ['data.default_price']
  }) as Stripe.Response<Stripe.ApiList<ExpandedPriceProduct>>
}

export async function createCheckoutSession(priceId: string) {
  return stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: `${env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.NEXT_URL}/`,
    line_items: [{ price: priceId, quantity: 1 }]
  })
}

export async function getSessionDetails(sessionId: string) {
  return await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  }) as ExpandedCheckoutSession
}
