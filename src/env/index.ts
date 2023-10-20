import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string(),
  CLIENT_GOOGLE_ID: z.string(),
  KEY_SECRET_GOOGLE: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('😢 Invalid environment variables!', _env.error.format())

  throw new Error('😢 Invalid environment variables.')
}

export const env = _env.data
