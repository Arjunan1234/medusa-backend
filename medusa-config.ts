import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL || "postgresql://postgres:qbWZeONsrh9yiQjX@db.gdnbrdtwkzfccetynylr.supabase.co:5432/postgres",
    databaseDriverOptions: {
      connection: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        },
        connectTimeout: 60000,
        requestTimeout: 60000,
        connectionTimeoutMillis: 60000,
        idleTimeoutMillis: 600000,
        query_timeout: 60000
      },
      pool: {
        min: 0,
        max: 10,
        acquireTimeoutMillis: 60000,
        createTimeoutMillis: 60000
      }
    },
    redisUrl: process.env.REDIS_URL || "rediss://default:ASK5AAImcDJiMzcxOTg0YTk4NmQ0ZmUwOWRmMTUzY2E3MmNiOGEzYXAyODg4OQ@clever-titmouse-8889.upstash.io:6379",
    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:8000",
      adminCors: process.env.ADMIN_CORS || "http://localhost:7001,http://localhost:7000",
      authCors: process.env.AUTH_CORS || "http://localhost:8000",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  admin: {
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true"
  }
})
