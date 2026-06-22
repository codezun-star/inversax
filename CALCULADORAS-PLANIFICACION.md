> Parte de la documentación de Inversax.
> Lista completa y numerada en [CALCULADORAS.md](CALCULADORAS.md) · **27 calculadoras de Planificación**.

# Calculadoras — Planificación

La lista íntegra (con URLs) vive en el índice maestro [CALCULADORAS.md](CALCULADORAS.md).
Este archivo documenta la **lógica de cálculo** y las tasas del salario neto.

## Lógica de cálculo

### Base (1-17)
- **Meta de ahorro**: `falta * rm / ((1+rm)^n - 1)` (anualidad)
- **Fondo de emergencia**: `gastos_mensuales * meses_cobertura`
- **Préstamo / amortización**: sistema francés `P * rm*(1+rm)^n / ((1+rm)^n - 1)`
- **Jubilación**: capital al retiro → cuota mensual de ahorro
- **FIRE**: `gastos_anuales/(SWR/100)` → número; años `log(1 + faltante*rm/ahorro)/log(1+rm)`
- **Salario neto**: tasas por país (ver tabla)
- **Presupuesto 50/30/20 / capacidad endeudamiento / ahorro universidad / seguro vida / comparador plazos / cuotas tarjeta / alquiler vs compra / inflación personal / salario por hora / avalancha vs bola de nieve**

### Nuevas — junio 2026 (18-27)
- **Hipoteca** y **crédito automotriz**: cuota francesa sobre el monto financiado `precio*(1-enganche)`
- **Aguinaldo / prima**: `(salario/30) * días_aguinaldo * (meses_trabajados/12)`
- **Regla del 4%**: `capital = gasto_anual / (tasa_retiro/100)` (≈ 25× gastos)
- **Patrimonio neto**: `Σ activos - Σ pasivos`; ratio `pasivos/activos`
- **Ahorro para el enganche**: `PMT = (meta - actual*(1+i)^n) * i / ((1+i)^n - 1)`
- **Tasa de ahorro**: `ahorro/ingreso*100`; años a FI `ln(target*r/aporte_anual + 1)/ln(1+r)`
- **Tiempo para pagar deuda**: `n = -ln(1 - saldo*i/pago)/ln(1+i)`
- **Costo real de auto**: `dep = precio - precio*(1-d)^años`; mensual `dep/(años*12) + gasolina + seguro/12 + mant/12`
- **Ahorro por hábitos**: valor futuro de anualidad mensual a 1/5/10 años

---

## Salario neto: países y tasas

| País | Moneda | Deducción aprox. | Fuentes principales |
|------|--------|------------------|---------------------|
| Colombia | COP | ~13% | Salud 4%, Pensión 4%, Retención |
| México | MXN | ~27% | IMSS, INFONAVIT, ISR |
| Argentina | ARS | ~26% | Jubilación 11%, Obra social 3%, Ganancias |
| Chile | CLP | ~22% | AFP 10%, Salud 7%, Impuesto único |
| Perú | PEN | ~21% | ONP/AFP 13%, 5.ª categoría |
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
</content>
