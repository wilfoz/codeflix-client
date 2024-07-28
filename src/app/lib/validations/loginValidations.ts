import { z } from "zod";

export const loginValidations = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})