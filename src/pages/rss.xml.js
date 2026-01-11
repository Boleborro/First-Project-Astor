import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    // use an eager glob limited to the posts folder so frontmatter is available
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md', { eager: true })),
    customData: `<language>en-us</language>`,
  });
}