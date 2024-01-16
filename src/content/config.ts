import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		datetime: z.date(),
		description: z.string(),
		tags: z.array(z.string()),
		draft: z.boolean(),
		image: z.object({
			src: z.string(),
			alt: z.string()
		}).optional(),
	}),
});

export const collections = { articles };
