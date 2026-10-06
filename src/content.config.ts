import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
    generateId: ({ entry }) => {
      const normalized = entry.replace(/\\/g, '/');
      return normalized.replace(/\/index\.mdx$/, '').replace(/\.mdx$/, '');
    },
  }),
  schema: z.object({
    title: z.string(),
    sectionBlogId: z.enum(['javascript', 'diseñoGrafico']).default('javascript'),
    headerTitle: z.string().optional(),
    description: z.string().optional(),
    curso: z.string().optional(),
    orden: z.number().optional(),
    pubDate: z.coerce.date().default(new Date()),
  }),
});

export const collections = { blog };