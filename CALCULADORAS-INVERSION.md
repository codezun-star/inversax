> Parte de la documentación de Inversax.
> Lista completa y numerada en [CALCULADORAS.md](CALCULADORAS.md) · **27 calculadoras de Inversión**.

# Calculadoras — Inversión

La lista íntegra (con URLs) vive en el índice maestro [CALCULADORAS.md](CALCULADORAS.md).
Este archivo documenta la **lógica de cálculo** de la categoría.

## Lógica de cálculo

### Base (1-17)
- **Interés compuesto**: `C*(1+r/12)^n + aporte*((1+r/12)^n - 1)/(r/12)`
- **ROI**: `(Vf - Vi)/Vi * 100`; anualizado = CAGR
- **CAGR**: `(Vf/Vi)^(1/n) - 1`
- **Regla del 72**: `72/tasa` → años
- **Inflación**: `monto/(1+inf)^n` → poder adquisitivo
- **Dividendos**: `(dividendo_anual/precio)*100` → yield
- **DCA**: interés compuesto con aporte mensual
- **Valor futuro / VPN / rendimiento cartera / punto equilibrio / comparador / tasa requerida / ahorro meta / margen seguridad / impuesto ganancias / precio justo (Graham)**

### Nuevas — junio 2026 (18-27)
- **Interés simple**: `I = C*r*t`; `VF = C*(1+r*t)`; compara con compuesto `C*(1+r)^t`
- **Plazo fijo / CDT**: `bruto = C*r*(meses/12)`; `neto = bruto*(1-retención)`
- **Rentabilidad inmueble**: bruta `alquiler*12/precio`; neta `(ingreso-gastos)/(precio+costos)`; payback `inversión/ingreso_neto`
- **TIR**: bisección de `NPV = -inv + Σ cf_i/(1+r)^i = 0`
- **Vivir de dividendos**: `capital = gasto_anual / (yield*(1-impuesto))`
- **Rentabilidad real**: Fisher `(1+nominal)/(1+inflación) - 1`
- **Periodo de recuperación**: simple `inv/flujo`; descontado por acumulación de `flujo/(1+r)^i`
- **Precio promedio acciones**: `Σ(q*p) / Σq` (ponderado)
- **Costo de oportunidad**: `|C*(1+rB)^t - C*(1+rA)^t|`
- **Rendimiento de bono**: corriente `cupón/precio`; YTM aprox `(cupón + (nominal-precio)/años) / ((nominal+precio)/2)`
</content>
