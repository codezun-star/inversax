# InversaxV2

Sitio web de comparación de brokers financieros para inversores latinoamericanos.
Dominio: **inversax.com**

---

## Objetivo del proyecto

Ayudar a inversores de habla hispana a encontrar el mejor broker para su país.
El modelo de negocio es **afiliados**: cada botón "Abrir cuenta en X" lleva un enlace de afiliado con tracking.

**Tres pilares:**
1. **Comparador de brokers por país** — qué brokers están disponibles, cuál es el recomendado, regulación, depósito mínimo, métodos de pago locales
2. **Calculadoras financieras** — herramientas estáticas con lógica client-side (sin APIs externas)
3. **Blog** — artículos SEO: brokers por país, guías de inversión, análisis de plataformas

---

## Stack técnico

| Tecnología | Versión | Uso |
|---|---|---|
| Astro | ^5.7.0 | Framework principal (`output: static`) |
| TypeScript | ^5.7.3 | Tipado estricto en todo el proyecto |
| Tailwind CSS | ^3.4.17 | Utilities de layout únicamente |
| Drizzle ORM | ^0.38.3 | Queries al blog SQLite |
| better-sqlite3 | ^11.7.0 | Driver SQLite para Node.js (build time) |
| tsx | ^4.19.2 | Ejecutar scripts TypeScript directamente |
| drizzle-kit | ^0.29.1 | CLI para gestión del schema |

**Deploy:** Vercel — output estático, sin adaptador Astro. Vercel detecta Astro automáticamente.
**Base de datos:** SQLite local (`inversax.db`) — solo para el blog, leída en build time via `getStaticPaths()`.

---

## Estructura de archivos

```
InversaxV2/
├── CLAUDE.md
├── package.json
├── astro.config.mjs          # output: static, vite.ssr.external: ['better-sqlite3']
├── tailwind.config.mjs
├── drizzle.config.ts         # dialect: sqlite, url: ./inversax.db
├── tsconfig.json
├── inversax.db               # SQLite generado por seed (NO se sube al repo con .gitignore)
└── src/
    ├── env.d.ts
    ├── layouts/
    │   └── Layout.astro      # head, DM Sans font, Header, main slot, Footer
    ├── components/
    │   ├── Header.astro      # Sticky blanco, nav: Brokers | Calculadoras | Blog, CTA naranja
    │   └── Footer.astro      # Dark (#1A1A1A), links por país, calculadoras, copyright
    ├── lib/
    │   ├── brokers.ts        # Array de 7 brokers con links de afiliado reales
    │   └── paises.ts         # Array de 14 países con moneda y métodos de pago
    ├── db/
    │   ├── schema.ts         # Tabla `posts` (Drizzle SQLite)
    │   ├── index.ts          # Instancia `db` exportada
    │   └── seed.ts           # Crea la DB e inserta artículos (idempotente con INSERT OR IGNORE)
    └── pages/
        ├── index.astro       # Homepage: hero dark + top brokers + grid países + calculadoras + CTA
        ├── 404.astro
        ├── brokers/
        │   ├── index.astro   # Grid de 14 países con broker top por país
        │   └── [pais].astro  # Página por país: cards premium + tabla comparativa
        ├── calculadoras/
        │   ├── index.astro
        │   ├── interes-compuesto.astro
        │   ├── salario-neto.astro
        │   └── conversion-divisas.astro
        ├── privacidad.astro  # Política de privacidad
        ├── legal.astro       # Aviso legal
        ├── contacto.astro    # Contacto (codezun@gmail.com)
        ├── acerca.astro      # Sobre nosotros
        ├── sitemap.xml.ts    # Generador de sitemap XML (build time)
        └── blog/
            ├── index.astro   # Lista de artículos desde SQLite
            └── [slug].astro  # Artículo individual + CTA brokers al final
```

---

## Paleta de diseño

| Token | Valor | Uso |
|---|---|---|
| Acento naranja | `#FF8C42` | CTAs, badges top, hover, links activos, hero pills |
| Fondo página | `#F7F7F5` | Background del `<body>` |
| Fondo tarjetas | `#FFFFFF` | Cards, formularios |
| Fondo secundario | `#F0EDE7` | Badges inactivos, pills de plataforma |
| Hero / Footer dark | `linear-gradient(135deg, #1A1A1A, #2D2520)` | Secciones oscuras |
| Texto principal | `#1A1A1A` | Títulos, valores clave |
| Texto secundario | `#57534E` | Párrafos, descripciones |
| Texto tenue | `#78716C` | Labels, fechas |
| Texto muy tenue | `#A8A29E` | Breadcrumbs, disclaimers |
| Texto dark muted | `#A09890` | Subtítulos sobre fondo oscuro |
| Texto dark muy tenue | `#6B6460` | Labels sobre fondo oscuro |
| Borde estándar | `#E2DDD8` | Separadores, bordes de card |

**Fuente:** `DM Sans` (300–700) desde Google Fonts — única fuente del proyecto.

### Colores de nivel de usuario
| Nivel | Color |
|---|---|
| principiante | `#22C55E` (verde) |
| intermedio | `#3B82F6` (azul) |
| avanzado | `#8B5CF6` (púrpura) |
| todos | `#FF8C42` (naranja) |

### Reglas de diseño

- **Sin emojis.** Todo ícono es SVG inline stroke-based (estilo Lucide).
- Las páginas de broker usan **CSS custom properties** para colores dinámicos por broker: `--bc` (color), `--bcbg` (color fondo), `--nc` (color nivel). Se pasan como `style={'--bc:' + b.color + '; --bcbg:' + b.colorBg}` en el elemento raíz y se usan con `var(--bc)` en el CSS scoped.
- **No usar template literals con expresiones dentro de atributos JSX** (`style={`...${expr}...`}`). Causa errores en el compilador Astro/esbuild. Pre-computar siempre los valores como variables antes del `return` del JSX.
- Tailwind solo para utilities de layout: `flex`, `grid`, `gap-*`, `max-w-*`, `p-*`. No para colores ni tipografía.
- Hover en cards: `border-color → #FF8C42` + `box-shadow` sutil. Se aplica con `onmouseover`/`onmouseout`.
- `border-radius` de cards: 12–16px.

---

## Brokers (`src/lib/brokers.ts`)

### Brokers activos con links de afiliado reales

| ID | Nombre | Cal. | Nivel | Link afiliado |
|---|---|---|---|---|
| `exness` | Exness | 4.8 | todos | `https://one.exnessonelink.com/a/c_oq7nroj1va` |
| `ic-markets` | IC Markets | 4.8 | avanzado | `https://icmarkets.com/?camp=90874` |
| `pepperstone` | Pepperstone | 4.7 | avanzado | `https://pepperstone.sjv.io/c/7061517/3194997/21941` |
| `xtb` | XTB | 4.5 | intermedio | `https://geolink.xtb.com/I0QSx` |
| `xm` | XM | 4.2 | principiante | `https://affs.click/nBBTT` |
| `libertex` | Libertex | 4.3 | intermedio | `https://fwd.cx/DMQ5TyRNANPA` |
| `binance` | Binance | 4.8 | todos | `https://www.binance.com/activity/referral-entry/CPA?ref=CPA_0011ND849R` |

### Interfaz `Broker` (campos relevantes)

```ts
{
  id, nombre, tagline, descripcion,
  logo: string,          // URL — icon.horse o logo directo
  color: string,         // Color de marca del broker (hex)
  colorBg: string,       // Color de fondo suave del broker (hex)
  badge?: string,        // Texto del badge superior (ej. "Mejor para principiantes")
  tipo: string,          // "Forex & CFD", "Exchange de Criptomonedas", etc.
  regulacion: string[],
  depositoMinimo: number | null,   // null = sin mínimo
  monedaDeposito: string,
  spread, comision, apalancamientoMax,
  plataformas: string[],
  tiposActivos: string[],
  cuentas: string[],
  comisionInactividad: string,
  paises: string[],      // Códigos de país: ['co', 'mx', 'cl', ...]
  afiliado: string,      // Link de afiliado real
  nivelUsuario: 'principiante' | 'intermedio' | 'avanzado' | 'todos',
  pros: string[],        // 3 ventajas principales
  contras: string[],     // 2 desventajas principales
  calificacion: number,  // 0–5
  fundado: number,
  sede: string,
}
```

### Logos de brokers
Se cargan dinámicamente desde `https://icon.horse/icon/{dominio}` para todos excepto Binance que usa su logo directo en `bnbstatic.com`.

---

## Países (`src/lib/paises.ts`)

22 países (todos con comunidad hispanohablante significativa):

`co`, `mx`, `ar`, `cl`, `pe`, `ec`, `uy`, `bo`, `py`, `ve`, `cr`, `pa`, `do`, `gt`, `hn`, `sv`, `ni`, `cu`, `pr`, `ca`, `bz`, `es`

**Casos especiales con banner de advertencia en la página (`[pais].astro`):**
- `cu` — acceso muy limitado por sanciones OFAC; solo XM
- `ar` — restricciones cambiarias; solo XM disponible
- `pr` — territorio de EE.UU. (USD); Exness, XM, Binance
- `ve` — dolarización informal; Zinli/Zelle como métodos de pago
- `sv` — economía dolarizada + Bitcoin legal tender
- `ca` — regulado por IIROC; Pepperstone, IC Markets, XTB, Binance disponibles

Cada país tiene: `codigo`, `nombre`, `moneda`, `metodosPago[]`, `descripcion`.

**Funciones exportadas:**
- `getPais(codigo)` — retorna el `Pais` por código
- (en `brokers.ts`) `getBrokersByPais(codigo)` — brokers filtrados por país, ordenados por calificación
- (en `brokers.ts`) `getBrokerRecomendado(codigo)` — el broker con mayor calificación para ese país

---

## Blog (SQLite)

### Schema (`src/db/schema.ts`)

```ts
posts {
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo          TEXT NOT NULL,
  slug            TEXT NOT NULL UNIQUE,
  descripcion     TEXT,
  contenido       TEXT,     // HTML
  pais            TEXT,     // código de país o null para artículos generales
  categoria       TEXT,     // 'brokers' | 'guias' | 'analisis' | 'general'
  autor           TEXT DEFAULT 'Equipo Inversax',
  publicado       INTEGER,  // boolean (0/1)
  fecha_publicacion TEXT,
  imagen          TEXT,
  keywords        TEXT,     // comma-separated
}
```

### Flujo para agregar artículos

1. Editar `src/db/seed.ts` — agregar objeto al array `articulos`
2. `npm run db:seed` — crea/actualiza `inversax.db` (idempotente con `INSERT OR IGNORE`)
3. `npm run build` o hacer push a GitHub (Vercel rebuildea automáticamente)

Los artículos se pre-renderizan como HTML estático en build time via `getStaticPaths()`.

### Artículos seed incluidos

| Slug | País | Categoría |
|---|---|---|
| `mejores-brokers-colombia-2025` | co | brokers |
| `mejores-brokers-mexico-2025` | mx | brokers |
| `mejores-brokers-chile-2025` | cl | brokers |
| `como-elegir-un-broker-guia-completa` | — | guias |
| `etoro-analisis-latinoamerica-2025` | — | analisis |

---

## Scripts

```bash
npm run dev          # tsx src/db/seed.ts && astro dev
npm run build        # tsx src/db/seed.ts && astro build
npm run db:seed      # Solo crea/actualiza inversax.db
npm run preview      # Preview del build estático
```

---

## Convenciones de código

- TypeScript estricto. Interfaces en los archivos `lib/` que las usan.
- Sin comentarios obvios. Solo donde el WHY no es evidente.
- `getStaticPaths()` obligatorio en toda ruta dinámica (output: static).
- Links de afiliado siempre: `target="_blank" rel="noopener noreferrer sponsored"`.
- Seed idempotente con `INSERT OR IGNORE INTO`.
- En páginas con datos dinámicos por item (brokers), pre-computar todos los valores como variables antes del `return` en el `.map()`. No usar template literals dentro de atributos JSX.
- CSS scoped en `<style>` dentro del `.astro` para componentes complejos como `[pais].astro`.
- CSS custom properties (`var(--bc)`, `var(--bcbg)`, `var(--nc)`) para pasar colores dinámicos de broker a los estilos scoped.

---

## Decisiones técnicas importantes

### Por qué `output: static` y no SSR
Todo el contenido se genera en build time. Los datos de brokers son estáticos (TypeScript), el blog es SQLite leído en build. No hay endpoints dinámicos. Vercel sirve HTML puro → carga instantánea, sin cold starts, sin costos de función.

### Por qué SQLite y no Neon/Postgres para el blog
El blog es simple y de baja frecuencia de actualización. SQLite en el repo elimina toda latencia de red en build time. Para escalar a más writers o edición online se migraría a Neon + D1.

### Por qué no usar el adaptador `@astrojs/vercel`
Con `output: static`, Vercel detecta Astro nativamente. El adaptador solo añade valor para rutas SSR. Si en el futuro se necesita SSR, se agrega el adaptador y se cambia a `output: hybrid`.

### Problema conocido: template literals en JSX
El compilador Astro/esbuild lanza `Expected "}" but found ":"` cuando se usan template literals con expresiones complejas dentro de atributos JSX (ej. `style={`color:${obj[key]}18`}`). La solución es pre-computar todos los valores como variables string antes del `return` usando concatenación, y pasar CSS custom properties para los colores dinámicos.

---

## Lo que NO tiene este proyecto (intencional)

- Precios en tiempo real ni ticker de cotizaciones
- Herramientas de acciones/cripto/forex en vivo
- Selector de país en el header
- Autenticación de usuarios
- CMS externo — el blog se gestiona via `seed.ts` + SQLite local
- Emojis — todo es SVG

---

## Páginas legales

| Ruta | Descripción |
|---|---|
| `/privacidad` | Política de privacidad: cookies, GA4, afiliados, publicidad futura, derechos del usuario |
| `/legal` | Aviso legal: descargo financiero, política de afiliados, propiedad intelectual |
| `/contacto` | Página de contacto con email `codezun@gmail.com` y tipos de consulta |
| `/acerca` | Sobre nosotros: misión, qué hace el sitio, transparencia sobre afiliados, CTA a contacto |

---

## SEO técnico implementado

- **Sitemap XML** — `src/pages/sitemap.xml.ts` genera `/sitemap.xml` dinámico en build time con todas las páginas estáticas, países y posts del blog
- **robots.txt** — `public/robots.txt` permite todo + apunta al sitemap
- **Schema.org en páginas de broker** — `[pais].astro` incluye `ItemList` + `FinancialService` JSON-LD en el `<head>`
- **Schema.org en artículos del blog** — `[slug].astro` incluye `Article` JSON-LD en el `<head>`
- **GA4 placeholder** — `Layout.astro` tiene el snippet comentado listo para descomentar cuando se tenga el Measurement ID (buscar `G-XXXXXXXXXX`)

---

## Próximos pasos sugeridos

- Artículos de blog por país: PE, AR, EC, UY, BO (pospuesto — se hará por separado)
- Artículos de análisis por broker: Exness, Pepperstone, IC Markets, XM, XTB (pospuesto)
- Más calculadoras: ahorro mensual, ROI, CAGR, inflación, hipoteca
- Página individual por broker — requiere nueva URL `/brokers/ver/[id]` para no colisionar con `/brokers/[pais]`
- Activar Google Analytics: reemplazar `G-XXXXXXXXXX` en `Layout.astro` y descomentar el bloque
- Actualizar links de afiliado en `src/lib/brokers.ts` si cambian los programas
