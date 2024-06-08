import { createValidationError } from "~/server/utils/createValidationError";
import { userFormSchema } from "~/server/validators/userFormValidator";

export default defineEventHandler(async (event) => {
  const validateResult = userFormSchema.safeParse(await readBody(event));
  if (!validateResult.success) {
    throw createValidationError(validateResult.error);
  }

  return validateResult.data;
});
