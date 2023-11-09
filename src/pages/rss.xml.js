import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
	const notes = (await getCollection('notes')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
	return rss({
		title: 'low-carbon.digital',
		description: 'A digital consultancy that makes beautiful, sustainable websites for people and planet.',
		site: context.site,
		items: notes.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/notes/${post.slug}/`,
		})),
		stylesheet: '/rss/styles.xsl',
	});
}
