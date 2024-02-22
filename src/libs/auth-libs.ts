import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    newUser: "/signup",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
    async session({ token, session }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async signIn({ user }: any) {
      const isAllowedToSignIn: boolean = await isUserAllowedToSignIn(user.email); // Fungsi untuk memeriksa apakah pengguna sudah terdaftar

      if (!isAllowedToSignIn) {
        return '/signup'; // Tidak izinkan masuk jika pengguna belum terdaftar
      }
      return true; // Izinkan masuk jika pengguna sudah terdaftar
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);

async function isUserAllowedToSignIn(email: string): Promise<boolean> {
  // Logika untuk memeriksa apakah pengguna sudah terdaftar
  // Menggunakan Prisma untuk mencari pengguna berdasarkan email
  const userExists: User | null = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return !!userExists; // Return true jika pengguna ditemukan, false jika tidak ditemukan
}
