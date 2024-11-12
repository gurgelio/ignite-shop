import Stripe from "stripe";
import { env } from "./env";

export type ExpandedPriceProduct = Stripe.Product & { default_price: Stripe.Price }

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
