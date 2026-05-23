# Calculadoras Financieras — Inversax

Documentación de las 20 calculadoras financieras del sitio.
Todas son estáticas: lógica 100% client-side, sin APIs externas.

---

## Estado general

| # | Nombre | URL | Categoría | Moneda | Estado |
|---|--------|-----|-----------|--------|--------|
| 1 | Interés Compuesto | `/calculadoras/interes-compuesto` | Inversión | Todas | ✅ |
| 2 | ROI | `/calculadoras/roi` | Inversión | Todas | ✅ |
| 3 | CAGR | `/calculadoras/cagr` | Inversión | — (%) | ✅ |
| 4 | Regla del 72 | `/calculadoras/regla-del-72` | Inversión | — (%) | ✅ |
| 5 | Inflación | `/calculadoras/inflacion` | Inversión | Todas | ✅ |
| 6 | Dividendos | `/calculadoras/dividendos` | Inversión | Todas | ✅ |
| 7 | DCA | `/calculadoras/dca` | Inversión | Todas | ✅ |
| 8 | Meta de Ahorro | `/calculadoras/meta-ahorro` | Planificación | Todas | ✅ |
| 9 | Fondo de Emergencia | `/calculadoras/fondo-emergencia` | Planificación | Todas | ✅ |
| 10 | Préstamo | `/calculadoras/prestamo` | Planificación | Todas | ✅ |
| 11 | Amortización | `/calculadoras/amortizacion` | Planificación | Todas | ✅ |
| 12 | Jubilación | `/calculadoras/jubilacion` | Planificación | Todas | ✅ |
| 13 | Independencia Financiera (FIRE) | `/calculadoras/independencia-financiera` | Planificación | Todas | ✅ |
| 14 | Salario Neto | `/calculadoras/salario-neto` | Planificación | Por país | ✅ |
| 15 | Valor del Pip | `/calculadoras/pips` | Forex | USD | ✅ |
| 16 | Apalancamiento y Margen | `/calculadoras/apalancamiento` | Forex | Multi | ✅ |
| 17 | Riesgo / Beneficio | `/calculadoras/riesgo-beneficio` | Forex | USD | ✅ |
| 18 | Costo del Spread | `/calculadoras/spread` | Forex | USD | ✅ |
| 19 | Comisión de Broker | `/calculadoras/comision-broker` | Forex | USD | ✅ |
| 20 | Conversión de Divisas | `/calculadoras/conversion-divisas` | Divisas | 21 monedas | ✅ |

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

---

## Patrones de código

### Formateo de moneda (DEC map)
```typescript
const DEC: Record<string,number> = {USD:2,COP:0,MXN:2,ARS:0,CLP:0,PEN:2,UYU:2,BOB:2,PYG:0,VES:2,CRC:0,DOP:2,GTQ:2,HNL:2,NIO:2,CUP:2,BZD:2,CAD:2,EUR:2};
function fmt(n: number, m: string) {
  const d = DEC[m] ?? 2;
  return new Intl.NumberFormat('es',{minimumFractionDigits:d,maximumFractionDigits:d}).format(n) + ' ' + m;
}
```

### Layout estándar
- Grid 2 columnas: form card izquierda, resultados derecha
- Card de resultado principal: color sólido (naranja `#FF8C42`, verde `#22C55E`, rojo `#EF4444`, etc.)
- Stats secundarios en card blanca con bordes `#E2DDD8`
- Nota informativa en card `#FFF4EC` / borde `#FFD4A8`
- `@media(max-width:600px)`: grid → flex column

---

## Categorías y lógica

### Inversión
- **Interés compuesto**: `capital * (1+r/12)^n + aporte * ((1+r/12)^n - 1) / (r/12)`
- **ROI**: `(Vf - Vi) / Vi * 100`. ROI anualizado = CAGR
- **CAGR**: `(Vf/Vi)^(1/n) - 1`
- **Regla del 72**: `72 / tasa` → años; `72 / años` → tasa
- **Inflación**: `monto / (1 + inf/100)^n` → poder adquisitivo futuro
- **Dividendos**: `(dividendo_anual / precio) * 100` → yield
- **DCA**: igual que interés compuesto con aportación mensual

### Planificación
- **Meta de ahorro**: `falta * rm / ((1+rm)^n - 1)` — sistema de anualidad
- **Fondo de emergencia**: `gastos_mensuales * meses_cobertura`
- **Préstamo**: sistema francés de cuota fija: `P * rm * (1+rm)^n / ((1+rm)^n - 1)`
- **Amortización**: igual que préstamo + tabla mes a mes con capital/interés/saldo
- **Jubilación**: capital necesario al retiro (anualidad de retiro) → cuota mensual de ahorro hasta retiro
- **FIRE**: `gastos_anuales / (SWR/100)` → número FIRE; años usando `log(1 + faltante*rm/ahorro) / log(1+rm)`
- **Salario neto**: tasas por país — 22 países con notas explicativas

### Forex
- **Pips**: `pip_size * posicion` (ajustado por pares USD-base vs USD-quote)
- **Apalancamiento**: `nocional / apalancamiento` → margen requerido
- **Riesgo/Beneficio**: pips entre entrada y SL vs TP; `1/(1+ratio)` → win rate mínimo
- **Spread**: `spread_pips * pip_valor * lotes * ops`
- **Comisión broker**: comparativa con 6 brokers — spread + comisión por lote

### Divisas
- **Conversión**: tabla de tasas de referencia USD-base, conversión por cross

---

## Salario neto: países y tasas

| País | Moneda | Deducción aprox. total | Fuentes principales |
|------|--------|----------------------|---------------------|
| Colombia | COP | ~13% | Salud 4%, Pensión 4%, Retención |
| México | MXN | ~27% | IMSS, INFONAVIT, ISR |
| Argentina | ARS | ~26% | Jubilación 11%, Obra social 3%, Ganancias |
| Chile | CLP | ~22% | AFP 10%, Salud 7%, Impuesto único |
| Perú | PEN | ~21% | ONP/AFP 13%, 5.a categoría |
| Ecuador | USD | ~14% | IESS 9.45%, IR |
| Uruguay | UYU | ~31% | BPS 21%, IRPF |
| Bolivia | BOB | ~14% | AFP 11.71%, RC-IVA |
| Paraguay | PYG | ~17% | IPS 9%, IRP |
| Venezuela | VES | ~10% | IVSS 4%, ISLR |
| Costa Rica | CRC | ~22% | CCSS 8.34%, IR |
| Panamá | USD | ~20% | CSS 9.75%, IR |
| Rep. Dominicana | DOP | ~21% | AFP 2.87%, ARS 3.04%, ISR |
| Guatemala | GTQ | ~12% | IGSS 4.83%, ISR |
| Honduras | HNL | ~14% | IHSS 2.5%, RAP 1.5%, IR |
| El Salvador | USD | ~20% | AFP 7.25%, ISSS 3%, ISR |
| Nicaragua | NIO | ~17% | INSS 7%, IR |
| Cuba | CUP | ~15% | Seg. Social 5%, IR |
| Puerto Rico | USD | ~20% | SS federal 6.2%, Medicare 1.45%, CR-PR |
| Canadá | CAD | ~30% | CPP 5.95%, EI 1.66%, federal+provincial |
| Belice | BZD | ~15% | Social Security 5%, IR |
| España | EUR | ~22% | SS 6.47%, IRPF |

---

## Conversión de divisas: tasas de referencia (2026)

Tasas orientativas respecto al USD. No son tiempo real.

| Código | Tasa vs USD | Nota |
|--------|-------------|------|
| EUR | 0.92 | |
| COP | 4,200 | |
| MXN | 17.5 | |
| CLP | 950 | |
| ARS | 1,200 | Mercado libre |
| PEN | 3.78 | |
| BOB | 6.91 | Tipo fijo |
| PYG | 7,600 | |
| UYU | 41 | |
| CRC | 530 | |
| GTQ | 7.8 | |
| DOP | 60 | |
| HNL | 25 | |
| NIO | 36.5 | |
| VES | 40 | Bolívar digital |
| CAD | 1.38 | |
| BZD | 2.0 | Tipo fijo |
| CUP | 24 | Tipo oficial |
| GBP | 0.79 | |
| BRL | 5.1 | |

Para actualizar tasas: editar `tasasUSD` en `src/pages/calculadoras/conversion-divisas.astro`.

---

## Pendientes / mejoras futuras

- [ ] Actualizar tasas de conversión de divisas periódicamente (o conectar a API pública gratuita)
- [ ] Calculadora de hipoteca (variante del préstamo con plazo en años y amortización anticipada)
- [ ] Calculadora de ETFs vs acciones individuales
- [ ] Calculadora de impuesto a las ganancias de capital por país
- [ ] Versión imprimible de la tabla de amortización
