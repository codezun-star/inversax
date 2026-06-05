> Parte de la documentación de Inversax.
> Ver índice general en [CALCULADORAS.md](CALCULADORAS.md)

# Calculadoras — Inversión

| # | Nombre | URL | Categoría | Moneda | Estado |
|---|--------|-----|-----------|--------|--------|
| 1 | Interés Compuesto | `/calculadoras/interes-compuesto` | Inversión | Todas | ✅ |
| 2 | ROI | `/calculadoras/roi` | Inversión | Todas | ✅ |
| 3 | CAGR | `/calculadoras/cagr` | Inversión | — (%) | ✅ |
| 4 | Regla del 72 | `/calculadoras/regla-del-72` | Inversión | — (%) | ✅ |
| 5 | Inflación | `/calculadoras/inflacion` | Inversión | Todas | ✅ |
| 6 | Dividendos | `/calculadoras/dividendos` | Inversión | Todas | ✅ |
| 7 | DCA | `/calculadoras/dca` | Inversión | Todas | ✅ |

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
