import { type User, userSchema } from "@/core/entities/user";
import type { IUserRepository } from "@/core/repositories/userRepository";
import { ValidationError } from "@/core/errors";

export const createUser = async (userRepository: IUserRepository, userData: User) => {
  const validateResult = userSchema.safeParse(userData);

  if (!validateResult.success) {
    return new ValidationError(validateResult.error.format());
  }

  return userRepository.create(validateResult.data);
};
