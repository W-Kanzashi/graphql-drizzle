import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  driver: "mysql2",
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "",
    database: "graphbook_dev",
  },
} satisfies Config;
