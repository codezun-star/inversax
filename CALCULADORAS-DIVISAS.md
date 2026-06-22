> Parte de la documentación de Inversax.
> Lista completa y numerada en [CALCULADORAS.md](CALCULADORAS.md) · **21 calculadoras de Divisas**.

# Calculadoras — Divisas

La lista íntegra (con URLs) vive en el índice maestro [CALCULADORAS.md](CALCULADORAS.md).
Este archivo documenta la **lógica de cálculo** y las tasas de referencia.

## Lógica de cálculo

### Base (1-11)
- **Conversión**: tasas de referencia USD-base, conversión por cross
- **Tipo de cambio efectivo / remesas / cruce / inflación en divisas / equivalencia salario / costo tarjeta extranjera / devaluación / PPA / dólar paralelo / ahorro en dólares**

### Nuevas — junio 2026 (12-21)
- **Dólar MEP / CCL**: `pesos/usd * (1 + comisión)`; USD obtenidos `= monto/mep`
- **Dólar tarjeta**: `oficial * (1 + Σ percepciones%)`
- **Conversión cripto**: `cripto * precio`; inverso `monto/precio`
- **Presupuesto de viaje**: `diario * días * (1+colchón) * tasa`
- **Tipo de cambio promedio**: `Σ(divisa*precio) / Σ divisa` (ponderado)
- **Spread cambiario**: `(venta-compra)/((venta+compra)/2)*100`; pérdida ida-vuelta `monto - (monto/venta)*compra`
- **Remesa inversa**: `enviar = recibir/((1-pct)*tasa) + comisión_fija`
- **Costo de importación**: `(precio+envío)*(1+impuestos) * tasa`
- **Ganancia con el dólar**: `usd=monto/compra`; nominal `usd*venta-monto`; real por Fisher
- **Arbitraje dólar/cripto**: compara `monto/precioUSDT` vs `monto/precioTradicional`

---

## Conversión de divisas: tasas de referencia (orientativas, no tiempo real)

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
</content>
