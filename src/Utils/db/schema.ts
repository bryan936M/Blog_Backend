import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const blog = pgTable("BLOG", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: text("content").notNull(),
	coverImg: varchar("cover_Img", { length: 255 }).notNull(),
	author: varchar("author", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).notNull(),
});