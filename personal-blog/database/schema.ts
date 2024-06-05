import {serial, text, timestamp, pgTable, pgSchema, PgSchema, PgTable} from 'drizzle-orm/pg-core'


export const personalBlogSchema: PgSchema<'personal_blog'> = pgSchema('personal_blog');


export const personalBlogPosts = personalBlogSchema.table('posts', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('createdAt',{mode: 'string'}).notNull().defaultNow()
})

