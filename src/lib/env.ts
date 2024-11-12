import "server-only";
import { z } from "zod";

const envSchema = z.object({
  STRIPE_PRIVATE_KEY: z.string(),
  STRIPE_PUBLIC_KEY: z.string(),
  NEXT_URL: z.string()
});

export const env = envSchema.parse(process.env);
