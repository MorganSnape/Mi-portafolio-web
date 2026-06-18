import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: '**/*.{md,mdx}',
    generateId: ({entry}) => {
      const arr = entry.split('/')
      
      if (arr.length > 1 && arr.at(-1) === 'index.mdx') {
        arr.pop();
        return arr.join('-');
      }

      let last = arr.pop() || '';
      
      last = last.replace('.mdx', '');
      arr.push(last);
      return arr.join('-');
    },
  }),
  schema: z.object({
    title: z.string(),
    sectionBlogId: z.enum(['javascript', 'diseñoGrafico']).default('javascript'),    headerTitle: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.coerce.date().default(new Date()),
  })
});

export const collections = { blog };