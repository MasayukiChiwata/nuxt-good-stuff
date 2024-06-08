import { z } from "zod";

export const userFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export type UserFormValidationError = z.inferFormattedError<typeof userFormSchema>;
