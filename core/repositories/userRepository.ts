import type { User as PrismaUser } from "@prisma/client";
import type { User } from "@/core/entities/user";
import { prisma } from "@/core/interfaces/prismaClient";

export type IUserRepository = {
  create: (user: User) => Promise<PrismaUser>;
};

export const userRepository: IUserRepository = {
  create: async (user) => {
    return await prisma.user.create({ data: user });
  },
};
