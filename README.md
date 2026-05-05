# Inversax 📈

> Plataforma de contenido financiero en español para inversores latinoamericanos — construida con Astro, Drizzle ORM y Cloudflare Workers.

🌐 **Sitio en vivo:** [inversax.com](https://inversax.com)

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## Descripción

**Inversax** es un sitio web editorial de finanzas personales e inversiones, diseñado para el mercado latinoamericano (con foco en Colombia). Ofrece artículos, herramientas de análisis de mercados y datos en tiempo real sobre criptomonedas, forex, acciones y metales preciosos.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Astro (SSR + SSG) |
| Estilos | Tailwind CSS + inline styles |
| Base de datos | Neon (PostgreSQL serverless) |
| ORM | Drizzle ORM + `drizzle-kit push` |
| Deploy / Edge | Cloudflare Workers |
| Lenguaje | TypeScript estricto |
| Automatización | Cloudflare Cron Triggers |

---

## Características principales

### 🗞️ CMS editorial
- Artículos con slug, meta description, HTML body, categorías y keywords
- Sistema SEO-ready: Open Graph, meta tags y estructura semántica
- Diseño editorial tipo Bloomberg con tipografía `Playfair Display` y `DM Sans`

### 📊 Herramientas de mercado en tiempo real
- **Criptomonedas** — precios y detalles por activo (`/herramientas/cripto`)
- **Forex** — cotizaciones por par de divisas (`/herramientas/forex`)
- **Acciones** — datos bursátiles por empresa (`/herramientas/acciones`)
- **Metales preciosos** — oro, plata, platino (`/herramientas/metales`)
- **Dólar por país** — tipo de cambio para cada país de Latinoamérica (`/herramientas/dolar`)
- **Comparador de brokers** (`/herramientas/comparar-brokers`)
- Calculadoras: cripto y trading

### 📧 Newsletter con suscriptores
- Endpoint `POST /api/newsletter` con validación de email y manejo de duplicados
- Tabla `subscribers` en Neon con campos: email, país, fecha, estado
- Integración con Make (automatización de envío de correos externo)
- Formulario en footer con UX responsiva (desktop y mobile)

### ⚙️ Automatización con Cron Jobs
- `cron-worker.ts` ejecutado en Cloudflare Workers
- Módulos separados: `cron-acciones/` y `cron-social/`
- Publicación automática en redes sociales

---

## Estructura del proyecto

```
inversax/
├── src/
│   ├── pages/          # Rutas del sitio (Astro)
│   │   ├── api/        # Endpoints serverless
│   │   └── herramientas/  # Páginas de análisis financiero
│   ├── components/     # Header, Footer, Hero, etc.
│   ├── layouts/        # Layout base
│   ├── db/             # Esquemas y queries (Drizzle)
│   └── lib/            # Utilidades compartidas
├── cron-acciones/      # Cron job: actualización de acciones
├── cron-social/        # Cron job: publicación en redes
└── .wrangler/          # Config de Cloudflare Workers
```

---

## Base de datos

El proyecto usa **`drizzle-kit push`** para sincronizar el esquema directamente con Neon (sin migraciones tradicionales).

```ts
// Ejemplo: tabla subscribers
subscribers (
  id:         serial primary key,
  email:      text not null unique,
  pais:       text,
  created_at: timestamp default now(),
  active:     boolean default true
)
```

---

## Diseño visual

Sistema de diseño editorial tipo Bloomberg implementado desde cero:

- **Tema:** Claro, minimalista, alta legibilidad
- **Paleta principal:** Warm neutrals (`#FAFAF8`, `#1C1917`, `#B91C1C`)
- **Tipografía:** `Playfair Display` (headings) + `DM Sans` (body)
- **Colores por activo:** Cripto (azul), Forex (verde), Metales (ámbar), Acciones (gris)
- Más de 25 páginas migradas a tema claro con coherencia visual total

---

## Variables de entorno

```env
# Neon (PostgreSQL)
DATABASE_URL=

# Cloudflare Workers
CF_API_TOKEN=

# Otros servicios de terceros
...
```

---

## Scripts

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run db:push      # Sincronizar esquema con Neon
npm run deploy       # Deploy en Cloudflare Workers
```

---

## Autor

Desarrollado y mantenido de forma independiente como proyecto personal full-stack.

- Arquitectura, diseño y desarrollo: propios
- Contenido editorial: en español, orientado a Latinoamérica
- Audiencia objetivo: Colombia y región hispanohablante
