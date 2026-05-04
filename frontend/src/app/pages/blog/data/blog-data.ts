export type BlogCategory = 'precios' | 'tramites' | 'consejos' | 'planificacion';

export interface Bilingual {
  ca: string;
  es: string;
}

export interface BlogPost {
  slug: string;
  date: string;
  category: BlogCategory;
  readingMinutes: number;
  title: Bilingual;
  summary: Bilingual;
  metaDescription: Bilingual;
  body: Bilingual;
}

export const CATEGORY_LABELS: Record<BlogCategory, Bilingual> = {
  precios: { ca: 'Preus', es: 'Precios' },
  tramites: { ca: 'Tràmits', es: 'Trámites' },
  consejos: { ca: 'Consells', es: 'Consejos' },
  planificacion: { ca: 'Planificació', es: 'Planificación' }
};

const POST_001_BANO_EIXAMPLE: BlogPost = {
  slug: 'cuanto-cuesta-reformar-bano-eixample',
  date: '2026-05-04',
  category: 'precios',
  readingMinutes: 7,
  title: {
    es: 'Cuánto cuesta reformar un baño en Eixample en 2026',
    ca: 'Quant costa reformar un bany a l\'Eixample el 2026'
  },
  summary: {
    es: 'Rangos de precio reales según el alcance de la obra, qué encarece un baño en pisos del Eixample y dónde merece la pena gastar más para que dure.',
    ca: 'Rangs de preu reals segons l\'abast de l\'obra, què encareix un bany en pisos de l\'Eixample i on val la pena gastar més perquè duri.'
  },
  metaDescription: {
    es: 'Precios reales para reformar un baño en Eixample (Barcelona): básica 2.500-4.000€, completa 4.000-7.000€, premium 7.000-12.000€. Qué incluye y por qué.',
    ca: 'Preus reals per reformar un bany a l\'Eixample (Barcelona): bàsica 2.500-4.000€, completa 4.000-7.000€, premium 7.000-12.000€. Què inclou i per què.'
  },
  body: {
    es: `
<p class="lead">Si vives en un piso del Eixample y te estás planteando renovar el baño, lo primero que necesitas es una idea clara de qué te va a costar. Te damos rangos reales basados en obras que hemos hecho en la zona, con el detalle de qué incluye cada nivel y dónde conviene no escatimar.</p>

<h2>Tres rangos típicos para baños en Eixample</h2>

<p>Los pisos del Eixample suelen tener baños de entre 4 y 8 m². Sobre ese tamaño y con la obra entera incluida (derribo, impermeabilización, alicatado, sanitarios, mampara y fontanería), los rangos habituales son:</p>

<ul>
  <li><strong>Reforma básica: 2.500–4.000€.</strong> Alicatado parcial (solo zona de ducha o bañera), sanitarios económicos, pavimento estándar y mampara sencilla. Pensada para baños que no quieres usar como argumento de venta del piso.</li>
  <li><strong>Reforma completa: 4.000–7.000€.</strong> Alicatado del techo al suelo, sanitarios de calidad media-alta, pavimento porcelánico, mampara de cristal templado y fontanería renovada. Es lo que pide la mayoría de propietarios que buscan algo bien hecho que dure 15 años sin tocar.</li>
  <li><strong>Reforma premium: 7.000–12.000€ o más.</strong> Materiales de diseño (microcemento, gran formato, gres porcelánico imitando piedra natural), suelo radiante eléctrico, mueble lavabo a medida y mampara abatible. Pensada para baños que se ven en revistas o que suben el valor del piso de forma medible.</li>
</ul>

<p>Estos precios son por baño completo, sin IVA, e incluyen materiales estándar y mano de obra. La cifra exacta depende de tres factores que detallamos a continuación.</p>

<h2>Qué encarece (y abarata) una reforma de baño en Eixample</h2>

<h3>1. La antigüedad del edificio</h3>

<p>Buena parte del Eixample son fincas regias de finales del XIX y principios del XX. En estos edificios suele aparecer:</p>
<ul>
  <li>Tuberías de plomo o hierro fundido que conviene sustituir aprovechando la obra.</li>
  <li>Bajantes generales antiguos que pueden requerir adaptación.</li>
  <li>Falsos suelos o forjados con desniveles que obligan a regularizar antes de alicatar.</li>
</ul>

<p>Renovar la fontanería en una finca antigua suele añadir entre 300 y 800€ al presupuesto. No es un capricho: ahorra goteras futuras, problemas con el vecino de abajo y disgustos a los 5 años.</p>

<h3>2. La distribución del baño</h3>

<p>Cambiar la ubicación del inodoro o la ducha implica mover los desagües, y en los baños del Eixample los bajantes suelen estar en sitios fijos. Mover el inodoro un metro puede sumar 200-500€ por la obra de albañilería y fontanería. Si la distribución actual funciona, no la toques.</p>

<h3>3. Los materiales que elijas</h3>

<p>Aquí es donde la diferencia entre 4.000 y 12.000€ se construye. Algunos órdenes de magnitud:</p>
<ul>
  <li>Azulejos: desde 15€/m² (cerámica básica) hasta 80€/m² (porcelánico de gran formato o imitación piedra).</li>
  <li>Plato de ducha: desde 80€ (acrílico estándar) hasta 600€ (resinas o porcelánico extraplano de obra).</li>
  <li>Mampara: desde 200€ (corredera básica) hasta 1.200€ (frontal abatible con perfilería negra de diseño).</li>
  <li>Grifería: desde 70€ (modelos económicos pero correctos) hasta 350€+ (Hansgrohe, Tres, Roca premium).</li>
  <li>Lavabo y mueble: desde 200€ (suspendido básico) hasta 1.500€ (lavabo de piedra natural o acabado lacado).</li>
</ul>

<h2>Dónde conviene gastar más y dónde puedes ajustar</h2>

<p>Si tienes que estirar el presupuesto, este es nuestro orden de prioridades tras 15 años de baños hechos en Eixample:</p>

<ol>
  <li><strong>Impermeabilización y fontanería: ahorrar aquí es un suicidio.</strong> Una membrana mal puesta o una tubería mal ensamblada te genera goteras a los 6 meses. Material caro relativo, pero invisible: el cliente nunca lo ve y por eso es donde algunos reformistas baratos cortan. Pide que esté detallado en el presupuesto.</li>
  <li><strong>Mampara y grifería: gama media-alta vale la pena.</strong> Son los elementos que tocas todos los días. La mampara barata se llena de cal y oxida bisagras a los 3 años. Una grifería de 200€ dura 15 años; una de 70€ dura 4-5.</li>
  <li><strong>Azulejos: una buena selección estándar es suficiente.</strong> Hay porcelánico básico de calidad por 25€/m² que aguanta perfectamente. Solo dispara el presupuesto si quieres un acabado de diseño concreto.</li>
  <li><strong>Sanitarios: los modelos medios de marcas conocidas dan resultado.</strong> Roca, Sangrá, Geberit ofrecen rangos accesibles que duran décadas. No hace falta el modelo top de catálogo.</li>
</ol>

<h2>El plazo en Eixample: 7 a 12 días</h2>

<p>Un baño de 6m² bien planificado se hace en 7-10 días laborables. En el Eixample sumamos un par de días por la logística de los edificios antiguos: ascensores estrechos, horarios más restrictivos por las comunidades y, a veces, la necesidad de coordinar con el portero. Un baño con cambio de distribución sube a 12-15 días.</p>

<h2>Qué pedir siempre en el presupuesto</h2>

<p>Antes de firmar nada, asegúrate de que el presupuesto desglose:</p>
<ul>
  <li>Coste de mano de obra por separado del coste de materiales.</li>
  <li>Marca y modelo de cada elemento principal (sanitarios, grifería, mampara, azulejos).</li>
  <li>Tratamiento de impermeabilización (con qué producto y en qué zonas).</li>
  <li>Gestión y coste de retirada de escombros.</li>
  <li>Plazo de ejecución por escrito y calendario por fases.</li>
  <li>Garantía explícita de mano de obra (al menos 1 año).</li>
</ul>

<p>Si el presupuesto te lo dan en una hoja con tres líneas de "obra completa de baño", pide más detalle. No es desconfianza: es buena práctica.</p>

<h2>En resumen</h2>

<p>Para un baño estándar en Eixample, espera pagar entre 4.000 y 7.000€ por una reforma completa con materiales que duren. Si bajas mucho de ahí, alguien está ahorrando en lo que no se ve. Si lo subes mucho, casi seguro estás pagando diseño o materiales premium, no obra mejor hecha.</p>

<p>Si quieres un precio cerrado para tu caso concreto, te visitamos sin compromiso y te lo damos por escrito en 24 horas.</p>
`,
    ca: `
<p class="lead">Si vius en un pis de l'Eixample i et planteges renovar el bany, el primer que necessites és una idea clara del que et costarà. Et donem rangs reals basats en obres que hem fet a la zona, amb el detall del que inclou cada nivell i on convé no escatimar.</p>

<h2>Tres rangs típics per a banys a l'Eixample</h2>

<p>Els pisos de l'Eixample solen tenir banys d'entre 4 i 8 m². Sobre aquesta mida i amb l'obra sencera inclosa (enderroc, impermeabilització, enrajolat, sanitaris, mampara i lampisteria), els rangs habituals són:</p>

<ul>
  <li><strong>Reforma bàsica: 2.500–4.000€.</strong> Enrajolat parcial (només zona de dutxa o banyera), sanitaris econòmics, paviment estàndard i mampara senzilla. Pensada per a banys que no vols fer servir com a argument de venda del pis.</li>
  <li><strong>Reforma completa: 4.000–7.000€.</strong> Enrajolat del sostre al terra, sanitaris de qualitat mitjana-alta, paviment porcellànic, mampara de vidre temperat i lampisteria renovada. És el que demana la majoria de propietaris que busquen alguna cosa ben feta que duri 15 anys sense tocar.</li>
  <li><strong>Reforma premium: 7.000–12.000€ o més.</strong> Materials de disseny (microciment, gran format, gres porcellànic imitant pedra natural), terra radiant elèctric, moble lavabo a mida i mampara abatible. Pensada per a banys que es veuen a revistes o que apugen el valor del pis de manera mesurable.</li>
</ul>

<p>Aquests preus són per bany complet, sense IVA, i inclouen materials estàndard i mà d'obra. La xifra exacta depèn de tres factors que detallem a continuació.</p>

<h2>Què encareix (i abarateix) una reforma de bany a l'Eixample</h2>

<h3>1. L'antiguitat de l'edifici</h3>

<p>Bona part de l'Eixample són finques senyorials de finals del XIX i principis del XX. En aquests edificis sol aparèixer:</p>
<ul>
  <li>Canonades de plom o ferro fos que convé substituir aprofitant l'obra.</li>
  <li>Baixants generals antics que poden requerir adaptació.</li>
  <li>Falsos terres o forjats amb desnivells que obliguen a regularitzar abans d'enrajolar.</li>
</ul>

<p>Renovar la lampisteria en una finca antiga sol afegir entre 300 i 800€ al pressupost. No és un caprici: estalvia fuites futures, problemes amb el veí de baix i disgustos als 5 anys.</p>

<h3>2. La distribució del bany</h3>

<p>Canviar la ubicació del vàter o la dutxa implica moure els desguassos, i en els banys de l'Eixample els baixants solen estar en llocs fixos. Moure el vàter un metre pot sumar 200-500€ per l'obra de paleta i lampisteria. Si la distribució actual funciona, no la toquis.</p>

<h3>3. Els materials que triïs</h3>

<p>Aquí és on es construeix la diferència entre 4.000 i 12.000€. Alguns ordres de magnitud:</p>
<ul>
  <li>Rajoles: des de 15€/m² (ceràmica bàsica) fins a 80€/m² (porcellànic de gran format o imitació pedra).</li>
  <li>Plat de dutxa: des de 80€ (acrílic estàndard) fins a 600€ (resines o porcellànic extraplà d'obra).</li>
  <li>Mampara: des de 200€ (corredissa bàsica) fins a 1.200€ (frontal abatible amb perfileria negra de disseny).</li>
  <li>Aixetes: des de 70€ (models econòmics però correctes) fins a 350€+ (Hansgrohe, Tres, Roca premium).</li>
  <li>Lavabo i moble: des de 200€ (suspès bàsic) fins a 1.500€ (lavabo de pedra natural o acabat lacat).</li>
</ul>

<h2>On convé gastar més i on pots ajustar</h2>

<p>Si has d'estirar el pressupost, aquest és el nostre ordre de prioritats després de 15 anys de banys fets a l'Eixample:</p>

<ol>
  <li><strong>Impermeabilització i lampisteria: estalviar aquí és un suïcidi.</strong> Una membrana mal posada o una canonada mal acoblada et genera fuites als 6 mesos. Material relativament car però invisible: el client mai el veu i per això és on alguns reformistes barats retallen. Demana que estigui detallat al pressupost.</li>
  <li><strong>Mampara i aixetes: gamma mitjana-alta val la pena.</strong> Són els elements que toques cada dia. La mampara barata s'omple de calç i oxida frontisses als 3 anys. Una aixeta de 200€ dura 15 anys; una de 70€ dura 4-5.</li>
  <li><strong>Rajoles: una bona selecció estàndard és suficient.</strong> Hi ha porcellànic bàsic de qualitat per 25€/m² que aguanta perfectament. Només dispara el pressupost si vols un acabat de disseny concret.</li>
  <li><strong>Sanitaris: els models mitjans de marques conegudes donen resultat.</strong> Roca, Sangrá, Geberit ofereixen rangs accessibles que duren dècades. No cal el model top de catàleg.</li>
</ol>

<h2>El termini a l'Eixample: 7 a 12 dies</h2>

<p>Un bany de 6m² ben planificat es fa en 7-10 dies laborables. A l'Eixample sumem un parell de dies per la logística dels edificis antics: ascensors estrets, horaris més restrictius per les comunitats i, de vegades, la necessitat de coordinar amb el porter. Un bany amb canvi de distribució puja a 12-15 dies.</p>

<h2>Què demanar sempre al pressupost</h2>

<p>Abans de signar res, assegura't que el pressupost desglossi:</p>
<ul>
  <li>Cost de mà d'obra per separat del cost de materials.</li>
  <li>Marca i model de cada element principal (sanitaris, aixetes, mampara, rajoles).</li>
  <li>Tractament d'impermeabilització (amb quin producte i a quines zones).</li>
  <li>Gestió i cost de retirada de runa.</li>
  <li>Termini d'execució per escrit i calendari per fases.</li>
  <li>Garantia explícita de mà d'obra (almenys 1 any).</li>
</ul>

<p>Si el pressupost te'l donen en un full amb tres línies d'"obra completa de bany", demana més detall. No és desconfiança: és bona pràctica.</p>

<h2>En resum</h2>

<p>Per a un bany estàndard a l'Eixample, espera pagar entre 4.000 i 7.000€ per una reforma completa amb materials que durin. Si baixes molt d'aquí, algú està estalviant en el que no es veu. Si ho puges molt, gairebé segur estàs pagant disseny o materials premium, no obra millor feta.</p>

<p>Si vols un preu tancat per al teu cas concret, et visitem sense compromís i te'l donem per escrit en 24 hores.</p>
`
  }
};

const POST_002_PERMISOS_BCN: BlogPost = {
  slug: 'permisos-reformar-piso-barcelona-2026',
  date: '2026-04-28',
  category: 'tramites',
  readingMinutes: 8,
  title: {
    es: 'Permisos para reformar un piso en Barcelona: guía 2026',
    ca: 'Permisos per reformar un pis a Barcelona: guia 2026'
  },
  summary: {
    es: 'Cuándo basta con una comunicación al ayuntamiento, cuándo necesitas licencia de obras menores y qué tienes que decir a tu comunidad de propietarios antes de empezar.',
    ca: 'Quan n\'hi ha prou amb una comunicació a l\'ajuntament, quan necessites llicència d\'obres menors i què has de dir a la teva comunitat de propietaris abans de començar.'
  },
  metaDescription: {
    es: 'Guía 2026 sobre permisos para reformar piso en Barcelona: comunicación previa, licencia de obras menores, vecinos y comunidad. Qué tramitar y en qué orden.',
    ca: 'Guia 2026 sobre permisos per reformar pis a Barcelona: comunicació prèvia, llicència d\'obres menors, veïns i comunitat. Què tramitar i en quin ordre.'
  },
  body: {
    es: `
<p class="lead">Antes de tocar un solo azulejo en tu piso de Barcelona, conviene tener claro qué papeles necesitas. La buena noticia es que para la mayoría de reformas particulares no hace falta ningún proyecto de arquitecto ni licencia compleja. La menos buena: hay tres trámites distintos según el alcance de la obra y un par de cosas que conviene avisar a la comunidad. Te lo aclaramos todo.</p>

<h2>Los tres niveles de trámite municipal</h2>

<p>El Ajuntament de Barcelona distingue tres regímenes para obras en viviendas particulares, en función de su impacto:</p>

<h3>1. Obras menores sin trámite (régimen exento)</h3>

<p>No requieren ningún papel municipal previo. Son las que <strong>no afectan a estructura, ni a fachada, ni a elementos comunes del edificio, ni a la distribución</strong>. Por ejemplo:</p>
<ul>
  <li>Pintar paredes y techos.</li>
  <li>Cambiar suelos manteniendo el pavimento existente como base o quitándolo.</li>
  <li>Sustituir azulejos en cocina o baño sin tocar tabiques.</li>
  <li>Cambiar sanitarios, grifería o muebles de cocina manteniendo las acometidas en el mismo sitio.</li>
  <li>Sustituir puertas interiores manteniendo el mismo hueco.</li>
</ul>

<p>Ojo: aunque no haga falta papel municipal, la comunidad de propietarios sí puede pedir que avises (lo vemos más abajo).</p>

<h3>2. Comunicación previa de obras menores</h3>

<p>Es el régimen más habitual para reformas integrales de pisos en Barcelona. Se trata de una comunicación que se presenta en el Ajuntament antes de empezar y que <strong>te permite arrancar la obra de forma inmediata</strong>, sin esperar resolución, siempre que el contenido cumpla los requisitos.</p>

<p>Aplica cuando:</p>
<ul>
  <li>Cambias la distribución interior (mueves o tiras tabiques no estructurales).</li>
  <li>Renuevas instalaciones (electricidad, fontanería, calefacción) de forma completa.</li>
  <li>Reformas baños o cocinas con cambio de ubicación de elementos.</li>
  <li>Sustituyes ventanas manteniendo huecos y materiales acordes con la finca.</li>
  <li>Realizas reforma integral del piso sin tocar nada estructural ni fachada.</li>
</ul>

<p>Documentación habitual: instancia, descripción técnica de la obra (memoria con planos sencillos), presupuesto y, si pasa de cierto importe, declaración responsable. La tasa municipal ronda los 60-100€ y suele tramitarse online en 1-2 semanas.</p>

<h3>3. Licencia de obras menores con proyecto</h3>

<p>Para obras que <strong>afectan a estructura, fachada o elementos comunes</strong>: tirar un muro de carga, ampliar huecos en fachada, cambiar la cubierta, intervenir en patios de luces, etc. Aquí sí se exige proyecto firmado por arquitecto técnico o arquitecto colegiado, y la licencia tarda de 1 a 3 meses en concederse.</p>

<p>Para reformas particulares estándar (cocina, baños, suelos, electricidad, distribución no estructural) <strong>no entras en este régimen</strong>. Si entras, lo sabrás porque tu proyecto requiere derribar paredes gruesas o tocar la fachada, y eso no se hace por error.</p>

<h2>Cómo saber qué nivel te toca: un atajo práctico</h2>

<ol>
  <li>¿Tocas estructura, fachada o cubierta? → <strong>Licencia con proyecto</strong>.</li>
  <li>¿Tocas tabiques no estructurales, cambias distribución, renuevas instalaciones o reformas integralmente? → <strong>Comunicación previa</strong>.</li>
  <li>¿Solo cambias acabados (pintar, suelos, azulejos, sanitarios sin mover)? → <strong>Sin trámite municipal</strong>.</li>
</ol>

<p>Cuando hay duda, el propio Ajuntament tiene oficinas de atención (OAC) que orientan gratis sobre el régimen aplicable a tu obra.</p>

<h2>La comunidad de propietarios: qué decir y cuándo</h2>

<p>Aunque no haga falta permiso municipal, tu comunidad puede tener cosas que decir:</p>

<h3>Lo que sí debes notificar</h3>
<ul>
  <li><strong>Uso de zonas comunes:</strong> si vas a usar el ascensor para subir materiales, ocupar el rellano con sacos o instalar una bajante de escombros, avisa con antelación. Algunas comunidades pueden exigir hora de uso del ascensor o cobertores.</li>
  <li><strong>Cambios visibles desde la calle o el patio:</strong> si vas a cambiar ventanas, persianas o cualquier cosa con impacto estético, suele ser necesario el visto bueno de la junta. En fincas catalogadas o protegidas urbanísticamente, hay normas estrictas que la comunidad sí supervisa.</li>
  <li><strong>Ruido fuera de horario:</strong> Barcelona regula el ruido de obras. Lo estándar son días laborables de 8:00 a 21:00, sábados de 9:00 a 14:00 y domingos sin obras. Tu comunidad puede tener normas más estrictas. Comprueba el reglamento interno.</li>
</ul>

<h3>Lo que no necesitas notificar</h3>

<p>Las obras enteramente dentro de tu piso (cocina, baños, distribución interior, suelos, pintura, etc.) son tu derecho como propietario y no requieren autorización de la comunidad. Sí es de buen vecino avisar a los vecinos colindantes con un cartel en el rellano o un mensaje al WhatsApp del edificio: "Vamos a reformar entre el 5 y el 25 de mayo, perdonen las molestias".</p>

<h2>Caso especial: ocupación de vía pública</h2>

<p>Si tu reforma necesita un contenedor de escombros en la calle, requiere un permiso específico del Ajuntament (autorización de ocupación de vía pública) que se tramita en paralelo. El coste varía según la zona y los días, pero suele estar entre 30 y 80€/día. La empresa que te suministra el contenedor lo gestiona habitualmente.</p>

<h2>Pasos en orden, cómo lo hacemos nosotros</h2>

<ol>
  <li>Visita al piso y diagnóstico del alcance.</li>
  <li>Determinar el régimen aplicable (sin trámite / comunicación previa / licencia).</li>
  <li>Si toca comunicación previa: redactarla y presentarla en el Ajuntament. Tarda 1-2 semanas.</li>
  <li>Notificación a la comunidad si se usan zonas comunes o se generan ruidos significativos.</li>
  <li>Permiso de ocupación de vía pública si va a haber contenedor.</li>
  <li>Inicio de la obra en la fecha prevista.</li>
</ol>

<p>Todo eso te lo gestionamos como parte del servicio cuando contratas con nosotros: ni tú haces colas en oficinas municipales ni tienes que entender el lenguaje técnico. Te explicamos qué corresponde a cada papel y firmamos en tu nombre solo lo necesario.</p>

<h2>Errores frecuentes que te pueden salir caros</h2>

<ul>
  <li><strong>Empezar sin comunicación previa cuando toca.</strong> Si te denuncia un vecino, el Ajuntament puede paralizar la obra y multarte (hasta 6.000€ en casos graves) además de obligarte a regularizar a posteriori.</li>
  <li><strong>Tocar elementos comunes sin permiso de la comunidad.</strong> Especialmente bajantes, conductos de ventilación o forjados. Genera líos legales y obligación de reponer.</li>
  <li><strong>Hacer ruido fuera de horario.</strong> Te puede caer una multa por infracción de la ordenanza de ruido y problemas con vecinos para el resto de la obra.</li>
  <li><strong>No conservar la documentación.</strong> Cuando vendas el piso, el comprador puede pedirte papeles de las reformas hechas. Guarda todo en una carpeta digital.</li>
</ul>

<h2>En resumen</h2>

<p>Para una reforma integral estándar en Barcelona necesitas <strong>comunicación previa</strong> al Ajuntament (1-2 semanas) y <strong>aviso a la comunidad</strong> si vas a usar zonas comunes. Para cambios solo de acabados, no hay trámite municipal y el aviso a vecinos es por cortesía. Para tocar estructura o fachada, sí necesitas licencia con proyecto.</p>

<p>Si quieres que te confirmemos qué te toca exactamente en tu caso, lo vemos en la visita previa y te decimos qué papeles tramitamos por ti.</p>
`,
    ca: `
<p class="lead">Abans de tocar una sola rajola al teu pis de Barcelona, convé tenir clar quins papers necessites. La bona notícia és que per a la majoria de reformes particulars no cal cap projecte d'arquitecte ni llicència complexa. La menys bona: hi ha tres tràmits diferents segons l'abast de l'obra i un parell de coses que convé avisar a la comunitat. T'ho aclarim tot.</p>

<h2>Els tres nivells de tràmit municipal</h2>

<p>L'Ajuntament de Barcelona distingeix tres règims per a obres en habitatges particulars, en funció del seu impacte:</p>

<h3>1. Obres menors sense tràmit (règim exempt)</h3>

<p>No requereixen cap paper municipal previ. Són les que <strong>no afecten estructura, ni façana, ni elements comuns de l'edifici, ni la distribució</strong>. Per exemple:</p>
<ul>
  <li>Pintar parets i sostres.</li>
  <li>Canviar terres mantenint el paviment existent com a base o traient-lo.</li>
  <li>Substituir rajoles a cuina o bany sense tocar envans.</li>
  <li>Canviar sanitaris, aixetes o mobles de cuina mantenint les escomeses al mateix lloc.</li>
  <li>Substituir portes interiors mantenint el mateix forat.</li>
</ul>

<p>Ull: encara que no calgui paper municipal, la comunitat de propietaris sí pot demanar que avisis (ho veiem més avall).</p>

<h3>2. Comunicació prèvia d'obres menors</h3>

<p>És el règim més habitual per a reformes integrals de pisos a Barcelona. Es tracta d'una comunicació que es presenta a l'Ajuntament abans de començar i que <strong>et permet arrencar l'obra de manera immediata</strong>, sense esperar resolució, sempre que el contingut compleixi els requisits.</p>

<p>S'aplica quan:</p>
<ul>
  <li>Canvies la distribució interior (mous o tires envans no estructurals).</li>
  <li>Renoves instal·lacions (electricitat, lampisteria, calefacció) de manera completa.</li>
  <li>Reformes banys o cuines amb canvi d'ubicació d'elements.</li>
  <li>Substitueixes finestres mantenint forats i materials acordats amb la finca.</li>
  <li>Fas reforma integral del pis sense tocar res estructural ni façana.</li>
</ul>

<p>Documentació habitual: instància, descripció tècnica de l'obra (memòria amb plànols senzills), pressupost i, si passa de cert import, declaració responsable. La taxa municipal ronda els 60-100€ i sol tramitar-se en línia en 1-2 setmanes.</p>

<h3>3. Llicència d'obres menors amb projecte</h3>

<p>Per a obres que <strong>afecten estructura, façana o elements comuns</strong>: tirar un mur de càrrega, ampliar forats en façana, canviar la coberta, intervenir en patis de llums, etc. Aquí sí s'exigeix projecte signat per arquitecte tècnic o arquitecte col·legiat, i la llicència triga d'1 a 3 mesos a concedir-se.</p>

<p>Per a reformes particulars estàndard (cuina, banys, terres, electricitat, distribució no estructural) <strong>no entres en aquest règim</strong>. Si hi entres, ho sabràs perquè el teu projecte requereix enderrocar parets gruixudes o tocar la façana, i això no es fa per error.</p>

<h2>Com saber quin nivell et toca: una drecera pràctica</h2>

<ol>
  <li>Toques estructura, façana o coberta? → <strong>Llicència amb projecte</strong>.</li>
  <li>Toques envans no estructurals, canvies distribució, renoves instal·lacions o reformes integralment? → <strong>Comunicació prèvia</strong>.</li>
  <li>Només canvies acabats (pintar, terres, rajoles, sanitaris sense moure)? → <strong>Sense tràmit municipal</strong>.</li>
</ol>

<p>Quan hi ha dubte, el mateix Ajuntament té oficines d'atenció (OAC) que orienten gratis sobre el règim aplicable a la teva obra.</p>

<h2>La comunitat de propietaris: què dir i quan</h2>

<p>Encara que no calgui permís municipal, la teva comunitat pot tenir coses a dir:</p>

<h3>El que sí has de notificar</h3>
<ul>
  <li><strong>Ús de zones comunes:</strong> si vas a fer servir l'ascensor per pujar materials, ocupar el replà amb sacs o instal·lar una baixant de runa, avisa amb antelació. Algunes comunitats poden exigir hora d'ús de l'ascensor o cobertors.</li>
  <li><strong>Canvis visibles des del carrer o el pati:</strong> si vas a canviar finestres, persianes o qualsevol cosa amb impacte estètic, sol caldre el vistiplau de la junta. En finques catalogades o protegides urbanísticament, hi ha normes estrictes que la comunitat sí supervisa.</li>
  <li><strong>Soroll fora d'horari:</strong> Barcelona regula el soroll d'obres. L'estàndard són dies laborables de 8:00 a 21:00, dissabtes de 9:00 a 14:00 i diumenges sense obres. La teva comunitat pot tenir normes més estrictes. Comprova el reglament intern.</li>
</ul>

<h3>El que no necessites notificar</h3>

<p>Les obres íntegrament dins del teu pis (cuina, banys, distribució interior, terres, pintura, etc.) són el teu dret com a propietari i no requereixen autorització de la comunitat. Sí és de bon veí avisar els veïns adjacents amb un cartell al replà o un missatge al WhatsApp de l'edifici: "Anem a reformar entre el 5 i el 25 de maig, disculpeu les molèsties".</p>

<h2>Cas especial: ocupació de via pública</h2>

<p>Si la teva reforma necessita un contenidor de runa al carrer, requereix un permís específic de l'Ajuntament (autorització d'ocupació de via pública) que es tramita en paral·lel. El cost varia segons la zona i els dies, però sol estar entre 30 i 80€/dia. L'empresa que et subministra el contenidor ho gestiona habitualment.</p>

<h2>Passos en ordre, com ho fem nosaltres</h2>

<ol>
  <li>Visita al pis i diagnòstic de l'abast.</li>
  <li>Determinar el règim aplicable (sense tràmit / comunicació prèvia / llicència).</li>
  <li>Si toca comunicació prèvia: redactar-la i presentar-la a l'Ajuntament. Triga 1-2 setmanes.</li>
  <li>Notificació a la comunitat si s'utilitzen zones comunes o es generen sorolls significatius.</li>
  <li>Permís d'ocupació de via pública si hi haurà contenidor.</li>
  <li>Inici de l'obra en la data prevista.</li>
</ol>

<p>Tot això t'ho gestionem com a part del servei quan contractes amb nosaltres: ni tu fas cues en oficines municipals ni has d'entendre el llenguatge tècnic. T'expliquem què correspon a cada paper i signem en el teu nom només el necessari.</p>

<h2>Errors freqüents que et poden sortir cars</h2>

<ul>
  <li><strong>Començar sense comunicació prèvia quan toca.</strong> Si et denuncia un veí, l'Ajuntament pot paralitzar l'obra i multar-te (fins a 6.000€ en casos greus) a més d'obligar-te a regularitzar a posteriori.</li>
  <li><strong>Tocar elements comuns sense permís de la comunitat.</strong> Especialment baixants, conductes de ventilació o forjats. Genera embolics legals i obligació de reposar.</li>
  <li><strong>Fer soroll fora d'horari.</strong> Et pot caure una multa per infracció de l'ordenança de soroll i problemes amb veïns per la resta de l'obra.</li>
  <li><strong>No conservar la documentació.</strong> Quan venguis el pis, el comprador pot demanar-te papers de les reformes fetes. Guarda-ho tot en una carpeta digital.</li>
</ul>

<h2>En resum</h2>

<p>Per a una reforma integral estàndard a Barcelona necessites <strong>comunicació prèvia</strong> a l'Ajuntament (1-2 setmanes) i <strong>avís a la comunitat</strong> si vas a fer servir zones comunes. Per a canvis només d'acabats, no hi ha tràmit municipal i l'avís a veïns és per cortesia. Per a tocar estructura o façana, sí necessites llicència amb projecte.</p>

<p>Si vols que et confirmem què et toca exactament en el teu cas, ho veiem a la visita prèvia i et diem quins papers tramitem per tu.</p>
`
  }
};

export const BLOG_POSTS: BlogPost[] = [
  POST_001_BANO_EIXAMPLE,
  POST_002_PERMISOS_BCN
];

export function findPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}
