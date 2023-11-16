import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const Books = mysqlTable("book", {
  id: serial("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }),
  author: varchar("author", { length: 255 }),
});
