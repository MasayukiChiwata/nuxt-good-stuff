import type { User as PrismaUser } from "@prisma/client";
import type { User } from "@/core/entities/user";
import { prisma } from "@/core/interfaces/prismaClient";

export type IUserRepository = {
  create: (user: User) => Promise<PrismaUser>;
  isEmailDuplicate: (email: string) => Promise<boolean>;
};

export const userRepository: IUserRepository = {
  create: async (user) => {
    return await prisma.user.create({ data: user });
  },

  /** ユーザー名の重複チェック */
  isEmailDuplicate: async (email: string) => {
    const count = await prisma.user.count({
      where: { email },
    });
    return count > 0;
  },
};
