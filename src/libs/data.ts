import { PrismaClient, UserDaftar } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserDaftar = async (page: number, perPage: number): Promise<UserDaftar[]> => {
  const offset = (page - 1) * perPage;
  const users = await prisma.userDaftar.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      noWa: true,
      kategoriId: true,
      kategori: true,
      paketId: true,
      paket: true,
      image: true,
      createAt: true, // Perbaiki penulisan field createdAt
      updateAt: true, // Perbaiki penulisan field updatedAt
    },
    skip: offset,
    take: perPage,
  });
  return users;
};

export const getTotalUsersCount = async () => {
  const totalUsers = await prisma.userDaftar.count();
  return totalUsers;
};
