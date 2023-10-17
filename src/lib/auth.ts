import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismaClient } from "./prisma";
import { AuthOptions } from 'next-auth'
import { env } from '@/env';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: env.CLIENT_GOOGLE_ID,
      clientSecret: env.KEY_SECRET_GOOGLE
    })
  ]
}