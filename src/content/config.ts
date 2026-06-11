import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().optional(),
    pais: z.string().optional(),
    categoria: z.enum(['brokers', 'guias', 'analisis', 'general']).default('general'),
    fecha: z.string(),
    keywords: z.array(z.string()),
    autor: z.string().default('Equipo Inversax'),
    publicado: z.boolean().default(true),
    faq: z.array(z.object({
      pregunta: z.string(),
      respuesta: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
