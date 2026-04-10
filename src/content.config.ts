import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const daily = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/daily' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional(),
    archive: z.boolean().optional().default(false),
  }),
});

export const collections = { daily, writing };
