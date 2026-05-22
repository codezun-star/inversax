import { integer, text, sqliteTable } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  titulo: text('titulo').notNull(),
  slug: text('slug').notNull().unique(),
  descripcion: text('descripcion'),
  contenido: text('contenido'),
  pais: text('pais'),
  categoria: text('categoria').default('general'),
  autor: text('autor').default('Equipo Inversax'),
  publicado: integer('publicado', { mode: 'boolean' }).default(true),
  fechaPublicacion: text('fecha_publicacion'),
  imagen: text('imagen'),
  keywords: text('keywords'),
});

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
