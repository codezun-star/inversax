# InversaxV2

Sitio web de comparación de brokers financieros para inversores latinoamericanos.
Dominio: **inversax.com**

---

## Objetivo del proyecto

Ayudar a inversores de habla hispana a encontrar el mejor broker para su país.
Modelo de negocio: **afiliados** — cada botón "Abrir cuenta en X" lleva un enlace con tracking.

**Tres pilares:**
1. **Comparador de brokers por país** — disponibilidad, regulación, depósito mínimo, métodos de pago locales
2. **Calculadoras financieras** — herramientas client-side estáticas, sin APIs externas
3. **Blog** — artículos SEO evergreen: brokers por país, guías de inversión, análisis de plataformas

---

## Stack técnico

| Tecnología | Versión | Uso |
|---|---|---|
| Astro | ^5.7.0 | Framework principal (`output: static`) |
| TypeScript | ^5.7.3 | Tipado estricto |
| Tailwind CSS | ^3.4.17 | Utilities de layout únicamente |

**Deploy:** Vercel — output estático, sin adaptador `@astrojs/vercel`. Vercel detecta Astro automáticamente.
**Blog:** Astro Content Collections con archivos `.md` en `src/content/blog/`. Sin base de datos.

---

## Estructura de archivos

```
InversaxV2/
├── CLAUDE.md
├── ARTICULOS.md              # Control de artículos publicados y pendientes
├── package.json
├── astro.config.mjs          # output: static, integrations: [tailwind()]
├── tailwind.config.mjs
├── tsconfig.json
└── src/
    ├── content/
    │   ├── config.ts         # defineCollection con schema Zod para blog
    │   └── blog/             # Artículos .md (22 publicados)
    ├── layouts/
    │   └── Layout.astro      # head, DM Sans font, Header, main slot, Footer
    ├── components/
    │   ├── Header.astro
    │   └── Footer.astro
    ├── lib/
    │   ├── brokers.ts        # Array de 7 brokers con links de afiliado reales
    │   └── paises.ts         # Array de 22 países con moneda y métodos de pago
    └── pages/
        ├── index.astro
        ├── 404.astro
        ├── brokers/
        │   ├── index.astro
        │   └── [pais].astro
        ├── calculadoras/     # index + 20 calculadoras individuales
        ├── blog/
        │   ├── index.astro   # Lista artículos via getCollection
        │   └── [slug].astro  # Artículo individual via getEntry + render
        ├── sitemap.xml.ts    # Índice de sitemaps
        ├── sitemap-static.xml.ts  # Páginas estáticas + países
        ├── sitemap-blog.xml.ts    # Artículos del blog
        ├── privacidad.astro
        ├── legal.astro
        ├── contacto.astro
        └── acerca.astro
```

---

## Paleta de diseño

| Token | Valor | Uso |
|---|---|---|
| Acento naranja | `#FF8C42` | CTAs, badges top, hover, links activos |
| Fondo página | `#F7F7F5` | Background del `<body>` |
| Fondo tarjetas | `#FFFFFF` | Cards |
| Fondo secundario | `#F0EDE7` | Badges inactivos, pills |
| Hero / Footer dark | `linear-gradient(135deg, #1A1A1A, #2D2520)` | Secciones oscuras |
| Texto principal | `#1A1A1A` | Títulos |
| Texto secundario | `#57534E` | Párrafos |
| Texto tenue | `#78716C` | Labels, fechas |
| Texto muy tenue | `#A8A29E` | Breadcrumbs, disclaimers |
| Borde estándar | `#E2DDD8` | Separadores, bordes de card |

**Fuente:** `DM Sans` (300–700) desde Google Fonts.

### Colores de nivel de usuario
| Nivel | Color |
|---|---|
| principiante | `#22C55E` |
| intermedio | `#3B82F6` |
| avanzado | `#8B5CF6` |
| todos | `#FF8C42` |

### Reglas de diseño

- **Sin emojis.** Todo ícono es SVG inline stroke-based (estilo Lucide).
- CSS custom properties para colores dinámicos de broker: `--bc`, `--bcbg`, `--nc`. Pasar como `style={'--bc:' + b.color + '; --bcbg:' + b.colorBg}`.
- **No usar template literals con expresiones dentro de atributos JSX.** Pre-computar valores como variables antes del return.
- Tailwind solo para layout: `flex`, `grid`, `gap-*`, `max-w-*`, `p-*`. No para colores ni tipografía.
- Hover en cards: `border-color → #FF8C42` + `box-shadow` sutil via `onmouseover`/`onmouseout`.
- `border-radius` de cards: 12–16px.

---

## Brokers (`src/lib/brokers.ts`)

| ID | Nombre | Cal. | Nivel | Link afiliado |
|---|---|---|---|---|
| `exness` | Exness | 4.8 | todos | `https://one.exnessonelink.com/a/c_oq7nroj1va` |
| `ic-markets` | IC Markets | 4.8 | avanzado | `https://icmarkets.com/?camp=90874` |
| `pepperstone` | Pepperstone | 4.7 | avanzado | `https://pepperstone.sjv.io/c/7061517/3194997/21941` |
| `xtb` | XTB | 4.5 | intermedio | `https://geolink.xtb.com/I0QSx` |
| `xm` | XM | 4.2 | principiante | `https://affs.click/nBBTT` |
| `libertex` | Libertex | 4.3 | intermedio | `https://fwd.cx/DMQ5TyRNANPA` |
| `binance` | Binance | 4.8 | todos | `https://www.binance.com/activity/referral-entry/CPA?ref=CPA_0011ND849R` |

Logos desde `https://icon.horse/icon/{dominio}`, excepto Binance (logo directo bnbstatic.com).

Links de afiliado siempre con `target="_blank" rel="noopener noreferrer sponsored"`.

---

## Países (`src/lib/paises.ts`)

22 países: `co`, `mx`, `ar`, `cl`, `pe`, `ec`, `uy`, `bo`, `py`, `ve`, `cr`, `pa`, `do`, `gt`, `hn`, `sv`, `ni`, `cu`, `pr`, `ca`, `bz`, `es`

Casos especiales con banner de advertencia en `[pais].astro`:
- `cu` — sanciones OFAC; solo XM
- `ar` — cepo cambiario; solo XM
- `pr` — territorio EE.UU., USD
- `ve` — dolarización informal, Zinli/Zelle
- `sv` — Bitcoin legal tender
- `ca` — regulado por CIRO (ex-IIROC)

---

## Blog — Content Collections

### Schema (`src/content/config.ts`)

```ts
{
  titulo: string,
  descripcion?: string,
  pais?: string,           // código de país o ausente para artículos generales
  categoria: 'brokers' | 'guias' | 'analisis' | 'general',
  fecha: string,           // ISO "YYYY-MM-DD" — solo para ordenación interna
  keywords: string[],      // array de strings
  autor: string,           // default 'Equipo Inversax'
  publicado: boolean,      // default true
}
```

### Cómo crear un artículo nuevo

1. Crear `src/content/blog/[slug].md` donde el nombre del archivo ES el slug de la URL.
2. Escribir el frontmatter con los campos del schema.
3. El cuerpo puede ser Markdown o HTML — el contenido HTML pasa sin modificaciones.
4. Registrar el artículo en `ARTICULOS.md` para control de duplicados.

### Reglas de artículos evergreen (OBLIGATORIO)

- **NUNCA incluir el año en el slug, título, descripción ni keywords.**
  - Correcto: `mejores-brokers-colombia`, "Mejores brokers para Colombia"
  - Incorrecto: `mejores-brokers-colombia-2026`, "Mejores brokers Colombia 2026"
- El campo `fecha` existe solo para ordenar artículos internamente — no se expone en la URL.
- Los artículos deben mantenerse válidos en años futuros sin cambiar de URL.

### Flujo de publicación

```
Crear src/content/blog/[slug].md → push a GitHub → Vercel rebuildea automáticamente
```

No se requieren comandos de seed ni base de datos.

---

## Sitemap (índice escalable)

| Archivo | URL | Contenido |
|---|---|---|
| `sitemap.xml.ts` | `/sitemap.xml` | Índice con links a los dos sitemaps |
| `sitemap-static.xml.ts` | `/sitemap-static.xml` | Páginas estáticas + 22 páginas de país |
| `sitemap-blog.xml.ts` | `/sitemap-blog.xml` | Un `<url>` por artículo del blog |

`public/robots.txt` apunta a `https://inversax.com/sitemap.xml`.

---

## Scripts

```bash
npm run dev       # astro dev
npm run build     # astro build
npm run preview   # preview del build estático
```

---

## Convenciones de código

- TypeScript estricto. Interfaces en los archivos `lib/` que las usan.
- `getStaticPaths()` obligatorio en toda ruta dinámica (`output: static`).
- En `.map()` con datos dinámicos: pre-computar valores como variables antes del return, no usar template literals en atributos JSX.
- CSS scoped en `<style>` para componentes complejos. CSS custom properties para colores por broker.

---

## SEO técnico

- Sitemap XML en 3 archivos (índice + estático + blog)
- `public/robots.txt` permite todo, apunta al sitemap
- `[pais].astro` — JSON-LD `ItemList` + `FinancialService` en `<head>`
- `[slug].astro` — JSON-LD `Article` en `<head>`
- GA4 snippet comentado en `Layout.astro` — buscar `G-XXXXXXXXXX` para activar

---

## Lo que NO tiene (intencional)

- Precios en tiempo real
- Selector de país en el header
- Autenticación de usuarios
- CMS externo — el blog se gestiona con archivos `.md`
- Emojis

---

## Próximos pasos

- Artículos de análisis por broker: Exness, IC Markets vs Pepperstone, XTB, XM (ver ARTICULOS.md)
- Guías pendientes: cómo elegir broker, trading forex para principiantes (ver ARTICULOS.md)
- Página individual por broker — URL `/brokers/ver/[id]` para no colisionar con `/brokers/[pais]`
- Activar Google Analytics: descomentar snippet en `Layout.astro` con el Measurement ID real
