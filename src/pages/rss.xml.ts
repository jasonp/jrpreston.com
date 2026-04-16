import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const writing = await getCollection('writing', ({ data }) => !data.draft && !data.archive);

  const items = writing
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description ?? '',
      link: `/writing/${post.id.replace(/\.mdx?$/, '')}/`,
      categories: ['writing', ...(post.data.tags ?? [])],
    }))
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'jrpreston.com',
    description: "Essays and notes from Jason Preston.",
    site: context.site!,
    items,
  });
}
