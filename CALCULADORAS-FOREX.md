> Parte de la documentación de Inversax.
> Ver índice general en [CALCULADORAS.md](CALCULADORAS.md)

# Calculadoras — Forex

| # | Nombre | URL | Categoría | Moneda | Estado |
|---|--------|-----|-----------|--------|--------|
| 15 | Valor del Pip | `/calculadoras/pips` | Forex | USD | ✅ |
| 16 | Apalancamiento y Margen | `/calculadoras/apalancamiento` | Forex | Multi | ✅ |
| 17 | Riesgo / Beneficio | `/calculadoras/riesgo-beneficio` | Forex | USD | ✅ |
| 18 | Costo del Spread | `/calculadoras/spread` | Forex | USD | ✅ |
| 19 | Comisión de Broker | `/calculadoras/comision-broker` | Forex | USD | ✅ |

---

## Categorías y lógica

### Forex
- **Pips**: `pip_size * posicion` (ajustado por pares USD-base vs USD-quote)
- **Apalancamiento**: `nocional / apalancamiento` → margen requerido
- **Riesgo/Beneficio**: pips entre entrada y SL vs TP; `1/(1+ratio)` → win rate mínimo
- **Spread**: `spread_pips * pip_valor * lotes * ops`
- **Comisión broker**: comparativa con 6 brokers — spread + comisión por lote
