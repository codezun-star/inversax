# Calculadoras Financieras — Inversax

> Índice general. El detalle de cada categoría está en su archivo propio.
> **Total: 52 calculadoras** — lógica 100% client-side, sin APIs externas.

## Archivos de detalle

| Categoría | Archivo | Calculadoras |
|---|---|---|
| Inversión | [CALCULADORAS-INVERSION.md](CALCULADORAS-INVERSION.md) | 15 |
| Planificación | [CALCULADORAS-PLANIFICACION.md](CALCULADORAS-PLANIFICACION.md) | 15 |
| Forex | [CALCULADORAS-FOREX.md](CALCULADORAS-FOREX.md) | 13 |
| Divisas | [CALCULADORAS-DIVISAS.md](CALCULADORAS-DIVISAS.md) | 9 |

---

## Estado general (52 calculadoras)

### Inversión (15)

| # | Nombre | URL | Estado |
|---|--------|-----|--------|
| 1 | Interés Compuesto | `/calculadoras/interes-compuesto` | ✅ |
| 2 | ROI | `/calculadoras/roi` | ✅ |
| 3 | CAGR | `/calculadoras/cagr` | ✅ |
| 4 | Regla del 72 | `/calculadoras/regla-del-72` | ✅ |
| 5 | Inflación | `/calculadoras/inflacion` | ✅ |
| 6 | Dividendos | `/calculadoras/dividendos` | ✅ |
| 7 | DCA | `/calculadoras/dca` | ✅ |
| 8 | Valor Futuro | `/calculadoras/valor-futuro` | ✅ |
| 9 | VPN | `/calculadoras/vpn` | ✅ |
| 10 | Rendimiento de Cartera | `/calculadoras/rendimiento-cartera` | ✅ |
| 11 | Punto de Equilibrio | `/calculadoras/punto-equilibrio` | ✅ |
| 12 | Comparador de Inversiones | `/calculadoras/comparador-inversiones` | ✅ |
| 13 | Tasa de Rendimiento Requerida | `/calculadoras/tasa-requerida` | ✅ |
| 14 | Ahorro para una Meta | `/calculadoras/ahorro-meta` | ✅ |
| 15 | Margen de Seguridad | `/calculadoras/margen-seguridad` | ✅ |

### Planificación personal (15)

| # | Nombre | URL | Estado |
|---|--------|-----|--------|
| 1 | Meta de Ahorro | `/calculadoras/meta-ahorro` | ✅ |
| 2 | Fondo de Emergencia | `/calculadoras/fondo-emergencia` | ✅ |
| 3 | Préstamo | `/calculadoras/prestamo` | ✅ |
| 4 | Amortización | `/calculadoras/amortizacion` | ✅ |
| 5 | Jubilación | `/calculadoras/jubilacion` | ✅ |
| 6 | Independencia Financiera | `/calculadoras/independencia-financiera` | ✅ |
| 7 | Salario Neto | `/calculadoras/salario-neto` | ✅ |
| 8 | Presupuesto 50/30/20 | `/calculadoras/presupuesto-503020` | ✅ |
| 9 | Capacidad de Endeudamiento | `/calculadoras/capacidad-endeudamiento` | ✅ |
| 10 | Ahorro para Universidad | `/calculadoras/ahorro-universidad` | ✅ |
| 11 | Capital de Seguro de Vida | `/calculadoras/seguro-vida` | ✅ |
| 12 | Comparador de Plazos | `/calculadoras/comparador-plazos` | ✅ |
| 13 | Cuotas con Tarjeta de Crédito | `/calculadoras/cuotas-tarjeta` | ✅ |
| 14 | Alquiler vs Compra | `/calculadoras/alquiler-vs-compra` | ✅ |
| 15 | Inflación Personal | `/calculadoras/inflacion-personal` | ✅ |

### Forex y trading (13)

| # | Nombre | URL | Estado |
|---|--------|-----|--------|
| 1 | Valor del Pip | `/calculadoras/pips` | ✅ |
| 2 | Apalancamiento y Margen | `/calculadoras/apalancamiento` | ✅ |
| 3 | Riesgo / Beneficio | `/calculadoras/riesgo-beneficio` | ✅ |
| 4 | Costo del Spread | `/calculadoras/spread` | ✅ |
| 5 | Comisión de Broker | `/calculadoras/comision-broker` | ✅ |
| 6 | Tamaño de Posición | `/calculadoras/tamano-posicion` | ✅ |
| 7 | P&L Forex | `/calculadoras/pyl-forex` | ✅ |
| 8 | Conversor de Lotes | `/calculadoras/conversor-lotes` | ✅ |
| 9 | Swap / Overnight | `/calculadoras/swap-overnight` | ✅ |
| 10 | Drawdown y Recuperación | `/calculadoras/drawdown` | ✅ |
| 11 | Win Rate Mínimo | `/calculadoras/win-rate` | ✅ |
| 12 | Margen Libre | `/calculadoras/margen-libre` | ✅ |
| 13 | Apalancamiento Efectivo | `/calculadoras/apalancamiento-efectivo` | ✅ |

### Divisas (9)

| # | Nombre | URL | Estado |
|---|--------|-----|--------|
| 1 | Conversión de Divisas | `/calculadoras/conversion-divisas` | ✅ |
| 2 | Tipo de Cambio Efectivo | `/calculadoras/tipo-cambio-efectivo` | ✅ |
| 3 | Remesas | `/calculadoras/remesas` | ✅ |
| 4 | Cruce de Divisas | `/calculadoras/cruce-divisas` | ✅ |
| 5 | Inflación en Divisas | `/calculadoras/inflacion-divisa` | ✅ |
| 6 | Equivalencia de Salario | `/calculadoras/equivalencia-salario` | ✅ |
| 7 | Costo Tarjeta Extranjera | `/calculadoras/costo-tarjeta-extranjera` | ✅ |
| 8 | Impacto de la Devaluación | `/calculadoras/devaluacion` | ✅ |
| 9 | Paridad de Poder Adquisitivo | `/calculadoras/ppa` | ✅ |

---

## Arquitectura del listado

El índice `/calculadoras` usa tags de categoría con filtrado client-side:
- **Tag activa por defecto:** primera categoría (Inversión)
- **Lógica de filtrado:** `data-section` / `data-tag` vía `is:inline` script
- **Máximo visible por categoría:** 12. Si una categoría supera 12, aparece botón "Ver más" que enlaza a `/calculadoras/[slug-categoria]`
- **Páginas de categoría:** `src/pages/calculadoras/[categoria].astro` — generadas via `getStaticPaths()` desde `src/lib/calculadoras.ts`
- **URLs de categoría:** `/calculadoras/inversion` · `/calculadoras/planificacion` · `/calculadoras/forex` · `/calculadoras/divisas`
- **Contador dinámico:** el hero usa `grupos.reduce(...)` para mostrar el total real sin edición manual

---

## Fuente de datos

Todas las calculadoras están registradas en `src/lib/calculadoras.ts`:

```ts
export interface Calculadora {
  titulo: string;
  descripcion: string;
  href: string;
  svgPath: string;  // icono Lucide inline
}

export interface GrupoCalculadoras {
  categoria: string;      // nombre completo para encabezado
  tagLabel: string;       // etiqueta corta para el pill de filtro
  slug: string;           // slug de URL para la página de categoría
  color: string;          // color hex del grupo
  calculadoras: Calculadora[];
}
```

Para agregar una nueva calculadora:
1. Crear `src/pages/calculadoras/[slug].astro`
2. Agregar la entrada al array correspondiente en `src/lib/calculadoras.ts`
3. El contador del hero se actualiza automáticamente

---

## Monedas soportadas

Las calculadoras con selector de moneda incluyen las 19 monedas de los 22 países cubiertos:

| Código | Moneda | Decimales |
|--------|--------|-----------|
| USD | Dólar (Ecuador, Panamá, El Salvador, Puerto Rico) | 2 |
| COP | Peso colombiano | 0 |
| MXN | Peso mexicano | 2 |
| ARS | Peso argentino | 0 |
| CLP | Peso chileno | 0 |
| PEN | Sol peruano | 2 |
| UYU | Peso uruguayo | 2 |
| BOB | Boliviano | 2 |
| PYG | Guaraní paraguayo | 0 |
| VES | Bolívar venezolano | 2 |
| CRC | Colón costarricense | 0 |
| DOP | Peso dominicano | 2 |
| GTQ | Quetzal guatemalteco | 2 |
| HNL | Lempira hondureño | 2 |
| NIO | Córdoba nicaragüense | 2 |
| CUP | Peso cubano | 2 |
| BZD | Dólar de Belice | 2 |
| CAD | Dólar canadiense | 2 |
| EUR | Euro (España) | 2 |

### Patrón de formateo estándar

```typescript
const DEC: Record<string,number> = {USD:2,COP:0,MXN:2,ARS:0,CLP:0,PEN:2,UYU:2,BOB:2,PYG:0,VES:2,CRC:0,DOP:2,GTQ:2,HNL:2,NIO:2,CUP:2,BZD:2,CAD:2,EUR:2};
function fmt(n: number, m: string) {
  const d = DEC[m] ?? 2;
  return new Intl.NumberFormat('es',{minimumFractionDigits:d,maximumFractionDigits:d}).format(n) + ' ' + m;
}
```

---

## Patrones de layout estándar

- Grid 2 columnas: form card izquierda, resultados derecha
- Card de resultado principal: color sólido de la categoría (naranja, verde, azul, violeta)
- Stats secundarios en card blanca con bordes `#E2DDD8`
- Nota informativa: bg y borde de tono suave según categoría
- `@media(max-width:600px)`: grid → flex column via `<style>` inline al final del archivo
- Scripts siempre al final del archivo como bloque `<script>` (Astro los deduplica)

### Colores hint por categoría
| Categoría | Color acento | Hint bg | Hint border |
|---|---|---|---|
| Inversión | `#FF8C42` | `#FFF4EC` | `#FFD4A8` |
| Planificación | `#22C55E` | `#F0FDF4` | `#BBF7D0` |
| Forex | `#3B82F6` | `#EFF6FF` | `#BFDBFE` |
| Divisas | `#8B5CF6` | `#F5F3FF` | `#DDD6FE` |

---

## Próximo número de serie

Al agregar una nueva calculadora, el número siguiente es **#53**.
