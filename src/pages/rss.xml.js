import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
	const posts = await getCollection('articles');
	return rss({
		stylesheet: '/rss/styles.xsl',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.datetime,
			description: post.data.description,
			link: `/articles/${post.slug}/`,
			content: sanitizeHtml(parser.render(post.body)),
		})),
	});
}
