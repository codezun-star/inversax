import type { APIRoute } from 'astro';
import { paises } from '../lib/paises';

const BASE = 'https://inversax.com';

export const GET: APIRoute = () => {
  const staticPages: Array<{ url: string; priority: string; changefreq: string }> = [
    { url: '',                                       priority: '1.0', changefreq: 'weekly'  },
    { url: '/brokers',                               priority: '0.9', changefreq: 'weekly'  },
    { url: '/calculadoras',                          priority: '0.8', changefreq: 'monthly' },
    { url: '/calculadoras/interes-compuesto',        priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/salario-neto',             priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/conversion-divisas',       priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/roi',                      priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/cagr',                     priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/regla-del-72',             priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/inflacion',                priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/meta-ahorro',              priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/fondo-emergencia',         priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/prestamo',                 priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/amortizacion',             priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/dividendos',               priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/dca',                      priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/jubilacion',               priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/independencia-financiera', priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/pips',                     priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/apalancamiento',           priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/riesgo-beneficio',         priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/spread',                   priority: '0.7', changefreq: 'monthly' },
    { url: '/calculadoras/comision-broker',          priority: '0.7', changefreq: 'monthly' },
    { url: '/blog',                                  priority: '0.8', changefreq: 'weekly'  },
    { url: '/privacidad',                            priority: '0.3', changefreq: 'yearly'  },
    { url: '/legal',                                 priority: '0.3', changefreq: 'yearly'  },
    { url: '/contacto',                              priority: '0.5', changefreq: 'yearly'  },
    { url: '/acerca',                                priority: '0.5', changefreq: 'yearly'  },
  ];

  const countryPages = paises.map((p) => ({
    url: `/brokers/${p.codigo}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...countryPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${BASE}${p.url}</loc>
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
