import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema.js";

export const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "graphbook_dev",
  multipleStatements: true,
});

export const db = drizzle(connection, { mode: "default", schema: schema });
