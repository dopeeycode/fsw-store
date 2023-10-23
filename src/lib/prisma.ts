/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client'

declare global {
  var chachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.chachedPrisma) {
    global.chachedPrisma = new PrismaClient()
  }
  prisma = global.chachedPrisma
}

export const prismaClient = prisma
