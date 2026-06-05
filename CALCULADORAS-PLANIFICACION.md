> Parte de la documentación de Inversax.
> Ver índice general en [CALCULADORAS.md](CALCULADORAS.md)

# Calculadoras — Planificación

| # | Nombre | URL | Categoría | Moneda | Estado |
|---|--------|-----|-----------|--------|--------|
| 8 | Meta de Ahorro | `/calculadoras/meta-ahorro` | Planificación | Todas | ✅ |
| 9 | Fondo de Emergencia | `/calculadoras/fondo-emergencia` | Planificación | Todas | ✅ |
| 10 | Préstamo | `/calculadoras/prestamo` | Planificación | Todas | ✅ |
| 11 | Amortización | `/calculadoras/amortizacion` | Planificación | Todas | ✅ |
| 12 | Jubilación | `/calculadoras/jubilacion` | Planificación | Todas | ✅ |
| 13 | Independencia Financiera (FIRE) | `/calculadoras/independencia-financiera` | Planificación | Todas | ✅ |
| 14 | Salario Neto | `/calculadoras/salario-neto` | Planificación | Por país | ✅ |

---

## Categorías y lógica

### Planificación
- **Meta de ahorro**: `falta * rm / ((1+rm)^n - 1)` — sistema de anualidad
- **Fondo de emergencia**: `gastos_mensuales * meses_cobertura`
- **Préstamo**: sistema francés de cuota fija: `P * rm * (1+rm)^n / ((1+rm)^n - 1)`
- **Amortización**: igual que préstamo + tabla mes a mes con capital/interés/saldo
- **Jubilación**: capital necesario al retiro (anualidad de retiro) → cuota mensual de ahorro hasta retiro
- **FIRE**: `gastos_anuales / (SWR/100)` → número FIRE; años usando `log(1 + faltante*rm/ahorro) / log(1+rm)`
- **Salario neto**: tasas por país — 22 países con notas explicativas

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
