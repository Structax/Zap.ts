import type { Config } from "drizzle-kit"

export default {
  schema: "./drizzle/schema",
  out: "./drizzle/migrations",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.D1_ACCOUNT_ID!,
    databaseId: process.env.D1_DATABASE_ID!,
    token: process.env.D1_TOKEN!
  },
  dialect: "sqlite"
} satisfies Config
