import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "postgresql",
  schema: "./database/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgres://juampi:root@127.0.0.1:5432/personal-blog'
  },
  schemaFilter: ['personal_blog']
})