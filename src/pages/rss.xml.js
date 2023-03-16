import rss from '@astrojs/rss';

export function get(context) {
	return rss({
		title: 'low-carbon.digital',
		description: 'A digital consultancy that makes beautiful, sustainable websites for people and planet.',
		site: context.site,
		items: [],
	})
}
