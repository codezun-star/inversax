# Análisis SEO y de demanda de búsqueda — Inversax

> Documento de trabajo que acompaña la expansión de **+40 calculadoras** y **+10 artículos**.
> Objetivo: priorizar por intención de búsqueda real en español (LATAM + España), validar la
> estructura SEO existente y mapear palabras clave de cola larga sin duplicar contenido.
>
> *Elaborado: junio 2026. Las estimaciones de demanda son cualitativas (tiers), no cifras exactas
> de un keyword tool — se basan en intención y estacionalidad conocidas del nicho financiero hispano.*

---

## 1. Estado real del proyecto (antes de esta expansión)

| Activo | CLAUDE.md decía | Real en disco | Nota |
|---|---|---|---|
| Calculadoras | 52 | **60** | `src/lib/calculadoras.ts` ya tenía 60 entradas |
| Artículos | 32 | **59** | `src/content/blog/*.md` |
| Google Analytics | "comentado (G-XXXX)" | **Activo** (`G-E8YH3R6PPW`) | Layout.astro línea 120 |

Los índices `.md` (CALCULADORAS*.md, ARTICULOS*.md) estaban desfasados respecto al código.
Esta expansión deja **100 calculadoras** y **69 artículos**, y resincroniza los índices.

### Arquitectura que se autogenera (no requiere edición manual al crecer)
- **Sitemap estático** (`sitemap-static.xml.ts`) recorre `grupos` → toda calculadora nueva entra sola.
- **Sitemap blog** (`sitemap-blog.xml.ts`) recorre la colección → todo artículo nuevo entra solo.
- **Índice `/calculadoras`** y **páginas de categoría** leen `grupos` → tarjetas + "Ver más" automáticos.
- **Breadcrumb JSON-LD** de calculadoras se inyecta en `Layout.astro` por `pathname`.
- **Contador del hero** usa `grupos.reduce(...)`.

> Consecuencia: para una calculadora basta con (1) crear `src/pages/calculadoras/[slug].astro`
> y (2) añadir la entrada en `src/lib/calculadoras.ts`. Para un artículo basta con crear el `.md`.

---

## 2. Calculadoras más buscadas — análisis y selección (10 por categoría)

Criterio: alta intención de búsqueda en español + hueco no cubierto por las 60 existentes.
**Tier A** = demanda muy alta / cabecera; **Tier B** = alta; **Tier C** = media pero específica (long-tail valioso).

### Inversión (+10)
| Slug nuevo | Calculadora | Tier | Por qué / intención de búsqueda |
|---|---|---|---|
| `interes-simple` | Interés Simple | A | "calculadora interés simple" es cabecera; complementa (no duplica) interés compuesto |
| `plazo-fijo` | Plazo Fijo / CDT | A | "calculadora plazo fijo", "calcular CDT", "rendimiento depósito a plazo" — enorme en AR/CO/MX |
| `rentabilidad-inmueble` | Rentabilidad de un inmueble | A | "calcular rentabilidad alquiler", "rentabilidad inmobiliaria" — distinto de alquiler-vs-compra |
| `tir` | TIR (Tasa Interna de Retorno) | B | "como calcular la TIR", "TIR ejemplo" — par natural del VPN ya existente |
| `vivir-de-dividendos` | Vivir de dividendos | B | "cuánto necesito para vivir de dividendos" — intención aspiracional muy buscada |
| `rentabilidad-real` | Rentabilidad real (vs inflación) | B | "rentabilidad real vs nominal", "rendimiento ajustado por inflación" |
| `periodo-recuperacion` | Periodo de recuperación (Payback) | C | "payback de una inversión", "periodo de recuperación" — métrica de proyectos |
| `precio-promedio-acciones` | Precio promedio de acciones | C | "calcular precio promedio acciones", "promediar a la baja" |
| `costo-oportunidad` | Costo de oportunidad | C | "calcular costo de oportunidad" — concepto muy consultado por estudiantes |
| `rendimiento-bonos` | Rendimiento de un bono | C | "rendimiento de un bono", "yield de bono" — renta fija |

### Planificación personal (+10)
| Slug nuevo | Calculadora | Tier | Por qué / intención |
|---|---|---|---|
| `hipoteca` | Hipoteca (simulador) | A | "calculadora hipoteca", "simulador hipoteca" — cabecera absoluta; específica vs préstamo genérico |
| `aguinaldo` | Aguinaldo / prima | A | "calcular aguinaldo", "calcular prima de navidad" — estacional y masivo en LATAM |
| `credito-automotriz` | Crédito automotriz | A | "simulador crédito auto", "financiar carro" — alto volumen y comercial |
| `regla-4-por-ciento` | Regla del 4% (retiro seguro) | B | "regla del 4% retiro", "cuánto necesito para jubilarme" — fase de desacumulación (FIRE no la cubre) |
| `patrimonio-neto` | Patrimonio neto | B | "calcular patrimonio neto", "net worth" — pilar de finanzas personales |
| `ahorro-enganche` | Ahorro para el enganche/pie | B | "cuánto ahorrar para el enganche", "pie de casa" — par natural de hipoteca |
| `tasa-ahorro` | Tasa de ahorro | C | "tasa de ahorro", "qué porcentaje debo ahorrar" — métrica FIRE |
| `tiempo-pago-deuda` | Tiempo para pagar una deuda | C | "cuánto tardo en pagar mi tarjeta" — distinto de cuotas-tarjeta |
| `costo-real-auto` | Costo real de un auto | C | "cuánto cuesta tener un carro al mes" — depreciación + gasolina + seguro |
| `ahorro-habitos` | Ahorro por cambiar hábitos | C | "cuánto ahorro si dejo de fumar/café" — alto engagement, viral |

### Forex y trading (+10)
| Slug nuevo | Calculadora | Tier | Por qué / intención |
|---|---|---|---|
| `stop-loss-take-profit` | Stop Loss y Take Profit | A | "calcular stop loss", "niveles SL/TP" — esencial en gestión de riesgo |
| `reto-fondeo` | Reto de fondeo (prop firm) | A | "calculadora reto fondeo", "prop firm", "fondeo" — tendencia fuerte 2024-2026 |
| `compounding-trading` | Plan de capitalización (compounding) | B | "compounding plan forex", "plan de interés compuesto trading" |
| `margin-call` | Nivel de Margin Call / Stop Out | B | "nivel margin call", "stop out" — complementa margen libre |
| `distancia-pips` | Distancia en pips entre dos precios | B | "calcular pips entre dos precios" — utilidad rápida muy buscada |
| `valor-punto-indices` | Valor del punto (índices/acciones) | B | "valor del punto US30/NAS100" — pip aplicado a índices CFD |
| `profit-factor` | Profit Factor | C | "profit factor trading", "factor de beneficio" — backtesting |
| `expectativa-trading` | Expectativa matemática | C | "expectativa matemática trading", "esperanza por operación" |
| `ratio-sharpe` | Ratio de Sharpe | C | "calcular ratio de Sharpe" — evaluación de estrategias |
| `riesgo-de-ruina` | Riesgo de ruina | C | "risk of ruin", "riesgo de quiebra trading" |

### Divisas (+10)
| Slug nuevo | Calculadora | Tier | Por qué / intención |
|---|---|---|---|
| `dolar-mep` | Dólar MEP / CCL | A | "dólar MEP hoy", "cómo calcular dólar MEP" — masivo en Argentina |
| `dolar-tarjeta` | Dólar tarjeta (impuestos) | A | "dólar tarjeta", "dólar ahorro con impuestos" — AR; evergreen con % editable |
| `conversion-cripto` | Conversión cripto ↔ moneda local | A | "cuánto es 1 USDT en pesos", "convertir cripto a pesos" |
| `presupuesto-viaje` | Presupuesto de viaje en otra moneda | B | "presupuesto de viaje", "cuánto dinero llevar a [país]" |
| `tipo-cambio-promedio` | Tipo de cambio promedio | B | "precio promedio del dólar comprado", "tipo de cambio promedio" |
| `precio-importacion` | Costo de importación | B | "calcular costo de importación", "cuánto sale traer de EE.UU." |
| `remesa-inversa` | Remesa inversa (cuánto enviar) | C | "cuánto enviar para que lleguen X" — resuelve el monto de origen |
| `spread-cambiario` | Spread cambiario (compra/venta) | C | "brecha compra venta dólar", "cuánto pierdo en el cambio" |
| `ganancia-dolar` | Ganancia por comprar/vender dólares | C | "cuánto gané con el dólar", ganancia nominal vs real |
| `arbitraje-dolar-cripto` | Arbitraje dólar/cripto | C | "comprar dólar con cripto", "USDT vs dólar oficial/blue" — AR/VE |

---

## 3. Artículos más buscados — selección (+10, todos long-tail, sin duplicar)

Cada artículo nuevo se ancla a una calculadora nueva → **interlinking** fuerte y funnel a brokers.

| Slug | Título | Categoría | Calculadora ancla | Cola larga principal |
|---|---|---|---|---|
| `como-calcular-interes-cdt-plazo-fijo` | Cómo calcular el interés de un CDT o plazo fijo | guias | `plazo-fijo` | "cómo se calculan los intereses de un CDT" |
| `que-es-la-tir-y-como-se-calcula` | Qué es la TIR y cómo se calcula | guias | `tir` | "qué es la TIR y para qué sirve" |
| `como-calcular-rentabilidad-alquiler` | Cómo calcular la rentabilidad de un alquiler | guias | `rentabilidad-inmueble` | "cómo saber si un inmueble es buena inversión" |
| `cuanto-necesito-para-vivir-de-dividendos` | Cuánto necesitas para vivir de los dividendos | general | `vivir-de-dividendos` | "cuánto dinero para vivir de dividendos" |
| `como-calcular-patrimonio-neto` | Cómo calcular tu patrimonio neto | guias | `patrimonio-neto` | "qué es el patrimonio neto y cómo se calcula" |
| `regla-del-4-por-ciento-jubilacion` | La regla del 4%: cuánto necesitas para jubilarte | guias | `regla-4-por-ciento` | "regla del 4% para retirarse" |
| `como-calcular-tamano-posicion-forex` | Cómo calcular el tamaño de posición en forex | guias | `stop-loss-take-profit` | "cuánto arriesgar por operación forex" |
| `que-es-el-dolar-mep-como-comprarlo` | Qué es el dólar MEP y cómo comprarlo | guias (ar) | `dolar-mep` | "cómo comprar dólar MEP paso a paso" |
| `stop-loss-y-take-profit-guia` | Stop loss y take profit: cómo ponerlos bien | guias | `stop-loss-take-profit` | "dónde poner el stop loss" |
| `que-son-los-retos-de-fondeo-prop-firms` | Qué son los retos de fondeo (prop firms) | guias | `reto-fondeo` | "cómo pasar un reto de fondeo" |

---

## 4. Validación de la estructura SEO actual

### ✅ Lo que está correcto
- **Sitemap index escalable** (`/sitemap.xml` → estático + blog). Autogenerado desde datos.
- **`robots.txt`** apunta al sitemap; permite todo.
- **Canonical** por página en `Layout.astro` (`Astro.url.href` o prop).
- **`trailingSlash: 'never'`** coherente entre `astro.config.mjs` y `vercel.json` (`cleanUrls`).
- **JSON-LD por tipo de página**: Organization+WebSite global, BreadcrumbList (blog/calc/país),
  Article (blog), FAQPage (artículos con `faq` y calculadoras), ItemList+FinancialService (país).
- **OG + Twitter Card** completos, `og:locale=es_LA`, imagen por defecto.
- **Regla evergreen** (sin año en slug/título/keywords) — respetada en todo el contenido nuevo.
- **`<h1>` único por página**, jerarquía `h2/h3` correcta en `.prose`.

### 🔧 Mejoras aplicadas en esta expansión
1. **Interlinking sistemático**: cada calculadora nueva enlaza a 1-2 calculadoras o artículos
   relacionados, y cada artículo nuevo enlaza a su calculadora ancla y a brokers. Reduce páginas
   huérfanas y reparte autoridad interna.
2. **FAQPage JSON-LD** en las 40 calculadoras nuevas (rich results de preguntas) y `faq` en
   frontmatter de los 10 artículos nuevos.
3. **`description` con cola larga** y mención de países en cada `<title>`/meta nuevos.
4. **Resincronización de índices** `.md` para mantener el repositorio "ordenado" y auditable.

### ⚠️ Pendientes recomendados (no bloqueantes, fuera del alcance de esta entrega)
- `CLAUDE.md` declara GA "comentado" pero está **activo**; conviene actualizar esa sección.
- Falta imagen OG por página (todas usan `/og/home.png`). Generar OG dinámico mejoraría el CTR social.
- Las páginas de calculadora no exponen `datePublished/dateModified`; opcional añadir `WebApplication`/`SoftwareApplication` schema si se desea posicionar como herramienta.

---

## 5. Mapa de palabras clave de cola larga (resumen)

**Patrón calculadoras:** `calculadora de [tema]`, `cómo calcular [tema]`, `[tema] ejemplo`,
`[tema] fórmula`, `[tema] [país/moneda]`. Cada página nueva ataca 3-5 variaciones en
`<title>`, meta description, H1/H2 y FAQ.

**Patrón artículos:** pregunta natural (`qué es…`, `cómo…`, `cuánto…`) + modificador LATAM
(`desde Colombia/México/Argentina`, `en LATAM`, `paso a paso`). Las FAQ capturan el formato
"People Also Ask".

**No se duplicó** ningún slug, título ni intención ya cubiertos por las 60 calculadoras y 59
artículos previos (verificado contra `calculadoras.ts` y `src/content/blog/`).
</content>
</invoke>
