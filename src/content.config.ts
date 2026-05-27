import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: '**/*.{md,mdx}',
    // generateId: ({entry}) => {
    //   return entry
    // },
  }),
  schema: z.object({
    title: z.string(),
    headerTitle: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.coerce.date().default(new Date()),
  })
});

export const collections = { blog };