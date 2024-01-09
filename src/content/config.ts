import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		datetime: z.date(),
		description: z.string(),
		// image: z.object({
		// 	url: z.string(),
		// 	alt: z.string()
		// }),
		tags: z.array(z.string()),
		draft: z.boolean()
	})
});

export const collections = {
	articles: articlesCollection,
};
