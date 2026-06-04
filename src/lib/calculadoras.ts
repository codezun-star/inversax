export interface Calculadora {
  titulo: string;
  descripcion: string;
  href: string;
  svgPath: string;
}

export interface GrupoCalculadoras {
  categoria: string;
  tagLabel: string;
  slug: string;
  color: string;
  calculadoras: Calculadora[];
}

export const grupos: GrupoCalculadoras[] = [
  {
    categoria: 'Inversión',
    tagLabel: 'Inversión',
    slug: 'inversion',
    color: '#FF8C42',
    calculadoras: [
      { titulo: 'Interés Compuesto', descripcion: 'Calcula el crecimiento de tu inversión con reinversión de ganancias a lo largo del tiempo.', href: '/calculadoras/interes-compuesto', svgPath: 'M22 12h-4l-3 9L9 3l-3 9H2' },
      { titulo: 'ROI', descripcion: 'Retorno sobre la inversión: cuánto ganaste respecto a lo que pusiste. Con ROI anualizado.', href: '/calculadoras/roi', svgPath: 'M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6' },
      { titulo: 'CAGR', descripcion: 'Tasa de Crecimiento Anual Compuesto: la métrica más honesta para comparar inversiones.', href: '/calculadoras/cagr', svgPath: 'M23 6l-9.5 9.5-5-5L1 18' },
      { titulo: 'Regla del 72', descripcion: '¿En cuántos años se duplica tu dinero? Calcula también qué tasa necesitas para duplicar en X años.', href: '/calculadoras/regla-del-72', svgPath: 'M12 22V12m0 0V2m0 10h10m-10 0H2' },
      { titulo: 'Inflación', descripcion: 'Descubre cómo la inflación erosiona el poder adquisitivo de tus ahorros a lo largo del tiempo.', href: '/calculadoras/inflacion', svgPath: 'M12 20V10m-6 10l6-6 6 6' },
      { titulo: 'Dividendos', descripcion: 'Calcula el dividend yield y tus ingresos pasivos estimados a partir de tus acciones.', href: '/calculadoras/dividendos', svgPath: 'M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6' },
      { titulo: 'DCA', descripcion: 'Dollar Cost Averaging: proyecta el resultado de invertir una cantidad fija cada mes.', href: '/calculadoras/dca', svgPath: 'M3 3v18h18M7 16l4-4 4 4 5-5' },
      { titulo: 'Valor Futuro', descripcion: '¿Cuánto valdrá tu dinero? Proyecta el crecimiento de un capital único a interés compuesto.', href: '/calculadoras/valor-futuro', svgPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
      { titulo: 'VPN', descripcion: 'Valor Presente Neto: descuenta flujos de caja futuros para saber si un proyecto es rentable.', href: '/calculadoras/vpn', svgPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
      { titulo: 'Rendimiento de Cartera', descripcion: 'Calcula el rendimiento ponderado de un portafolio con hasta 5 activos de diferentes pesos.', href: '/calculadoras/rendimiento-cartera', svgPath: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z' },
      { titulo: 'Punto de Equilibrio', descripcion: 'Calcula cuántas unidades debes vender para cubrir todos tus costos fijos y variables.', href: '/calculadoras/punto-equilibrio', svgPath: 'M3 17l4-8 4 8 4-12 4 8' },
      { titulo: 'Comparador de Inversiones', descripcion: 'Enfrenta dos inversiones con distintas tasas y comprueba la diferencia en el tiempo.', href: '/calculadoras/comparador-inversiones', svgPath: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
      { titulo: 'Tasa Requerida', descripcion: '¿Qué rendimiento anual necesitas para convertir tu capital en tu meta? Calcula la tasa exacta.', href: '/calculadoras/tasa-requerida', svgPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
      { titulo: 'Ahorro para una Meta', descripcion: '¿Cuánto ahorrar mensualmente para acumular un capital objetivo? Con rendimiento incluido.', href: '/calculadoras/ahorro-meta', svgPath: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
      { titulo: 'Margen de Seguridad', descripcion: 'Calcula el margen de seguridad de una acción o activo para decidir si vale la pena comprar.', href: '/calculadoras/margen-seguridad', svgPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
      { titulo: 'Impuesto sobre Ganancias', descripcion: 'Calcula cuánto pagarás de impuesto al vender acciones, ETFs o criptomonedas. Tasas para 7 países de LATAM y España.', href: '/calculadoras/impuesto-ganancias', svgPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { titulo: 'Precio Justo de una Acción', descripcion: 'Calcula el valor intrínseco con el Número de Graham: la fórmula clásica del value investing para saber si una acción está barata.', href: '/calculadoras/precio-justo', svgPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
    ],
  },
  {
    categoria: 'Planificación personal',
    tagLabel: 'Planificación',
    slug: 'planificacion',
    color: '#22C55E',
    calculadoras: [
      { titulo: 'Meta de Ahorro', descripcion: 'Calcula cuánto debes ahorrar al mes para alcanzar tu objetivo en el plazo deseado.', href: '/calculadoras/meta-ahorro', svgPath: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z' },
      { titulo: 'Fondo de Emergencia', descripcion: 'Calcula el colchón financiero que necesitas para estar protegido ante cualquier imprevisto.', href: '/calculadoras/fondo-emergencia', svgPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
      { titulo: 'Préstamo', descripcion: 'Calcula la cuota mensual de tu crédito y el total de intereses que pagarás.', href: '/calculadoras/prestamo', svgPath: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
      { titulo: 'Amortización', descripcion: 'Genera la tabla de amortización completa de tu préstamo mes a mes con detalle de capital e interés.', href: '/calculadoras/amortizacion', svgPath: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
      { titulo: 'Jubilación', descripcion: 'Planifica tu retiro: calcula cuánto debes ahorrar hoy para vivir como quieres mañana.', href: '/calculadoras/jubilacion', svgPath: 'M3 9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M8 9V7a4 4 0 018 0v2' },
      { titulo: 'Independencia Financiera', descripcion: 'Calculadora FIRE: calcula tu número y cuándo puedes dejar de trabajar si así lo deseas.', href: '/calculadoras/independencia-financiera', svgPath: 'M5 3l14 9-14 9V3z' },
      { titulo: 'Salario Neto', descripcion: 'Estima cuánto recibes realmente después de deducciones. Cubre 22 países de Latinoamérica y España.', href: '/calculadoras/salario-neto', svgPath: 'M21 15V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12' },
      { titulo: 'Presupuesto 50/30/20', descripcion: 'Divide tu ingreso mensual en necesidades, deseos y ahorro según la regla más popular de presupuesto.', href: '/calculadoras/presupuesto-503020', svgPath: 'M9 7h1m0 8h1m4-8h1m0 8h1M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
      { titulo: 'Capacidad de Endeudamiento', descripcion: 'Calcula cuánta deuda mensual puedes asumir de forma responsable según tus ingresos actuales.', href: '/calculadoras/capacidad-endeudamiento', svgPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
      { titulo: 'Ahorro para Universidad', descripcion: 'Proyecta el costo futuro de la universidad y calcula el ahorro mensual necesario con inflación educativa.', href: '/calculadoras/ahorro-universidad', svgPath: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
      { titulo: 'Capital de Seguro de Vida', descripcion: 'Estima el monto de cobertura que necesita tu familia para mantener su nivel de vida.', href: '/calculadoras/seguro-vida', svgPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
      { titulo: 'Comparador de Plazos', descripcion: '¿Plazo corto o largo? Compara cuotas e intereses totales de dos plazos para el mismo préstamo.', href: '/calculadoras/comparador-plazos', svgPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
      { titulo: 'Cuotas con Tarjeta', descripcion: 'Descubre el costo real de financiar una compra en cuotas con tarjeta y la tasa efectiva anual.', href: '/calculadoras/cuotas-tarjeta', svgPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
      { titulo: 'Alquiler vs Compra', descripcion: '¿Conviene más alquilar o comprar vivienda? Compara el costo neto real de cada opción.', href: '/calculadoras/alquiler-vs-compra', svgPath: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M10 22V12h4v10' },
      { titulo: 'Inflación Personal', descripcion: 'Calcula tu inflación real según tus propios gastos. Descubre si tu sueldo crece más o menos que tu costo de vida.', href: '/calculadoras/inflacion-personal', svgPath: 'M13 10V3L4 14h7v7l9-11h-7z' },
      { titulo: 'Salario por Hora', descripcion: 'Convierte tu salario mensual, anual o semanal a tarifa por hora. Útil para comparar empleos, calcular freelance y evaluar ofertas reales.', href: '/calculadoras/salario-hora', svgPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
      { titulo: 'Avalancha vs Bola de Nieve', descripcion: 'Compara los dos métodos para pagar deudas más rápido. Calcula cuántos meses tardarás y cuánto interés ahorras con cada estrategia.', href: '/calculadoras/deuda-bola-nieve', svgPath: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 10H2' },
    ],
  },
  {
    categoria: 'Forex y trading',
    tagLabel: 'Forex',
    slug: 'forex',
    color: '#3B82F6',
    calculadoras: [
      { titulo: 'Valor del Pip', descripcion: 'Calcula exactamente cuánto vale cada pip según tu par de divisas y tamaño de posición.', href: '/calculadoras/pips', svgPath: 'M22 12h-4l-3 9L9 3l-3 9H2' },
      { titulo: 'Apalancamiento y Margen', descripcion: 'Calcula el margen requerido para operar con apalancamiento y el capital en riesgo.', href: '/calculadoras/apalancamiento', svgPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
      { titulo: 'Riesgo / Beneficio', descripcion: 'Evalúa si una operación tiene sentido antes de entrar: calcula el ratio R/R y el win rate mínimo.', href: '/calculadoras/riesgo-beneficio', svgPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
      { titulo: 'Costo del Spread', descripcion: 'Calcula cuánto te cuesta el spread por operación y qué impacto tiene en tu operativa mensual.', href: '/calculadoras/spread', svgPath: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z' },
      { titulo: 'Comisión de Broker', descripcion: 'Compara el costo real de operar con distintos brokers y descubre cuál te conviene más.', href: '/calculadoras/comision-broker', svgPath: 'M3 6h18M3 12h18M3 18h18' },
      { titulo: 'Tamaño de Posición', descripcion: 'Calcula los lotes óptimos según tu capital, porcentaje de riesgo y stop loss. Gestión de riesgo profesional.', href: '/calculadoras/tamano-posicion', svgPath: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4' },
      { titulo: 'P&L Forex', descripcion: 'Calcula la ganancia o pérdida exacta de cualquier operación forex antes de ejecutarla.', href: '/calculadoras/pyl-forex', svgPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
      { titulo: 'Conversor de Lotes', descripcion: 'Convierte entre lotes estándar, mini, micro y nano. Calcula también el valor nocional total.', href: '/calculadoras/conversor-lotes', svgPath: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' },
      { titulo: 'Swap / Overnight', descripcion: 'Calcula el costo o ganancia del rollover al mantener posiciones forex abiertas más de un día.', href: '/calculadoras/swap-overnight', svgPath: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' },
      { titulo: 'Drawdown y Recuperación', descripcion: 'Calcula el drawdown máximo de tu cuenta y cuánto necesitas ganar para recuperar el capital perdido.', href: '/calculadoras/drawdown', svgPath: 'M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6' },
      { titulo: 'Win Rate Mínimo', descripcion: 'Calcula el porcentaje mínimo de operaciones ganadoras para ser rentable dado tu ratio R:R.', href: '/calculadoras/win-rate', svgPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
      { titulo: 'Margen Libre', descripcion: 'Calcula el margen libre en tu cuenta forex y el nivel de margen para evitar margin calls.', href: '/calculadoras/margen-libre', svgPath: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4' },
      { titulo: 'Apalancamiento Efectivo', descripcion: 'Calcula el apalancamiento efectivo real que estás usando, no el máximo del broker.', href: '/calculadoras/apalancamiento-efectivo', svgPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
      { titulo: 'Criterio de Kelly', descripcion: 'Calcula el porcentaje óptimo de capital a arriesgar por operación para maximizar el crecimiento sin destruir la cuenta.', href: '/calculadoras/kelly', svgPath: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { titulo: 'Simulador de Cuenta', descripcion: 'Proyecta el crecimiento esperado de tu cuenta de trading según win rate, ratio R:R y riesgo por operación. Descubre si tu estrategia es viable.', href: '/calculadoras/simulador-cuenta', svgPath: 'M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3' },
    ],
  },
  {
    categoria: 'Divisas',
    tagLabel: 'Divisas',
    slug: 'divisas',
    color: '#8B5CF6',
    calculadoras: [
      { titulo: 'Conversión de Divisas', descripcion: 'Convierte entre 21 monedas de Latinoamérica, España y el mundo con tasas de referencia.', href: '/calculadoras/conversion-divisas', svgPath: 'M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3' },
      { titulo: 'Tipo de Cambio Efectivo', descripcion: 'Calcula cuánto recibes realmente al cambiar divisas incluyendo spread y comisiones del banco.', href: '/calculadoras/tipo-cambio-efectivo', svgPath: 'M19 5L5 19M6.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' },
      { titulo: 'Remesas', descripcion: 'Calcula cuánto dinero llega realmente en una transferencia internacional después de todas las comisiones.', href: '/calculadoras/remesas', svgPath: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
      { titulo: 'Cruce de Divisas', descripcion: 'Calcula el tipo de cambio cruzado entre dos monedas usando el USD como moneda puente.', href: '/calculadoras/cruce-divisas', svgPath: 'M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6' },
      { titulo: 'Inflación en Divisas', descripcion: 'Proyecta cómo la inflación erosiona el poder adquisitivo de tu moneda local en el tiempo.', href: '/calculadoras/inflacion-divisa', svgPath: 'M13 10V3L4 14h7v7l9-11h-7z' },
      { titulo: 'Equivalencia de Salario', descripcion: 'Compara salarios entre dos países ajustando por tipo de cambio y costo de vida.', href: '/calculadoras/equivalencia-salario', svgPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { titulo: 'Costo Tarjeta Extranjera', descripcion: 'Calcula el costo real de pagar con tarjeta en moneda extranjera incluyendo todos los recargos.', href: '/calculadoras/costo-tarjeta-extranjera', svgPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
      { titulo: 'Impacto de la Devaluación', descripcion: 'Proyecta cuánto perderán valor tus ahorros en moneda local si la divisa continúa devaluándose.', href: '/calculadoras/devaluacion', svgPath: 'M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6' },
      { titulo: 'Paridad de Poder Adquisitivo', descripcion: 'Compara el precio del mismo bien en dos países para saber si una moneda está sub o sobrevalorada.', href: '/calculadoras/ppa', svgPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { titulo: 'Dólar Paralelo y Brecha Cambiaria', descripcion: 'Calcula la brecha entre el tipo oficial y el paralelo (blue). Especial para Argentina, Venezuela y Cuba. Convierte entre ambas cotizaciones.', href: '/calculadoras/dolar-paralelo', svgPath: 'M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3' },
      { titulo: 'Ahorrar en Dólares vs Moneda Local', descripcion: 'Compara el valor real de tu ahorro mensual en dólares frente a la moneda local considerando inflación y devaluación.', href: '/calculadoras/ahorro-dolares', svgPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    ],
  },
];
