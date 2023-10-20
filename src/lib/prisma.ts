/* eslint-disable no-var */
import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

declare global {
  var chachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.chachedPrisma) {
    global.chachedPrisma = new PrismaClient()
  }
  prisma = global.chachedPrisma
}

export const prismaClient = prisma
