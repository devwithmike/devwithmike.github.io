import type { CollectionEntry } from 'astro:content';

const getSortedPosts = (posts: CollectionEntry<"articles">[]) =>
	posts
		.filter(({ data }) => !data.draft)
		.sort(
			(a, b) =>
				Math.floor(new Date(b.data.datetime).getTime() / 1000) -
				Math.floor(new Date(a.data.datetime).getTime() / 1000)
		);

export default getSortedPosts;

