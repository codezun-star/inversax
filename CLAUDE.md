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

### URLs: trailing slash

`astro.config.mjs` tiene `trailingSlash: 'never'`. `vercel.json` tiene `trailingSlash: false` y `cleanUrls: true`. Todas las URLs son sin barra final: `/blog`, `/calculadoras`, `/brokers/co`.

---

## Estructura de archivos

```
InversaxV2/
├── CLAUDE.md
├── ARTICULOS.md              # Índice general de 32 artículos
├── ARTICULOS-BROKERS.md      # 22 artículos de brokers por país
├── ARTICULOS-ANALISIS.md     # 5 análisis de brokers
├── ARTICULOS-GUIAS.md        # 4 guías
├── ARTICULOS-GENERAL.md      # 1 artículo general
├── CALCULADORAS.md           # Índice de 52 calculadoras
├── CALCULADORAS-INVERSION.md
├── CALCULADORAS-PLANIFICACION.md
├── CALCULADORAS-FOREX.md
├── CALCULADORAS-DIVISAS.md
├── vercel.json               # cleanUrls: true, trailingSlash: false
├── package.json
├── astro.config.mjs          # output: static, trailingSlash: never, integrations: [tailwind()]
├── tailwind.config.mjs
├── tsconfig.json
└── src/
    ├── content/
    │   ├── config.ts         # defineCollection con schema Zod para blog
    │   └── blog/             # 32 artículos .md publicados
    ├── layouts/
    │   └── Layout.astro      # head, DM Sans font, Header, main slot, Footer
    ├── components/
    │   ├── Header.astro
    │   └── Footer.astro
    ├── lib/
    │   ├── brokers.ts        # Array de 7 brokers con links de afiliado reales
    │   ├── paises.ts         # Array de 22 países con moneda, métodos de pago y brokerRecomendado
    │   └── calculadoras.ts   # Array de 4 grupos con 52 calculadoras totales
    └── pages/
        ├── index.astro
        ├── 404.astro
        ├── brokers/
        │   ├── index.astro
        │   └── [pais].astro
        ├── calculadoras/
        │   ├── index.astro          # Listing con tags de filtro, máx 12 por categoría
        │   ├── [categoria].astro    # Páginas de categoría: /calculadoras/inversion, etc.
        │   └── [52 archivos .astro individuales]
        ├── blog/
        │   ├── [...page].astro  # Listado paginado (10/página): /blog, /blog/2, /blog/3...
        │   └── [slug].astro     # Artículo individual con botones de compartir
        ├── sitemap.xml.ts
        ├── sitemap-static.xml.ts
        ├── sitemap-blog.xml.ts
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

### Interfaz `Pais`

```ts
interface Pais {
  codigo: string;
  nombre: string;
  moneda: string;
  metodosPago: string[];
  descripcion: string;
  brokerRecomendado: string;  // ID del broker recomendado para ese país
}
```

### Broker recomendado por país

| Países | brokerRecomendado |
|--------|-------------------|
| `co`, `mx`, `cl`, `pe`, `ec`, `uy`, `bo`, `py`, `do`, `pr` | `'exness'` |
| `ar`, `cu`, `ve`, `cr`, `pa`, `gt`, `hn`, `sv`, `ni`, `bz` | `'xm'` |
| `ca`, `es` | `'ic-markets'` |

La lógica en `[pais].astro` busca en el array filtrado el broker cuyo `id` coincide con `pais.brokerRecomendado`. Si no lo encuentra (broker no disponible en ese país), usa `todos[0]` como fallback.

### Casos especiales con banner de advertencia en `[pais].astro`
- `cu` — sanciones OFAC; solo XM
- `ar` — cepo cambiario; solo XM
- `pr` — territorio EE.UU., USD
- `ve` — dolarización informal, Zinli/Zelle
- `sv` — Bitcoin legal tender
- `ca` — regulado por CIRO (ex-IIROC)

---

## Calculadoras (`src/lib/calculadoras.ts`)

**52 calculadoras** en 4 categorías. Fuente única de datos compartida entre `index.astro` y `[categoria].astro`.

| Categoría | slug | Color | Calculadoras |
|---|---|---|---|
| Inversión | `inversion` | `#FF8C42` | 15 |
| Planificación personal | `planificacion` | `#22C55E` | 15 |
| Forex y trading | `forex` | `#3B82F6` | 13 |
| Divisas | `divisas` | `#8B5CF6` | 9 |

Ver lista completa en [CALCULADORAS.md](CALCULADORAS.md).

### Comportamiento del listado `/calculadoras`

- Tags de categoría como pills; primer tag activo por defecto al cargar
- Secciones ocultas con `display:none` en HTML; JS toglea visibilidad
- Máximo 12 calculadoras visibles por categoría; botón "Ver más" aparece cuando hay más de 12
- Contador dinámico en el hero: `grupos.reduce((sum, g) => sum + g.calculadoras.length, 0)`

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

### Paginación

El listado del blog usa `src/pages/blog/[...page].astro` con `paginate()` de Astro:
- Página 1: `/blog` (10 artículos más recientes)
- Página 2+: `/blog/2`, `/blog/3`, etc.
- `pageSize: 10`
- Navegación con números de página y flechas prev/next

### Botones de compartir en artículos

Cada artículo individual (`[slug].astro`) incluye botones de compartir al final del contenido:
- **WhatsApp:** `https://wa.me/?text=TITULO — URL`
- **X (Twitter):** `https://x.com/intent/tweet?url=URL&text=TITULO`
- **Copiar link:** `navigator.clipboard.writeText(window.location.href)` con feedback visual "Copiado" (2s)

### Cómo crear un artículo nuevo

1. Crear `src/content/blog/[slug].md` donde el nombre del archivo ES el slug de la URL.
2. Escribir el frontmatter con los campos del schema.
3. El cuerpo puede ser Markdown o HTML — el contenido HTML pasa sin modificaciones.
4. Registrar en `ARTICULOS.md` (índice) y en el archivo de categoría correspondiente.

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
- Favicon: `/favicon.svg` (no `/logo.svg`)

---

## Lo que NO tiene (intencional)

- Precios en tiempo real
- Selector de país en el header
- Autenticación de usuarios
- CMS externo — el blog se gestiona con archivos `.md`
- Emojis

---

## Próximos pasos

- Página individual por broker — URL `/brokers/ver/[id]` para no colisionar con `/brokers/[pais]`
- Activar Google Analytics: descomentar snippet en `Layout.astro` con el Measurement ID real
- Artículo: XTB análisis completo para acciones/ETFs desde LATAM
- Artículo: Libertex — modelo zero spread explicado
- Artículo: Cómo retirar dinero de Exness / XM (muy buscado)
- Artículo: Gestión del riesgo en forex: guía completa
- Agregar más brokers al comparador (con o sin afiliado — usar homepage como link directo si no hay afiliado)
