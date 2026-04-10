import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('daily', ({ data }) => !data.draft);

  return rss({
    title: 'jrpreston.com — Daily',
    description: 'A daily AI-blogging experiment by Jason Preston.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description ?? '',
        link: `/daily/${post.id.replace(/\.mdx?$/, '')}/`,
        categories: post.data.tags ?? [],
      })),
  });
}
