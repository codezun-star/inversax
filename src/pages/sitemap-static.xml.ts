import type { APIRoute } from 'astro';
import { paises } from '../lib/paises';
import { grupos } from '../lib/calculadoras';

const BASE = 'https://inversax.com';
const LASTMOD = new Date().toISOString().slice(0, 10);

interface Entry {
  url: string;
  priority: string;
  changefreq: string;
}

export const GET: APIRoute = () => {
  // Páginas núcleo del sitio
  const corePages: Entry[] = [
    { url: '',             priority: '1.0', changefreq: 'weekly'  },
    { url: '/brokers',     priority: '0.9', changefreq: 'weekly'  },
    { url: '/calculadoras', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog',        priority: '0.8', changefreq: 'weekly'  },
    { url: '/acerca',      priority: '0.5', changefreq: 'yearly'  },
    { url: '/contacto',    priority: '0.5', changefreq: 'yearly'  },
    { url: '/privacidad',  priority: '0.3', changefreq: 'yearly'  },
    { url: '/legal',       priority: '0.3', changefreq: 'yearly'  },
  ];

  // Una página por país: /brokers/co, /brokers/mx, ...
  const countryPages: Entry[] = paises.map((p) => ({
    url: `/brokers/${p.codigo}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  // Páginas de categoría de calculadoras: /calculadoras/inversion, ...
  const categoryPages: Entry[] = grupos.map((g) => ({
    url: `/calculadoras/${g.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  // Todas las calculadoras individuales, generadas desde la fuente de datos
  const calculatorPages: Entry[] = grupos.flatMap((g) =>
    g.calculadoras.map((c) => ({
      url: c.href,
      priority: '0.6',
      changefreq: 'monthly',
    }))
  );

  const allPages = [
    ...corePages,
    ...countryPages,
    ...categoryPages,
    ...calculatorPages,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${BASE}${p.url}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
