import { z, defineCollection } from 'astro:content';

const notesCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
      footer: z.string().optional(),
    }),
});

export const collections = {
  'notes': notesCollection,
};