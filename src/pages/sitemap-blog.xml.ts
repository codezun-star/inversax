import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const BASE = 'https://inversax.com';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', (e) => e.data.publicado !== false);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts
  .map(
    (p) => `  <url>
    <loc>${BASE}/blog/${p.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
