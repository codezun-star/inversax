export interface Broker {
  id: string;
  nombre: string;
  tagline: string;
  descripcion: string;
  logo: string;
  color: string;
  colorBg: string;
  badge?: string;
  tipo: string;
  regulacion: string[];
  depositoMinimo: number | null;
  monedaDeposito: string;
  spread: string;
  comision: string;
  apalancamientoMax: string;
  plataformas: string[];
  tiposActivos: string[];
  cuentas: string[];
  comisionInactividad: string;
  paises: string[];
  afiliado: string;
  nivelUsuario: 'principiante' | 'intermedio' | 'avanzado' | 'todos';
  pros: string[];
  contras: string[];
  calificacion: number;
  fundado: number;
  sede: string;
}

export const brokers: Broker[] = [
  {
    id: 'exness',
    nombre: 'Exness',
    tagline: 'El broker más transparente para traders activos',
    descripcion: 'Exness es uno de los brokers de mayor crecimiento global, conocido por sus spreads ultra bajos, ejecución instantánea y retiros en minutos. Ideal para traders que valoran la velocidad y la transparencia.',
    logo: 'https://icon.horse/icon/exness.com',
    color: '#6C63FF',
    colorBg: '#F3F2FF',
    badge: 'Mejor valorado 2026',
    tipo: 'Forex & CFD',
    regulacion: ['FCA', 'CySEC', 'FSCA', 'FSA', 'CBCS'],
    depositoMinimo: 10,
    monedaDeposito: 'USD',
    spread: 'Desde 0.0 pips',
    comision: '$3.50/lot en Raw/Zero',
    apalancamientoMax: 'Hasta 1:2000',
    plataformas: ['MT4', 'MT5', 'Exness Terminal', 'App móvil'],
    tiposActivos: ['Forex', 'Metales', 'Cripto', 'Acciones', 'Índices', 'Energías'],
    cuentas: ['Standard', 'Standard Cent', 'Pro', 'Raw Spread', 'Zero'],
    comisionInactividad: 'Sin comisión',
    paises: ['co', 'mx', 'cl', 'pe', 'ec', 'uy', 'cr', 'pa', 'do', 'gt', 'bo', 'py', 've', 'hn', 'sv', 'ni', 'pr', 'bz', 'es'],
    afiliado: 'https://one.exnessonelink.com/a/c_oq7nroj1va',
    nivelUsuario: 'todos',
    calificacion: 4.8,
    fundado: 2008,
    sede: 'Chipre',
    pros: [
      'Retiros procesados en minutos, incluso fines de semana',
      'Spreads desde 0.0 pips en cuentas Raw y Zero',
      'Sin comisión por inactividad — tu dinero siempre disponible',
    ],
    contras: [
      'Apalancamiento muy alto puede ser riesgoso para principiantes',
      'Servicio al cliente puede demorar en horas pico',
    ],
  },
  {
    id: 'pepperstone',
    nombre: 'Pepperstone',
    tagline: 'Broker ECN profesional con 7 regulaciones globales',
    descripcion: 'Pepperstone es el broker de referencia para traders profesionales que necesitan ejecución ultrarrápida, spreads institucionales y acceso a múltiples plataformas incluyendo TradingView nativo.',
    logo: 'https://icon.horse/icon/pepperstone.com',
    color: '#00A651',
    colorBg: '#F0FBF5',
    badge: 'Mejor para avanzados',
    tipo: 'Broker ECN/STP',
    regulacion: ['FCA', 'ASIC', 'CySEC', 'DFSA', 'BaFin', 'CMA', 'SCB'],
    depositoMinimo: null,
    monedaDeposito: 'USD',
    spread: 'Desde 0.0 pips (Razor)',
    comision: '$7/lot ida+vuelta en Razor',
    apalancamientoMax: 'Hasta 1:400',
    plataformas: ['MT4', 'MT5', 'cTrader', 'TradingView', 'DupliTrade'],
    tiposActivos: ['Forex', 'Índices', 'Acciones', 'ETFs', 'Commodities', 'Cripto', 'Divisas'],
    cuentas: ['Standard', 'Razor (ECN)'],
    comisionInactividad: 'Sin comisión',
    paises: ['co', 'mx', 'cl', 'pe', 'ec', 'uy', 'cr', 'pa', 'do', 'gt', 've', 'hn', 'sv', 'ni', 'bz', 'ca', 'es'],
    afiliado: 'https://pepperstone.sjv.io/c/7061517/3194997/21941',
    nivelUsuario: 'avanzado',
    calificacion: 4.7,
    fundado: 2010,
    sede: 'Australia',
    pros: [
      'Regulado por 7 organismos incluyendo FCA y ASIC — máxima seguridad',
      'Integración nativa con TradingView para análisis avanzado',
      'Sin depósito mínimo — empieza con lo que tengas',
    ],
    contras: [
      'Plataforma puede abrumar a principiantes',
      'Comisión por operación en cuenta Razor (se compensa con spreads 0)',
    ],
  },
  {
    id: 'ic-markets',
    nombre: 'IC Markets',
    tagline: 'El broker favorito de los scalpers profesionales',
    descripcion: 'IC Markets es el broker #1 en volumen de trading en forex retail. Sus servidores en NY4 y LD5 garantizan latencias mínimas para estrategias de scalping y trading algorítmico.',
    logo: 'https://icon.horse/icon/icmarkets.com',
    color: '#1A3C6E',
    colorBg: '#EEF2F8',
    badge: 'Mejor para scalping',
    tipo: 'Broker ECN',
    regulacion: ['ASIC', 'CySEC', 'FSA', 'SCB'],
    depositoMinimo: 200,
    monedaDeposito: 'USD',
    spread: 'Desde 0.0 pips (Raw)',
    comision: '$7/lot en Raw',
    apalancamientoMax: 'Hasta 1:500',
    plataformas: ['MT4', 'MT5', 'cTrader', 'TradingView'],
    tiposActivos: ['Forex', 'Metales', 'Energías', 'Índices', 'Bonos', 'Cripto', 'Acciones CFD'],
    cuentas: ['Standard', 'Raw Spread (MT4/MT5)', 'Raw Spread (cTrader)'],
    comisionInactividad: 'Sin comisión',
    paises: ['co', 'mx', 'cl', 'pe', 'ec', 'uy', 'cr', 'pa', 'do', 'gt', 've', 'hn', 'sv', 'ni', 'bz', 'ca', 'es'],
    afiliado: 'https://icmarkets.com/?camp=90874',
    nivelUsuario: 'avanzado',
    calificacion: 4.8,
    fundado: 2007,
    sede: 'Australia',
    pros: [
      'Más de $1 billón en volumen diario — liquidez institucional real',
      'Servidores colocados en NY4 y LD5 para latencia <1ms',
      'Acepta EAs y estrategias de alta frecuencia sin restricciones',
    ],
    contras: [
      'Depósito mínimo de $200 USD — no apto para comenzar con poco',
      'Soporte al cliente en español puede ser lento',
    ],
  },
  {
    id: 'xm',
    nombre: 'XM',
    tagline: 'El broker más accesible para comenzar sin barreras',
    descripcion: 'XM es el broker elegido por millones de traders latinoamericanos gracias a su depósito mínimo de solo $5, atención al cliente en español 24/5 y bono de bienvenida para nuevos clientes.',
    logo: 'https://icon.horse/icon/xm.com',
    color: '#E84142',
    colorBg: '#FEF2F2',
    badge: 'Mejor para principiantes',
    tipo: 'Forex & CFD',
    regulacion: ['CySEC', 'ASIC', 'DFSA', 'FSCA'],
    depositoMinimo: 5,
    monedaDeposito: 'USD',
    spread: 'Desde 0.6 pips (Ultra Low)',
    comision: 'Sin comisión en Standard/Micro',
    apalancamientoMax: 'Hasta 1:1000',
    plataformas: ['MT4', 'MT5', 'XM App'],
    tiposActivos: ['Forex', 'Acciones CFD', 'Índices', 'Materias primas', 'Metales', 'Energías', 'Cripto CFD'],
    cuentas: ['Micro', 'Standard', 'Ultra Low', 'XM Zero'],
    comisionInactividad: '$5/mes tras 90 días',
    paises: ['co', 'mx', 'ar', 'cl', 'pe', 'ec', 'uy', 'bo', 'py', 'cr', 'pa', 'do', 'gt', 've', 'hn', 'sv', 'ni', 'cu', 'pr', 'bz', 'es'],
    afiliado: 'https://affs.click/nBBTT',
    nivelUsuario: 'principiante',
    calificacion: 4.2,
    fundado: 2009,
    sede: 'Chipre',
    pros: [
      'Depósito mínimo de solo $5 — el más bajo entre brokers regulados',
      'Atención al cliente en español disponible 24/5',
      'Más de +1,400 instrumentos disponibles desde una cuenta',
    ],
    contras: [
      'Spreads más altos que brokers ECN en cuentas básicas',
      'Comisión por inactividad de $5/mes tras 90 días sin operar',
    ],
  },
  {
    id: 'xtb',
    nombre: 'XTB',
    tagline: 'La plataforma más completa para invertir en acciones reales',
    descripcion: 'XTB destaca por su plataforma xStation 5, considerada la mejor del mercado en UX, y por permitir comprar acciones y ETFs reales (sin CFDs) de más de 3,500 empresas globales sin comisión.',
    logo: 'https://icon.horse/icon/xtb.com',
    color: '#1565C0',
    colorBg: '#EEF4FD',
    badge: 'Mejor plataforma 2026',
    tipo: 'Acciones, ETFs & CFD',
    regulacion: ['FCA', 'CySEC', 'KNF', 'CNMV', 'IFSC'],
    depositoMinimo: null,
    monedaDeposito: 'USD',
    spread: 'Desde 0.7 pips (EUR/USD)',
    comision: 'Sin comisión hasta €100,000/mes',
    apalancamientoMax: 'Hasta 1:30 (UE) / 1:500',
    plataformas: ['xStation 5 (Web)', 'xStation App'],
    tiposActivos: ['Acciones reales', 'ETFs reales', 'Forex CFD', 'Índices CFD', 'Commodities CFD', 'Cripto CFD'],
    cuentas: ['Básica', 'Pro'],
    comisionInactividad: '€10/mes tras 12 meses',
    paises: ['co', 'mx', 'cl', 'pe', 'cr', 'pa', 'ca', 'es'],
    afiliado: 'https://geolink.xtb.com/I0QSx',
    nivelUsuario: 'intermedio',
    calificacion: 4.5,
    fundado: 2002,
    sede: 'Polonia',
    pros: [
      'Compra acciones y ETFs reales de empresas como Apple, Tesla, Amazon',
      'xStation 5 — la plataforma mejor diseñada del mercado según múltiples rankings',
      'Sin comisión en acciones y ETFs hasta €100,000 al mes',
    ],
    contras: [
      'Comisión de €10/mes por inactividad tras un año sin operar',
      'Disponible en menos países LATAM que otros brokers',
    ],
  },
  {
    id: 'libertex',
    nombre: 'Libertex',
    tagline: 'Opera con 0 spread y paga solo una comisión fija',
    descripcion: 'Libertex tiene un modelo único en el mercado: cobra una comisión fija por operación y elimina completamente el spread. Esto lo hace predecible y transparente para quienes operan con frecuencia.',
    logo: 'https://icon.horse/icon/libertex.com',
    color: '#00B074',
    colorBg: '#F0FBF7',
    tipo: 'Forex & CFD',
    regulacion: ['CySEC', 'FSC'],
    depositoMinimo: 100,
    monedaDeposito: 'USD',
    spread: '0 spreads',
    comision: 'Comisión fija por operación',
    apalancamientoMax: 'Hasta 1:30 (UE) / 1:500',
    plataformas: ['Libertex App', 'MT4', 'MT5'],
    tiposActivos: ['Forex', 'Acciones CFD', 'Índices', 'Commodities', 'Cripto CFD', 'ETFs CFD'],
    cuentas: ['CFD Standard', 'CFD VIP'],
    comisionInactividad: '$10 tras 180 días',
    paises: ['co', 'mx', 'cl', 'pe', 'ec', 'cr', 'pa', 've', 'hn', 'sv', 'bz', 'es'],
    afiliado: 'https://fwd.cx/DMQ5TyRNANPA',
    nivelUsuario: 'intermedio',
    calificacion: 4.3,
    fundado: 1997,
    sede: 'Chipre',
    pros: [
      'Spread cero — pagas exactamente lo que ves, sin sorpresas',
      'Más de 25 años en el mercado — una de las marcas más antiguas',
      'App móvil muy bien valorada en iOS y Android',
    ],
    contras: [
      'Solo CFDs, no compras acciones reales',
      'Regulado únicamente por CySEC y FSC (menos jurisdicciones)',
    ],
  },
  {
    id: 'binance',
    nombre: 'Binance',
    tagline: 'El exchange de cripto más grande del mundo',
    descripcion: 'Binance es el exchange de criptomonedas con mayor volumen global. Ofrece más de 350 criptomonedas, las comisiones más bajas del mercado (0.1% por operación) y un ecosistema completo para inversión en cripto.',
    logo: 'https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png',
    color: '#F0B90B',
    colorBg: '#FFFBEE',
    badge: 'Nº1 en cripto',
    tipo: 'Exchange de Criptomonedas',
    regulacion: ['Licencias locales por país', 'VASP registrado UE'],
    depositoMinimo: null,
    monedaDeposito: 'USD',
    spread: 'Spread de mercado',
    comision: '0.1% por operación spot',
    apalancamientoMax: 'Hasta 1:125 (futuros)',
    plataformas: ['Binance Web', 'Binance App iOS/Android', 'API avanzada'],
    tiposActivos: ['Spot Cripto', 'Futuros Cripto', 'Margin', 'Staking', 'DeFi', 'NFTs'],
    cuentas: ['Spot', 'Futuros', 'Margin', 'Earn'],
    comisionInactividad: 'Sin comisión',
    paises: ['co', 'mx', 'cl', 'pe', 'ec', 'uy', 'bo', 'py', 'cr', 'pa', 'do', 'gt', 've', 'hn', 'sv', 'ni', 'pr', 'bz', 'ca', 'es'],
    afiliado: 'https://www.binance.com/activity/referral-entry/CPA?ref=CPA_0011ND849R&utm_source=default',
    // Cuba excluida: Binance cumple sanciones OFAC
    nivelUsuario: 'todos',
    calificacion: 4.8,
    fundado: 2017,
    sede: 'Islas Caimán',
    pros: [
      'Más de 350 criptomonedas disponibles — la mayor selección del mercado',
      'Comisión del 0.1% — entre las más bajas de todos los exchanges',
      'Ecosistema completo: spot, futuros, staking, earn, P2P y más',
    ],
    contras: [
      'Regulación compleja y variable según el país',
      'Interfaz puede ser abrumadora para usuarios nuevos en cripto',
    ],
  },
];

export function getBrokersByPais(codigoPais: string): Broker[] {
  return brokers.filter((b) => b.paises.includes(codigoPais.toLowerCase()));
}

export function getBrokerRecomendado(codigoPais: string): Broker | undefined {
  const disponibles = getBrokersByPais(codigoPais);
  return disponibles.sort((a, b) => b.calificacion - a.calificacion)[0];
}

export function getBroker(id: string): Broker | undefined {
  return brokers.find((b) => b.id === id);
}
