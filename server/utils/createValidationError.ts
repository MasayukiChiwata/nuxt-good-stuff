import type { ZodError } from "zod";

export const createValidationError = (zodError: ZodError) => {
  return createError({ statusCode: 422, data: { validationError: zodError.format() } });
};
