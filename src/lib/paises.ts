export interface Pais {
  codigo: string;
  nombre: string;
  moneda: string;
  metodosPago: string[];
  descripcion: string;
}

export const paises: Pais[] = [
  {
    codigo: 'co',
    nombre: 'Colombia',
    moneda: 'COP',
    metodosPago: ['PSE', 'Nequi', 'Daviplata', 'Tarjeta de crédito'],
    descripcion: 'Mercado financiero en crecimiento con alta adopción de inversión digital.',
  },
  {
    codigo: 'mx',
    nombre: 'México',
    moneda: 'MXN',
    metodosPago: ['SPEI', 'OXXO', 'Tarjeta de crédito/débito'],
    descripcion: 'La economía más grande de habla hispana con acceso a mercados globales.',
  },
  {
    codigo: 'ar',
    nombre: 'Argentina',
    moneda: 'ARS',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito'],
    descripcion: 'Mercado con restricciones cambiarias; opciones de brokers internacionales limitadas.',
  },
  {
    codigo: 'cl',
    nombre: 'Chile',
    moneda: 'CLP',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito/débito'],
    descripcion: 'Uno de los mercados financieros más estables y regulados de Latinoamérica.',
  },
  {
    codigo: 'pe',
    nombre: 'Perú',
    moneda: 'PEN',
    metodosPago: ['Transferencia bancaria', 'Yape', 'Plin', 'Tarjeta de crédito'],
    descripcion: 'Economía en expansión con creciente interés en inversiones internacionales.',
  },
  {
    codigo: 'ec',
    nombre: 'Ecuador',
    moneda: 'USD',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito'],
    descripcion: 'Economía dolarizada que facilita el acceso a brokers internacionales.',
  },
  {
    codigo: 'uy',
    nombre: 'Uruguay',
    moneda: 'UYU',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito/débito'],
    descripcion: 'País con excelente regulación financiera y alta bancarización.',
  },
  {
    codigo: 'bo',
    nombre: 'Bolivia',
    moneda: 'BOB',
    metodosPago: ['Transferencia bancaria', 'Tigo Money'],
    descripcion: 'Mercado emergente con acceso limitado pero creciente a inversión internacional.',
  },
  {
    codigo: 'py',
    nombre: 'Paraguay',
    moneda: 'PYG',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito'],
    descripcion: 'Economía de bajo costo con creciente adopción de herramientas financieras.',
  },
  {
    codigo: 'cr',
    nombre: 'Costa Rica',
    moneda: 'CRC',
    metodosPago: ['SINPE Móvil', 'Transferencia bancaria', 'Tarjeta de crédito'],
    descripcion: 'Alta estabilidad política y económica; buen acceso a mercados internacionales.',
  },
  {
    codigo: 'pa',
    nombre: 'Panamá',
    moneda: 'USD',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito'],
    descripcion: 'Centro financiero regional, economía dolarizada con acceso amplio a brokers.',
  },
  {
    codigo: 'do',
    nombre: 'Rep. Dominicana',
    moneda: 'DOP',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito'],
    descripcion: 'Economía caribeña en expansión con creciente interés en inversión.',
  },
  {
    codigo: 'gt',
    nombre: 'Guatemala',
    moneda: 'GTQ',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito'],
    descripcion: 'Economía más grande de Centroamérica con mercado financiero en desarrollo.',
  },
  {
    codigo: 've',
    nombre: 'Venezuela',
    moneda: 'USD',
    metodosPago: ['Zinli', 'Zelle', 'Transferencia bancaria', 'Tarjeta de crédito'],
    descripcion: 'Alta adopción de criptomonedas y dolarización informal; brokers internacionales accesibles via Zinli y Zelle.',
  },
  {
    codigo: 'hn',
    nombre: 'Honduras',
    moneda: 'HNL',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito/débito'],
    descripcion: 'Mercado centroamericano en crecimiento con acceso a los principales brokers internacionales.',
  },
  {
    codigo: 'sv',
    nombre: 'El Salvador',
    moneda: 'USD',
    metodosPago: ['Transferencia bancaria', 'Bitcoin', 'Tarjeta de crédito/débito'],
    descripcion: 'Economía dolarizada y primer país con Bitcoin como moneda de curso legal; ideal para cripto e inversión internacional.',
  },
  {
    codigo: 'ni',
    nombre: 'Nicaragua',
    moneda: 'NIO',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito'],
    descripcion: 'Mercado emergente con acceso a brokers internacionales no sujetos a restricciones locales.',
  },
  {
    codigo: 'cu',
    nombre: 'Cuba',
    moneda: 'CUP',
    metodosPago: ['Transferencia bancaria'],
    descripcion: 'Acceso muy limitado a brokers internacionales por restricciones regulatorias; opciones disponibles son escasas.',
  },
  {
    codigo: 'pr',
    nombre: 'Puerto Rico',
    moneda: 'USD',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito/débito', 'PayPal'],
    descripcion: 'Territorio de EE.UU. con dólar y acceso a brokers internacionales y plataformas del mercado estadounidense.',
  },
  {
    codigo: 'ca',
    nombre: 'Canadá',
    moneda: 'CAD',
    metodosPago: ['Interac e-Transfer', 'Transferencia bancaria', 'Tarjeta de crédito/débito'],
    descripcion: 'Comunidad hispanohablante en rápido crecimiento. Regulado por IIROC; varios brokers internacionales aceptan residentes canadienses.',
  },
  {
    codigo: 'bz',
    nombre: 'Belice',
    moneda: 'BZD',
    metodosPago: ['Transferencia bancaria', 'Tarjeta de crédito'],
    descripcion: 'Comunidad hispanohablante significativa. Acceso a brokers internacionales similar al resto de Centroamérica.',
  },
  {
    codigo: 'es',
    nombre: 'España',
    moneda: 'EUR',
    metodosPago: ['Transferencia SEPA', 'Bizum', 'Tarjeta de crédito/débito'],
    descripcion: 'Acceso al mercado europeo con amplia oferta regulada de brokers.',
  },
];

export function getPais(codigo: string): Pais | undefined {
  return paises.find((p) => p.codigo === codigo.toLowerCase());
}
