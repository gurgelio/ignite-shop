import Stripe from 'stripe'
import { env } from './env'

export const stripe = new Stripe(env.STRIPE_PRIVATE_KEY, {
  apiVersion: '2024-09-30.acacia',
  appInfo: {
    name: 'Ignite Shop'
  }
})
