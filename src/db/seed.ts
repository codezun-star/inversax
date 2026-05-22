import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = join(__dirname, '../../inversax.db');

const sqlite = new Database(dbPath);

sqlite.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    descripcion TEXT,
    contenido TEXT,
    pais TEXT,
    categoria TEXT DEFAULT 'general',
    autor TEXT DEFAULT 'Equipo Inversax',
    publicado INTEGER DEFAULT 1,
    fecha_publicacion TEXT,
    imagen TEXT,
    keywords TEXT
  )
`);

const articulos = [
  {
    titulo: 'Mejores brokers para invertir en Colombia 2025',
    slug: 'mejores-brokers-colombia-2025',
    descripcion: 'Guía completa con los mejores brokers disponibles en Colombia: regulación, depósito mínimo, métodos de pago y cuál elegir según tu perfil.',
    pais: 'co',
    categoria: 'brokers',
    fecha_publicacion: '2025-01-15',
    keywords: 'brokers colombia, invertir colombia, mejores brokers 2025, etoro colombia',
    contenido: `
<h2>¿Qué broker elegir en Colombia?</h2>
<p>Colombia tiene un mercado financiero en rápido crecimiento. Cada vez más colombianos buscan diversificar sus ahorros invirtiendo en acciones internacionales, ETFs y criptomonedas a través de brokers online. Aquí te explicamos cuáles son las mejores opciones disponibles en 2025.</p>

<h2>Requisitos para abrir una cuenta desde Colombia</h2>
<p>Para abrir una cuenta en un broker internacional desde Colombia generalmente necesitas:</p>
<ul>
  <li>Cédula de ciudadanía vigente</li>
  <li>Cuenta bancaria colombiana para depósitos y retiros</li>
  <li>Correo electrónico activo</li>
  <li>En algunos casos, comprobante de ingresos o declaración de renta</li>
</ul>

<h2>Métodos de pago disponibles en Colombia</h2>
<p>Los brokers más populares en Colombia aceptan depósitos vía PSE (Pagos Seguros en Línea), Nequi, Daviplata y tarjetas de crédito/débito Visa o Mastercard. Los retiros generalmente se realizan por transferencia bancaria directa.</p>

<h2>Broker recomendado para principiantes: eToro</h2>
<p>Para quienes están comenzando, eToro destaca por su interfaz intuitiva y la función de copy trading, que permite copiar automáticamente las operaciones de inversores exitosos. El depósito mínimo es de $50 USD y está disponible en Colombia sin restricciones.</p>

<h2>Broker recomendado para avanzados: Interactive Brokers</h2>
<p>Si ya tienes experiencia invirtiendo y buscas acceso a múltiples mercados con comisiones competitivas, Interactive Brokers es la mejor opción. Sin depósito mínimo y con acceso a 150+ mercados globales.</p>

<h2>Consideraciones fiscales</h2>
<p>Las ganancias obtenidas a través de brokers internacionales deben declararse ante la DIAN como renta de capital extranjero. Te recomendamos consultar con un contador especializado en activos internacionales.</p>
    `.trim(),
  },
  {
    titulo: 'Mejores brokers para invertir en México 2025',
    slug: 'mejores-brokers-mexico-2025',
    descripcion: 'Los mejores brokers online disponibles en México: cuál elegir, cómo depositar con SPEI y qué regulación buscar.',
    pais: 'mx',
    categoria: 'brokers',
    fecha_publicacion: '2025-01-20',
    keywords: 'brokers mexico, invertir mexico, mejores brokers mexicanos 2025, SPEI broker',
    contenido: `
<h2>Invertir desde México: lo que debes saber</h2>
<p>México es el mercado de habla hispana más grande del mundo, y cada vez más mexicanos buscan acceder a inversiones internacionales. En 2025, las opciones de brokers disponibles son más amplias que nunca.</p>

<h2>Cómo depositar en un broker desde México</h2>
<p>La mayoría de brokers internacionales aceptan depósitos desde México vía SPEI, que es la forma más rápida y sin comisiones. También se acepta OXXO Pay y tarjetas Visa/Mastercard de los principales bancos mexicanos (BBVA, Santander, Banamex, Banorte).</p>

<h2>Regulación: qué buscar</h2>
<p>Aunque no todos los brokers internacionales tienen regulación mexicana (CNBV), es importante que estén regulados por organismos reconocidos como la FCA (Reino Unido), CySEC (Chipre) o ASIC (Australia). Esto garantiza protección de fondos.</p>

<h2>Broker recomendado: eToro</h2>
<p>eToro es la opción más popular entre inversores mexicanos gracias a su facilidad de uso, depósito mínimo bajo ($50 USD) y la posibilidad de invertir en acciones de la BMV y mercados internacionales desde una sola plataforma.</p>

<h2>Broker para traders activos: XTB</h2>
<p>XTB ofrece la plataforma xStation 5, considerada una de las mejores del mercado. Sin comisiones hasta €100,000 al mes en acciones y ETFs. Acepta depósitos vía SPEI con conversión automática a USD o EUR.</p>

<h2>Impuestos en México</h2>
<p>Las ganancias en el extranjero deben reportarse ante el SAT como ingresos por inversiones. La tasa varía según tu nivel de ingresos. Consulta con un contador fiscal para cumplir correctamente.</p>
    `.trim(),
  },
  {
    titulo: 'Cómo elegir un broker: guía completa para principiantes',
    slug: 'como-elegir-un-broker-guia-completa',
    descripcion: 'Todo lo que necesitas saber para elegir el broker correcto: regulación, comisiones, tipos de activos, depósito mínimo y plataforma.',
    pais: null,
    categoria: 'guias',
    fecha_publicacion: '2025-01-10',
    keywords: 'como elegir broker, guia broker principiante, comparar brokers, regulacion broker',
    contenido: `
<h2>¿Qué es un broker?</h2>
<p>Un broker es un intermediario que te permite comprar y vender activos financieros como acciones, ETFs, criptomonedas o divisas. Sin un broker, no puedes acceder directamente a los mercados financieros globales.</p>

<h2>1. Verifica la regulación</h2>
<p>La regulación es lo más importante al elegir un broker. Un broker regulado debe mantener tus fondos separados de los suyos propios y cumplir con normas de protección al inversor. Las principales regulaciones a buscar son:</p>
<ul>
  <li><strong>FCA</strong> (Financial Conduct Authority) — Reino Unido</li>
  <li><strong>CySEC</strong> (Cyprus Securities and Exchange Commission) — Chipre/Europa</li>
  <li><strong>ASIC</strong> (Australian Securities and Investments Commission) — Australia</li>
  <li><strong>SEC / FINRA</strong> — Estados Unidos</li>
</ul>

<h2>2. Revisa el depósito mínimo</h2>
<p>Si estás comenzando, busca brokers con depósito mínimo bajo (desde $0 a $100 USD). No necesitas grandes sumas para empezar a invertir.</p>

<h2>3. Entiende las comisiones</h2>
<p>Los brokers cobran de dos formas principales: comisión fija por operación o spread (diferencia entre precio de compra y venta). Algunos ofrecen "sin comisión" pero compensan con spreads más amplios. Compara el costo total por operación.</p>

<h2>4. Tipos de activos disponibles</h2>
<p>No todos los brokers ofrecen todos los activos. Define si quieres invertir en acciones, ETFs, criptomonedas, forex o materias primas, y elige un broker que los incluya.</p>

<h2>5. Prueba la plataforma</h2>
<p>La mayoría de brokers ofrecen una cuenta demo gratuita. Úsala antes de depositar dinero real. La plataforma debe ser intuitiva y funcionar bien en móvil.</p>

<h2>Conclusión</h2>
<p>No existe un broker "perfecto" para todos. Depende de tu país, experiencia, capital disponible y los activos que quieras operar. Usa nuestra herramienta de comparación para encontrar el mejor para tu perfil.</p>
    `.trim(),
  },
  {
    titulo: 'eToro: análisis completo para inversores latinoamericanos 2025',
    slug: 'etoro-analisis-latinoamerica-2025',
    descripcion: 'Análisis detallado de eToro para usuarios de Latinoamérica: regulación, comisiones, copy trading, depósito y retiro desde LATAM.',
    pais: null,
    categoria: 'analisis',
    fecha_publicacion: '2025-02-01',
    keywords: 'etoro analisis, etoro latinoamerica, etoro colombia, etoro mexico, etoro copy trading',
    contenido: `
<h2>¿Qué es eToro?</h2>
<p>eToro es una plataforma de inversión social fundada en 2007 con sede en Chipre y regulada por CySEC, FCA y ASIC. Tiene más de 30 millones de usuarios en todo el mundo y es especialmente popular en Latinoamérica por su facilidad de uso.</p>

<h2>Regulación y seguridad</h2>
<p>eToro está regulado por tres de las autoridades financieras más respetadas del mundo: CySEC (Chipre), FCA (Reino Unido) y ASIC (Australia). Esto significa que tus fondos están protegidos y separados de los fondos operativos de la empresa.</p>

<h2>Copy Trading: la función estrella</h2>
<p>La característica más conocida de eToro es el Copy Trading: puedes seleccionar a un inversor exitoso y copiar automáticamente todas sus operaciones con una parte de tu capital. Esto permite a principiantes aprender mientras invierten junto a expertos.</p>

<h2>Disponibilidad en Latinoamérica</h2>
<p>eToro está disponible en la mayoría de países latinoamericanos incluyendo Colombia, México, Chile, Perú, Ecuador, Uruguay, Costa Rica y Panamá. Argentina tiene restricciones por sus controles cambiarios.</p>

<h2>Depósito mínimo y métodos de pago</h2>
<p>El depósito mínimo es de $50 USD. Acepta tarjetas de crédito/débito Visa y Mastercard, transferencias bancarias y algunos métodos locales según el país. Los retiros mínimos son de $30 USD con una comisión de $5 por retiro.</p>

<h2>Activos disponibles</h2>
<p>En eToro puedes invertir en acciones de más de 17 bolsas mundiales, más de 250 ETFs, 70+ criptomonedas, pares de forex, índices y materias primas. Todo desde una sola plataforma.</p>

<h2>Veredicto</h2>
<p>eToro es la mejor opción para principiantes latinoamericanos que quieren comenzar a invertir de forma sencilla y segura. Para traders activos o inversores con grandes capitales, opciones como Interactive Brokers pueden ser más eficientes en costos.</p>
    `.trim(),
  },
  {
    titulo: 'Mejores brokers para Chile 2025: guía completa',
    slug: 'mejores-brokers-chile-2025',
    descripcion: 'Los mejores brokers internacionales disponibles en Chile: cuál elegir, cómo depositar y qué regulación tener en cuenta.',
    pais: 'cl',
    categoria: 'brokers',
    fecha_publicacion: '2025-02-10',
    keywords: 'brokers chile, invertir chile, mejores brokers chilenos 2025',
    contenido: `
<h2>El mercado financiero chileno</h2>
<p>Chile es uno de los mercados financieros más maduros de Latinoamérica, con una economía estable y alta penetración bancaria. Muchos chilenos ya invierten localmente a través de la Bolsa de Santiago, pero el acceso a mercados internacionales abre nuevas oportunidades.</p>

<h2>Opciones disponibles en Chile</h2>
<p>Los brokers internacionales más populares disponibles en Chile en 2025 son eToro, Interactive Brokers, XTB y AvaTrade. Todos aceptan residentes chilenos y permiten depósitos en pesos chilenos con conversión automática.</p>

<h2>Broker recomendado para principiantes</h2>
<p>Para chilenos que inician su camino en la inversión, eToro es la opción más accesible. Con solo $50 USD de depósito mínimo y una interfaz simple, permite acceder a acciones internacionales, ETFs y criptomonedas.</p>

<h2>Broker para inversores avanzados</h2>
<p>Interactive Brokers es la opción preferida por inversores chilenos con experiencia. Ofrece acceso a la Bolsa de Santiago directamente, además de todos los mercados globales, con comisiones muy competitivas.</p>

<h2>Impuestos en Chile</h2>
<p>Las rentas provenientes de inversiones en el exterior deben declararse ante el SII como rentas de fuente extranjera. Chile tiene convenios de doble tributación con varios países, lo que puede reducir la carga fiscal.</p>
    `.trim(),
  },
];

const insertar = sqlite.prepare(`
  INSERT OR IGNORE INTO posts (titulo, slug, descripcion, contenido, pais, categoria, autor, publicado, fecha_publicacion, keywords)
  VALUES (@titulo, @slug, @descripcion, @contenido, @pais, @categoria, @autor, @publicado, @fecha_publicacion, @keywords)
`);

for (const art of articulos) {
  insertar.run({
    titulo: art.titulo,
    slug: art.slug,
    descripcion: art.descripcion,
    contenido: art.contenido,
    pais: art.pais ?? null,
    categoria: art.categoria,
    autor: 'Equipo Inversax',
    publicado: 1,
    fecha_publicacion: art.fecha_publicacion,
    keywords: art.keywords,
  });
}

sqlite.close();
console.log('DB seed completado: inversax.db lista.');
