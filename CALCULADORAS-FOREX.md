> Parte de la documentación de Inversax.
> Lista completa y numerada en [CALCULADORAS.md](CALCULADORAS.md) · **25 calculadoras de Forex**.

# Calculadoras — Forex

La lista íntegra (con URLs) vive en el índice maestro [CALCULADORAS.md](CALCULADORAS.md).
Este archivo documenta la **lógica de cálculo** de la categoría.

## Lógica de cálculo

### Base (1-15)
- **Pips**: `pip_size * posición` (ajustado por pares USD-base/quote)
- **Apalancamiento**: `nocional / apalancamiento` → margen requerido
- **Riesgo/Beneficio**: pips SL vs TP; `1/(1+ratio)` → win rate mínimo
- **Spread**: `spread_pips * pip_valor * lotes * ops`
- **Comisión broker**: spread + comisión por lote, comparativa
- **Tamaño de posición / P&L / conversor lotes / swap / drawdown / win rate / margen libre / apalancamiento efectivo / Kelly / simulador de cuenta**

### Nuevas — junio 2026 (16-25)
- **Stop loss y take profit**: `TP = entrada ± slPips*RR*pipSize` (signo según compra/venta); riesgo/ganancia `slPips*pipValue`
- **Reto de fondeo**: `expR = wr*RR - (1-wr)`; ops `= objetivo$/(expR*riesgo$)`; pérdidas seguidas `= floor(dd% / riesgo%)`
- **Compounding**: `VF = C*(1+g)^n` (con aporte opcional por periodo)
- **Margin call**: `nivel = equity/margen*100`; pérdida hasta MC `= equity - margen*nivelMC`
- **Distancia en pips**: `|p1 - p2| / pipSize`
- **Valor del punto (índices)**: `valorPuntoLote * lotes * puntos`
- **Profit factor**: `ganancia_bruta / pérdida_bruta`
- **Expectativa matemática**: `wr*ganancia_media - (1-wr)*pérdida_media`; win rate equilibrio `loss/(win+loss)`
- **Ratio de Sharpe**: `(rendimiento - tasa_libre_riesgo) / volatilidad`
- **Riesgo de ruina**: simulación Monte Carlo (miles de secuencias; ruina si balance ≤ 0)
</content>
