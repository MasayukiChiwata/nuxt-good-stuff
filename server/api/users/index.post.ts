import { userFormSchema } from "~/server/validators/userFormValidator";

export default defineEventHandler(async (event) => {
  const validatedBody = userFormSchema.safeParse(await readBody(event));
  if (!validatedBody.success) {
    throw createError({ statusCode: 422 });
  }

  return validatedBody.data;
});
