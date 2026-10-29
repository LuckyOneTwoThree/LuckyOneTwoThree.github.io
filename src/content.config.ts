import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bside = z.object({
  context: z.string(),
  cut: z.string(),
  wrong: z.string(),
  next: z.string(),
}).optional();

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    oneLiner: z.string(),
    dek: z.string(),
    status: z.string(),
    role: z.string(),
    timeframe: z.string(),
    lastUpdate: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    themes: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    links: z.object({
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      download: z.string().url().optional(),
    }).optional(),
    cover: z.string().optional(),
    screenshots: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string() })).default([]),
    bside,
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    series: z.string(),
    dek: z.string(),
    readingTime: z.number(),
    status: z.string().default('published'),
    bside,
  }),
});

export const collections = { work, notes };
