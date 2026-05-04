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

const POST_003_INTEGRAL_O_FASES: BlogPost = {
  slug: 'reforma-integral-o-por-fases-que-conviene',
  date: '2026-04-21',
  category: 'planificacion',
  readingMinutes: 6,
  title: {
    es: 'Reforma integral o por fases: qué conviene en cada caso',
    ca: 'Reforma integral o per fases: què convé en cada cas'
  },
  summary: {
    es: 'Hacer todo de golpe ahorra dinero y plazo, pero pide piso vacío. Por fases puedes seguir viviendo en casa, pero a la larga sale más caro y la obra tarda años en cerrarse. Te ayudamos a decidir.',
    ca: 'Fer-ho tot de cop estalvia diners i termini, però demana pis buit. Per fases pots seguir vivint a casa, però a la llarga surt més car i l\'obra triga anys a tancar-se. T\'ajudem a decidir.'
  },
  metaDescription: {
    es: 'Reforma integral vs por fases: análisis honesto de costes, plazos, comodidad y resultado final para decidir cómo abordar tu reforma en Barcelona.',
    ca: 'Reforma integral vs per fases: anàlisi honest de costos, terminis, comoditat i resultat final per decidir com abordar la teva reforma a Barcelona.'
  },
  body: {
    es: `
<p class="lead">Tienes un piso para reformar y quieres saber si te conviene atacarlo entero de una vez o ir habitación por habitación. Las dos opciones son válidas; lo importante es saber qué pierdes y qué ganas con cada una para decidir con la información sobre la mesa.</p>

<h2>La diferencia económica real</h2>

<p>Hacer una reforma integral es más barato que hacer la misma obra repartida en fases. Las razones son tres:</p>

<ul>
  <li><strong>Una sola movilización del equipo.</strong> Cada vez que un equipo entra en obra hay un coste fijo: traer herramientas, proteger zonas, montar el espacio. En una integral lo pagas una vez; en fases lo pagas en cada intervención.</li>
  <li><strong>Compras de material agrupadas.</strong> Pedir 80 m² de pavimento es más barato por m² que pedir 25, 30 y 25 en tres pedidos distintos. Los proveedores aplican mejores condiciones a pedidos grandes.</li>
  <li><strong>Trabajos cruzados eficientes.</strong> Si vas a tirar el suelo, es absurdo no aprovechar para revisar el cableado eléctrico que va por debajo. En integral se hace todo de golpe; en fases acabas tocando dos veces lo mismo.</li>
</ul>

<p>Como referencia: una reforma integral de 70 m² puede salir entre un 15% y un 25% más barata que la misma obra hecha en tres fases a lo largo de 3 años.</p>

<h2>La diferencia de tiempo</h2>

<p>Una reforma integral de un piso medio (60-80 m²) se ejecuta en 4-8 semanas. Si haces solo el baño un año, la cocina al siguiente y la pintura al tercero, has tenido obra activa cinco semanas distribuidas en tres años. Más tiempo total, pero también más tiempo entre obras durante el cual el piso es habitable.</p>

<h2>La diferencia de comodidad</h2>

<p>Aquí es donde la cosa se invierte:</p>

<ul>
  <li><strong>Reforma integral.</strong> Lo razonable es vivir fuera del piso esas 4-8 semanas (en casa de familiares, alquiler temporal, hotel). Si insistes en quedarte, la experiencia es complicada: polvo en suspensión, cortes de agua puntuales, ruido, materiales y herramientas en cada esquina.</li>
  <li><strong>Reforma por fases.</strong> Mientras se reforma el baño, sigues durmiendo en tu habitación y comiendo en tu cocina. Mientras se reforma la cocina, te apañas con un microondas en el salón. Es incómodo, pero no necesitas mudarte.</li>
</ul>

<p>Para muchos propietarios, no tener que vivir fuera 6 semanas inclina la balanza hacia las fases incluso aunque sea más caro a la larga.</p>

<h2>Cuándo conviene la integral</h2>

<ul>
  <li>Acabas de comprar el piso y no te has mudado todavía.</li>
  <li>Vas a alquilar o vender el piso una vez reformado.</li>
  <li>El piso está vacío (heredado, comprado para inversión, alquiler temporal libre).</li>
  <li>Toda la instalación eléctrica o la fontanería pide ser renovada (entonces hay que tirar suelos y paredes igual, así que aprovecha).</li>
  <li>Quieres unidad estética: misma carpintería en todas las puertas, mismo pavimento en todo el piso, mismo color de pintura.</li>
  <li>Tienes presupuesto disponible de una vez.</li>
</ul>

<h2>Cuándo conviene por fases</h2>

<ul>
  <li>Vives en el piso y no tienes a dónde ir 6 semanas.</li>
  <li>El piso está bien en general; solo hay zonas problemáticas (un baño envejecido, una cocina inservible).</li>
  <li>Tienes presupuesto limitado y prefieres ir reformando a medida que ahorras.</li>
  <li>No te urge tener todo coordinado estéticamente: el resto del piso te gusta como está.</li>
</ul>

<h2>La opción intermedia: bloques</h2>

<p>Una opción que recomendamos cuando vives en el piso es agrupar la obra en dos bloques temporalmente cercanos:</p>

<ul>
  <li><strong>Bloque 1: zonas húmedas y críticas.</strong> Baño + cocina, hechas seguidas en 4-5 semanas con tu mudanza temporal. Es lo que más vale la pena hacer junto porque comparte fontanería y suelo.</li>
  <li><strong>Bloque 2: el resto.</strong> Pintura, parquet, puertas, hecho 6-12 meses después en otras 1-2 semanas con menos disrupción.</li>
</ul>

<p>Sale algo más caro que una integral pura pero menos que una reforma por fases auténtica, y reduce la mudanza a 4-5 semanas en lugar de 7-8.</p>

<h2>Recomendación práctica</h2>

<p>Si vas a vivir 10+ años en el piso, la diferencia económica entre integral y fases la amortizas. Lo que no se amortiza es vivir 8 semanas en una obra activa: si puedes mudarte temporal, hazlo y haz integral. Si no, hazlo por bloques de zonas húmedas.</p>

<p>Si el piso es para alquilar o vender, integral siempre. La unidad estética y el coste menor son determinantes para el resultado de mercado.</p>

<p>Si tienes dudas concretas para tu caso, lo vemos en la visita previa: vamos habitación por habitación contigo y te decimos qué orden tiene más sentido.</p>
`,
    ca: `
<p class="lead">Tens un pis per reformar i vols saber si et convé atacar-lo sencer d'una vegada o anar habitació per habitació. Les dues opcions són vàlides; el que importa és saber què perds i què guanyes amb cadascuna per decidir amb la informació sobre la taula.</p>

<h2>La diferència econòmica real</h2>

<p>Fer una reforma integral és més barat que fer la mateixa obra repartida en fases. Les raons són tres:</p>

<ul>
  <li><strong>Una sola mobilització de l'equip.</strong> Cada vegada que un equip entra en obra hi ha un cost fix: portar eines, protegir zones, muntar l'espai. En una integral el pagues una vegada; en fases el pagues en cada intervenció.</li>
  <li><strong>Compres de material agrupades.</strong> Demanar 80 m² de paviment és més barat per m² que demanar 25, 30 i 25 en tres comandes diferents. Els proveïdors apliquen millors condicions a comandes grans.</li>
  <li><strong>Treballs creuats eficients.</strong> Si vas a treure el terra, és absurd no aprofitar per revisar el cablejat elèctric que va per sota. En integral es fa tot de cop; en fases acabes tocant dues vegades el mateix.</li>
</ul>

<p>Com a referència: una reforma integral de 70 m² pot sortir entre un 15% i un 25% més barata que la mateixa obra feta en tres fases al llarg de 3 anys.</p>

<h2>La diferència de temps</h2>

<p>Una reforma integral d'un pis mitjà (60-80 m²) s'executa en 4-8 setmanes. Si fas només el bany un any, la cuina l'altre i la pintura el tercer, has tingut obra activa cinc setmanes distribuïdes en tres anys. Més temps total, però també més temps entre obres durant el qual el pis és habitable.</p>

<h2>La diferència de comoditat</h2>

<p>Aquí és on la cosa s'inverteix:</p>

<ul>
  <li><strong>Reforma integral.</strong> El raonable és viure fora del pis aquestes 4-8 setmanes (a casa de familiars, lloguer temporal, hotel). Si insisteixes a quedar-te, l'experiència és complicada: pols en suspensió, talls d'aigua puntuals, soroll, materials i eines a cada cantó.</li>
  <li><strong>Reforma per fases.</strong> Mentre es reforma el bany, segueixes dormint a la teva habitació i menjant a la teva cuina. Mentre es reforma la cuina, t'apanyes amb un microones al saló. És incòmode, però no necessites mudar-te.</li>
</ul>

<p>Per a molts propietaris, no haver de viure fora 6 setmanes inclina la balança cap a les fases fins i tot encara que sigui més car a la llarga.</p>

<h2>Quan convé la integral</h2>

<ul>
  <li>Acabes de comprar el pis i no t'hi has mudat encara.</li>
  <li>Vas a llogar o vendre el pis un cop reformat.</li>
  <li>El pis està buit (heretat, comprat per inversió, lloguer temporal lliure).</li>
  <li>Tota la instal·lació elèctrica o la lampisteria demana ser renovada (llavors cal treure terres i parets igualment, així que aprofita).</li>
  <li>Vols unitat estètica: mateixa fusteria a totes les portes, mateix paviment a tot el pis, mateix color de pintura.</li>
  <li>Tens pressupost disponible d'una vegada.</li>
</ul>

<h2>Quan convé per fases</h2>

<ul>
  <li>Vius al pis i no tens on anar 6 setmanes.</li>
  <li>El pis està bé en general; només hi ha zones problemàtiques (un bany envellit, una cuina inservible).</li>
  <li>Tens pressupost limitat i prefereixes anar reformant a mesura que estalvies.</li>
  <li>No t'urgeix tenir-ho tot coordinat estèticament: la resta del pis t'agrada com està.</li>
</ul>

<h2>L'opció intermèdia: blocs</h2>

<p>Una opció que recomanem quan vius al pis és agrupar l'obra en dos blocs temporalment propers:</p>

<ul>
  <li><strong>Bloc 1: zones humides i crítiques.</strong> Bany + cuina, fets seguits en 4-5 setmanes amb la teva mudança temporal. És el que més val la pena fer junt perquè comparteix lampisteria i terra.</li>
  <li><strong>Bloc 2: la resta.</strong> Pintura, parquet, portes, fet 6-12 mesos després en altres 1-2 setmanes amb menys disrupció.</li>
</ul>

<p>Surt una mica més car que una integral pura però menys que una reforma per fases autèntica, i redueix la mudança a 4-5 setmanes en lloc de 7-8.</p>

<h2>Recomanació pràctica</h2>

<p>Si vas a viure 10+ anys al pis, la diferència econòmica entre integral i fases l'amortitzes. El que no s'amortitza és viure 8 setmanes en una obra activa: si pots fer-te una mudança temporal, fes-la i fes integral. Si no, fes-ho per blocs de zones humides.</p>

<p>Si el pis és per llogar o vendre, integral sempre. La unitat estètica i el cost menor són determinants per al resultat de mercat.</p>

<p>Si tens dubtes concrets per al teu cas, ho veiem a la visita prèvia: anem habitació per habitació amb tu i et diem quin ordre té més sentit.</p>
`
  }
};

const POST_004_AZULEJOS_BANO: BlogPost = {
  slug: 'como-elegir-azulejos-bano-que-envejezcan-bien',
  date: '2026-04-14',
  category: 'consejos',
  readingMinutes: 6,
  title: {
    es: 'Cómo elegir azulejos para baño que envejezcan bien',
    ca: 'Com triar rajoles per a bany que envelleixin bé'
  },
  summary: {
    es: 'Las modas pasan; tu baño dura 15-20 años. Pequeñas decisiones al elegir azulejos marcan la diferencia entre un baño que se ve cansado en 5 años y uno que sigue bien en 15.',
    ca: 'Les modes passen; el teu bany dura 15-20 anys. Petites decisions en triar rajoles marquen la diferència entre un bany que es veu cansat en 5 anys i un que segueix bé en 15.'
  },
  metaDescription: {
    es: 'Guía para elegir azulejos de baño duraderos: porcelánico vs cerámica, formato, color, junta, acabados y errores a evitar.',
    ca: 'Guia per triar rajoles de bany duradores: porcellànic vs ceràmica, format, color, juntura, acabats i errors a evitar.'
  },
  body: {
    es: `
<p class="lead">El azulejo es el material más visible de tu baño y a la vez el más difícil de cambiar después. Cuando elijas, piensa en cómo lucirá en 10 años, no en cómo se ve en el catálogo de hoy. Esta es la guía que damos a nuestros clientes en cada visita.</p>

<h2>Porcelánico vs cerámica: la decisión más importante</h2>

<p>El porcelánico se cuece a más temperatura, es más denso, absorbe menos humedad y aguanta golpes mejor que la cerámica tradicional. Para suelos de baño es prácticamente obligatorio. Para paredes, también es la elección más segura.</p>

<p>La cerámica esmaltada de pared sigue siendo válida y más barata, pero tiene una vida útil menor: el esmalte se raya, se opaca con el tiempo y los bordes se cantean si reciben golpes. El sobrecoste del porcelánico (5-10€/m² más) se amortiza en durabilidad.</p>

<p>Si tu presupuesto está justo: pavimento porcelánico siempre, paredes pueden ser cerámica de gama media. Nunca al revés.</p>

<h2>Formato: grande vs pequeño</h2>

<p>El formato grande (60x60, 80x80, 100x100, 120x60 rectificado) es la tendencia desde hace años y no se va a marchar pronto: cuantas menos juntas, menos suciedad acumulada y aspecto más limpio. Para baños pequeños es especialmente recomendable porque visualmente amplía el espacio.</p>

<p>El formato pequeño (mosaicos, hidráulicos pequeños) está bien como acento (suelo de plato de ducha, una pared decorativa) pero usado en grandes superficies envejece peor: muchas juntas, muchos puntos donde acumular humedad y cal.</p>

<p>Recomendación segura: pared en gran formato (60x120 o similar), suelo en gran formato (60x60 o 80x80), y si quieres detalle decorativo, un mosaico solo en una zona acotada.</p>

<h2>Color: lo que envejece mal</h2>

<p>El blanco roto y los grises neutros son la apuesta segura. Han funcionado durante 30 años y seguirán funcionando. Permiten cambiar accesorios, mampara y muebles sin que el conjunto chirríe.</p>

<p>Lo que envejece mal en azulejos:</p>
<ul>
  <li><strong>Colores muy saturados</strong> (verde lima, fucsia, naranja). Se sienten "de su época" en pocos años.</li>
  <li><strong>Imitaciones cuestionables</strong>. Imitación mármol fake, imitación madera de baja calidad: se nota que no es lo que pretende ser.</li>
  <li><strong>Texturas estampadas con dibujos.</strong> Lo que hoy te parece original, en 8 años parece anticuado.</li>
  <li><strong>Negro en grandes superficies sin luz natural.</strong> Estética potente pero impracticable: cualquier mota de cal blanca se ve como un faro.</li>
</ul>

<p>Si quieres color, ponlo en una sola pared como acento. El resto neutro.</p>

<h2>La junta importa más de lo que crees</h2>

<p>Una junta de 1,5-2 mm en color similar al azulejo es invisible y aporta limpieza. Una junta de 4-5 mm en color contrastado se convierte en el primer detalle que ves al entrar al baño y, sobre todo, en el primer sitio donde la cal y el moho hacen estragos.</p>

<p>Para porcelánico rectificado, junta de 1,5 mm en gris o blanco. Para cerámica estándar, 2 mm. Y siempre, siempre, mortero hidrofugado en zonas húmedas: la diferencia con la lechada de cemento normal son 2€ el saco y 10 años más de aguante.</p>

<h2>Acabados: mate, brillo, antideslizante</h2>

<ul>
  <li><strong>Pared: mate o satinado.</strong> El brillo intenso refleja imperfecciones y se mancha con cal de forma muy visible. El mate es más perdonador.</li>
  <li><strong>Suelo: rugoso clase C2 o C3.</strong> Los suelos de baño tienen que ser antideslizantes en mojado. La normativa lo exige y, además, evita resbalones que pueden costar caro. No bajes de C2.</li>
  <li><strong>Plato de ducha: clase C3 mínimo.</strong> Es la zona más resbaladiza por la combinación agua + jabón.</li>
</ul>

<h2>Errores frecuentes que vemos en obras de otros</h2>

<ul>
  <li>Pavimento brillante en baño (precioso, pero patinador y se raya).</li>
  <li>Misma serie en pared y suelo: pierde profundidad, parece una caja.</li>
  <li>Junta blanca en zona de ducha (la cal y el moho la convierten en gris-marrón en 2 años).</li>
  <li>Mosaico en toda la pared de la ducha (acumulador de cal y suciedad).</li>
  <li>Color "de moda" muy específico (rosa empolvado, verde sage): te encanta hoy, te aburre en 4 años.</li>
</ul>

<h2>Una opción segura para no fallar</h2>

<p>Si quieres un baño que en 15 años siga viéndose bien y no te quites el sueño eligiendo:</p>

<ul>
  <li>Pared: porcelánico mate de 60x120 cm en blanco roto o gris claro.</li>
  <li>Suelo: porcelánico antideslizante C3 de 60x60 cm en gris medio o cemento mate.</li>
  <li>Junta de 1,5-2 mm en gris claro.</li>
  <li>Plato de ducha: porcelánico extraplano del mismo tono que el suelo.</li>
  <li>Si quieres color, una sola pared (la del lavabo) en azul oscuro mate o verde botella.</li>
</ul>

<p>Esta combinación funciona en cualquier baño y, si vendes el piso, no espantará a ningún comprador. Y eso es exactamente lo que tienes que buscar en un material que dura 20 años.</p>
`,
    ca: `
<p class="lead">La rajola és el material més visible del teu bany i alhora el més difícil de canviar després. Quan triïs, pensa en com lluirà d'aquí a 10 anys, no en com es veu al catàleg d'avui. Aquesta és la guia que donem als nostres clients a cada visita.</p>

<h2>Porcellànic vs ceràmica: la decisió més important</h2>

<p>El porcellànic es cou a més temperatura, és més dens, absorbeix menys humitat i aguanta cops millor que la ceràmica tradicional. Per a terres de bany és pràcticament obligatori. Per a parets, també és l'elecció més segura.</p>

<p>La ceràmica esmaltada de paret continua sent vàlida i més barata, però té una vida útil menor: l'esmalt es ratlla, s'opaca amb el temps i les vores es despunten si reben cops. El sobrecost del porcellànic (5-10€/m² més) s'amortitza en durabilitat.</p>

<p>Si el teu pressupost està just: paviment porcellànic sempre, parets poden ser ceràmica de gamma mitjana. Mai a l'inrevés.</p>

<h2>Format: gran vs petit</h2>

<p>El format gran (60x60, 80x80, 100x100, 120x60 rectificat) és la tendència des de fa anys i no marxarà aviat: com menys juntes, menys brutícia acumulada i aspecte més net. Per a banys petits és especialment recomanable perquè visualment amplia l'espai.</p>

<p>El format petit (mosaics, hidràulics petits) està bé com a accent (terra de plat de dutxa, una paret decorativa) però usat en grans superfícies envelleix pitjor: moltes juntures, molts punts on acumular humitat i calç.</p>

<p>Recomanació segura: paret en gran format (60x120 o similar), terra en gran format (60x60 o 80x80), i si vols detall decoratiu, un mosaic només en una zona acotada.</p>

<h2>Color: el que envelleix malament</h2>

<p>El blanc trencat i els grisos neutres són l'aposta segura. Han funcionat durant 30 anys i continuaran funcionant. Permeten canviar accessoris, mampara i mobles sense que el conjunt grinyoli.</p>

<p>El que envelleix malament en rajoles:</p>
<ul>
  <li><strong>Colors molt saturats</strong> (verd llima, fúcsia, taronja). Se senten "de la seva època" en pocs anys.</li>
  <li><strong>Imitacions qüestionables</strong>. Imitació marbre fake, imitació fusta de baixa qualitat: es nota que no és el que pretén ser.</li>
  <li><strong>Textures estampades amb dibuixos.</strong> El que avui et sembla original, en 8 anys sembla antiquat.</li>
  <li><strong>Negre en grans superfícies sense llum natural.</strong> Estètica potent però impracticable: qualsevol mota de calç blanca es veu com un far.</li>
</ul>

<p>Si vols color, posa'l en una sola paret com a accent. La resta neutre.</p>

<h2>La juntura importa més del que creus</h2>

<p>Una juntura d'1,5-2 mm en color similar a la rajola és invisible i aporta netedat. Una juntura de 4-5 mm en color contrastat es converteix en el primer detall que veus en entrar al bany i, sobretot, en el primer lloc on la calç i la floridura fan estralls.</p>

<p>Per a porcellànic rectificat, juntura d'1,5 mm en gris o blanc. Per a ceràmica estàndard, 2 mm. I sempre, sempre, morter hidrofugat en zones humides: la diferència amb la lletada de ciment normal són 2€ el sac i 10 anys més d'aguant.</p>

<h2>Acabats: mat, brillant, antilliscant</h2>

<ul>
  <li><strong>Paret: mat o satinat.</strong> El brillant intens reflecteix imperfeccions i es taca amb calç de manera molt visible. El mat és més perdonador.</li>
  <li><strong>Terra: rugós classe C2 o C3.</strong> Els terres de bany han de ser antilliscants en mullat. La normativa ho exigeix i, a més, evita relliscades que poden costar cares. No baixis de C2.</li>
  <li><strong>Plat de dutxa: classe C3 mínim.</strong> És la zona més relliscosa per la combinació aigua + sabó.</li>
</ul>

<h2>Errors freqüents que veiem en obres d'altres</h2>

<ul>
  <li>Paviment brillant en bany (preciós, però patinador i es ratlla).</li>
  <li>Mateixa sèrie en paret i terra: perd profunditat, sembla una capsa.</li>
  <li>Juntura blanca en zona de dutxa (la calç i la floridura la converteixen en gris-marró en 2 anys).</li>
  <li>Mosaic a tota la paret de la dutxa (acumulador de calç i brutícia).</li>
  <li>Color "de moda" molt específic (rosa empolvorat, verd sage): t'encanta avui, t'avorreix en 4 anys.</li>
</ul>

<h2>Una opció segura per no fallar</h2>

<p>Si vols un bany que d'aquí a 15 anys segueixi veient-se bé i no et treguis el son triant:</p>

<ul>
  <li>Paret: porcellànic mat de 60x120 cm en blanc trencat o gris clar.</li>
  <li>Terra: porcellànic antilliscant C3 de 60x60 cm en gris mitjà o ciment mat.</li>
  <li>Juntura d'1,5-2 mm en gris clar.</li>
  <li>Plat de dutxa: porcellànic extraplà del mateix to que el terra.</li>
  <li>Si vols color, una sola paret (la del lavabo) en blau fosc mat o verd ampolla.</li>
</ul>

<p>Aquesta combinació funciona en qualsevol bany i, si vens el pis, no espantarà cap comprador. I això és exactament el que has de buscar en un material que dura 20 anys.</p>
`
  }
};

const POST_005_ERRORES_COCINA: BlogPost = {
  slug: 'errores-tipicos-reformar-cocina-y-como-evitarlos',
  date: '2026-04-07',
  category: 'consejos',
  readingMinutes: 7,
  title: {
    es: 'Errores típicos al reformar una cocina (y cómo evitarlos)',
    ca: 'Errors típics en reformar una cuina (i com evitar-los)'
  },
  summary: {
    es: 'La cocina es la habitación más usada de la casa y la más cara de reformar. Los errores que cometen propietarios bienintencionados se traducen en sufrimiento diario durante 15 años.',
    ca: 'La cuina és l\'habitació més utilitzada de la casa i la més cara de reformar. Els errors que cometen propietaris ben intencionats es tradueixen en sofriment diari durant 15 anys.'
  },
  metaDescription: {
    es: 'Errores frecuentes al reformar cocina y cómo evitarlos: distribución, almacenaje, materiales, iluminación y los detalles que marcan la diferencia diaria.',
    ca: 'Errors freqüents en reformar cuina i com evitar-los: distribució, emmagatzematge, materials, il·luminació i els detalls que marquen la diferència diària.'
  },
  body: {
    es: `
<p class="lead">Una cocina mal pensada es como un coche con asiento incómodo: cada día notas el problema y cada día deseas no haberlo elegido así. Estos son los siete errores que más vemos cuando entramos a hacer reformas que ya hizo otro y los propietarios se arrepienten.</p>

<h2>1. Empezar por la estética y no por la función</h2>

<p>Es el error más común. El propietario llega con una imagen de Pinterest, elige un color, una encimera y unos muebles bonitos, y la cocina se diseña alrededor de eso. Resultado: queda preciosa en fotos pero es incómoda de usar.</p>

<p>Lo correcto es al revés: primero defines cómo cocinas (¿cocinas mucho?, ¿en pareja?, ¿comes en la cocina?), después la distribución funcional, después materiales y por último estética. La estética viene de cómo materializas las decisiones funcionales, no al revés.</p>

<h2>2. Subestimar el almacenaje</h2>

<p>Casi nadie tiene suficiente almacenaje en su cocina. Las medidas estándar suben a 240 cm de altura como mucho, dejando 30-40 cm muertos hasta el techo donde acaba acumulándose polvo y trastos sobre los muebles.</p>

<p>Soluciones que funcionan:</p>
<ul>
  <li><strong>Muebles altos hasta el techo</strong> (con un mueble de remate por encima del estándar). Aumenta capacidad un 25-30% en el mismo m².</li>
  <li><strong>Cajones en muebles bajos en lugar de puertas batientes.</strong> Ves todo de un vistazo, accedes a todo, no hay esquinas muertas. Más caro pero infinitamente más usable.</li>
  <li><strong>Despensa columna de 60 cm con cajones interiores.</strong> Sustituye un módulo entero de muebles bajos por capacidad equivalente más accesible.</li>
  <li><strong>Aprovechar esquinas con sistemas extraíbles</strong> (Le Mans, Magic Corner). Sin esto, las esquinas son agujeros donde se pierde lo que metes.</li>
</ul>

<h2>3. Mala iluminación</h2>

<p>Casi todas las cocinas tienen un único punto de luz central en el techo, generalmente sobre la mesa o en medio de la habitación. Eso significa que cuando estás cortando o cocinando, tu propio cuerpo te hace sombra sobre la zona de trabajo.</p>

<p>La iluminación de cocina debe tener tres capas:</p>
<ul>
  <li><strong>Luz general</strong> (techo): potencia neutra, blanco frío 4000K, 600-800 lúmenes.</li>
  <li><strong>Luz de trabajo bajo muebles altos</strong>: tira LED u ojos de buey integrados que iluminan la encimera. Es lo que más diferencia hace en el día a día.</li>
  <li><strong>Luz ambiente</strong> (opcional): tira LED bajo muebles altos cara al techo, o luz cálida de campana. Aporta uso "calmado" en cenas o desayunos.</li>
</ul>

<p>El sobrecoste de incluir tira LED bajo muebles es 100-150€ y es la decisión que más nos agradecen los clientes a los 6 meses.</p>

<h2>4. Tomas de corriente mal pensadas</h2>

<p>Lo típico: dos enchufes detrás del frigorífico, dos en la columna de horno, y nada más. Resultado: cuando quieres usar la batidora tienes que apartar el microondas; cuando quieres cargar el móvil mientras cocinas no hay sitio.</p>

<p>Lo que recomendamos:</p>
<ul>
  <li><strong>Una toma cada 60-70 cm en la encimera de trabajo</strong>, a 10-15 cm sobre la encimera (estética) o como tomas escamoteables empotradas (premium).</li>
  <li>Tomas dedicadas para cada electrodoméstico fijo (frigorífico, horno, microondas, lavavajillas, vitro/inducción) con su propio circuito.</li>
  <li>Una toma USB junto a la encimera principal: cargar móvil mientras cocinas o ves recetas.</li>
  <li>Si hay isla, dos o tres tomas en uno de los lados.</li>
</ul>

<h2>5. Encimera delicada en cocina muy usada</h2>

<p>El mármol natural y muchas piedras decorativas son preciosas pero porosas: absorben aceite, vino y café como una esponja. En una cocina familiar de uso intenso, la encimera de mármol acaba con manchas permanentes en 1-2 años.</p>

<p>Por orden de durabilidad y resistencia: cuarzo compacto (Silestone, Caesarstone) > Dekton > granito > cuarzo aglomerado > mármol natural > laminado.</p>

<p>Para cocina de uso normal-alto, recomendamos cuarzo compacto o Dekton. El laminado puede salir bien en cocinas de uso bajo o presupuesto justo, pero las pequeñas quemaduras y golpes le acaban afectando.</p>

<h2>6. Triángulo de trabajo ignorado</h2>

<p>El "triángulo de trabajo" es la relación entre frigorífico, fregadero y zona de cocción. Idealmente, los tres puntos deben estar a una distancia razonable entre sí (cada lado del triángulo de 1,2-2,7 m) y sin obstáculos.</p>

<p>Cuando el frigorífico está a 4 metros del fregadero porque "queda mejor estéticamente", cocinar se convierte en una maratón. Es uno de esos detalles que en plano parecen poca cosa pero en uso real cambian todo.</p>

<h2>7. No pensar en la extracción</h2>

<p>Una campana mal dimensionada o mal canalizada es un suplicio: no aspira lo suficiente, ruido excesivo, olores que se quedan días en el piso.</p>

<ul>
  <li>Potencia mínima: 600 m³/h para cocina cerrada, 800 m³/h para cocina abierta al salón.</li>
  <li>Salida al exterior siempre que sea posible (mucho mejor que recirculación con filtros de carbón).</li>
  <li>Tubo rígido y diámetro suficiente (mínimo 150 mm para hornos potentes).</li>
  <li>Altura sobre la encimera de cocción: 60-70 cm para gas, 50-60 cm para inducción.</li>
</ul>

<h2>Cómo lo hacemos nosotros</h2>

<p>En la visita previa, no empezamos por colores ni acabados. Te preguntamos cómo cocinas, cuántos sois, qué te frustra de tu cocina actual y qué electrodomésticos usas a diario. De ahí sale la distribución funcional.</p>

<p>Después vienen materiales (eligiendo durabilidad por encima de moda), iluminación en tres capas y, finalmente, los detalles estéticos. Cuando se piensa en este orden, el resultado es una cocina que sigue funcionando bien después de 10 años de uso intenso.</p>

<p>Si quieres una segunda opinión sobre tu proyecto de cocina (incluso si todavía no nos has contratado), pásanos los planos por WhatsApp y te decimos qué tres cosas mejoraríamos antes de empezar.</p>
`,
    ca: `
<p class="lead">Una cuina mal pensada és com un cotxe amb seient incòmode: cada dia notes el problema i cada dia desitges no haver-lo triat així. Aquests són els set errors que més veiem quan entrem a fer reformes que ja va fer un altre i els propietaris se'n penedeixen.</p>

<h2>1. Començar per l'estètica i no per la funció</h2>

<p>És l'error més comú. El propietari arriba amb una imatge de Pinterest, tria un color, una encimera i uns mobles bonics, i la cuina es dissenya al voltant d'això. Resultat: queda preciosa a fotos però és incòmoda d'utilitzar.</p>

<p>El correcte és al revés: primer defineixes com cuines (cuines molt?, en parella?, menges a la cuina?), després la distribució funcional, després materials i finalment estètica. L'estètica ve de com materialitzes les decisions funcionals, no al revés.</p>

<h2>2. Subestimar l'emmagatzematge</h2>

<p>Gairebé ningú té prou emmagatzematge a la cuina. Les mides estàndard pugen a 240 cm d'altura com a màxim, deixant 30-40 cm morts fins al sostre on acaba acumulant-se pols i trastos sobre els mobles.</p>

<p>Solucions que funcionen:</p>
<ul>
  <li><strong>Mobles alts fins al sostre</strong> (amb un moble de remat per sobre de l'estàndard). Augmenta capacitat un 25-30% en el mateix m².</li>
  <li><strong>Calaixos en mobles baixos en lloc de portes batents.</strong> Veus tot d'un cop d'ull, accedeixes a tot, no hi ha cantonades mortes. Més car però infinitament més usable.</li>
  <li><strong>Rebost columna de 60 cm amb calaixos interiors.</strong> Substitueix un mòdul sencer de mobles baixos per capacitat equivalent més accessible.</li>
  <li><strong>Aprofitar cantonades amb sistemes extraïbles</strong> (Le Mans, Magic Corner). Sense això, les cantonades són forats on es perd el que hi fiques.</li>
</ul>

<h2>3. Mala il·luminació</h2>

<p>Gairebé totes les cuines tenen un únic punt de llum central al sostre, generalment sobre la taula o al mig de l'habitació. Això significa que quan estàs tallant o cuinant, el teu propi cos et fa ombra sobre la zona de treball.</p>

<p>La il·luminació de cuina ha de tenir tres capes:</p>
<ul>
  <li><strong>Llum general</strong> (sostre): potència neutra, blanc fred 4000K, 600-800 lúmens.</li>
  <li><strong>Llum de treball sota mobles alts</strong>: tira LED o ulls de bou integrats que il·luminen l'encimera. És el que més diferència fa al dia a dia.</li>
  <li><strong>Llum ambient</strong> (opcional): tira LED sota mobles alts cara al sostre, o llum càlida de campana. Aporta ús "calmat" en sopars o esmorzars.</li>
</ul>

<p>El sobrecost d'incloure tira LED sota mobles és 100-150€ i és la decisió que més ens agraeixen els clients als 6 mesos.</p>

<h2>4. Endolls mal pensats</h2>

<p>El típic: dos endolls darrere del frigorífic, dos a la columna de forn, i res més. Resultat: quan vols utilitzar la batedora has d'apartar el microones; quan vols carregar el mòbil mentre cuines no hi ha lloc.</p>

<p>El que recomanem:</p>
<ul>
  <li><strong>Un endoll cada 60-70 cm a l'encimera de treball</strong>, a 10-15 cm sobre l'encimera (estètica) o com endolls escamotejables encastats (premium).</li>
  <li>Endolls dedicats per a cada electrodomèstic fix (frigorífic, forn, microones, rentavaixelles, vitro/inducció) amb el seu propi circuit.</li>
  <li>Un endoll USB al costat de l'encimera principal: carregar mòbil mentre cuines o veus receptes.</li>
  <li>Si hi ha illa, dos o tres endolls en un dels costats.</li>
</ul>

<h2>5. Encimera delicada en cuina molt utilitzada</h2>

<p>El marbre natural i moltes pedres decoratives són precioses però poroses: absorbeixen oli, vi i cafè com una esponja. En una cuina familiar d'ús intens, l'encimera de marbre acaba amb taques permanents en 1-2 anys.</p>

<p>Per ordre de durabilitat i resistència: quars compacte (Silestone, Caesarstone) > Dekton > granit > quars aglomerat > marbre natural > laminat.</p>

<p>Per a cuina d'ús normal-alt, recomanem quars compacte o Dekton. El laminat pot sortir bé en cuines d'ús baix o pressupost just, però les petites cremades i cops l'acaben afectant.</p>

<h2>6. Triangle de treball ignorat</h2>

<p>El "triangle de treball" és la relació entre frigorífic, aigüera i zona de cocció. Idealment, els tres punts han d'estar a una distància raonable entre si (cada costat del triangle d'1,2-2,7 m) i sense obstacles.</p>

<p>Quan el frigorífic està a 4 metres de l'aigüera perquè "queda millor estèticament", cuinar es converteix en una marató. És un d'aquests detalls que al plànol semblen poca cosa però en ús real ho canvien tot.</p>

<h2>7. No pensar en l'extracció</h2>

<p>Una campana mal dimensionada o mal canalitzada és un suplici: no aspira prou, soroll excessiu, olors que es queden dies al pis.</p>

<ul>
  <li>Potència mínima: 600 m³/h per a cuina tancada, 800 m³/h per a cuina oberta al saló.</li>
  <li>Sortida a l'exterior sempre que sigui possible (molt millor que recirculació amb filtres de carboni).</li>
  <li>Tub rígid i diàmetre suficient (mínim 150 mm per a forns potents).</li>
  <li>Altura sobre l'encimera de cocció: 60-70 cm per a gas, 50-60 cm per a inducció.</li>
</ul>

<h2>Com ho fem nosaltres</h2>

<p>A la visita prèvia, no comencem per colors ni acabats. Et preguntem com cuines, quants sou, què et frustra de la teva cuina actual i quins electrodomèstics utilitzes diàriament. D'aquí surt la distribució funcional.</p>

<p>Després venen materials (triant durabilitat per sobre de moda), il·luminació en tres capes i, finalment, els detalls estètics. Quan es pensa en aquest ordre, el resultat és una cuina que segueix funcionant bé després de 10 anys d'ús intens.</p>

<p>Si vols una segona opinió sobre el teu projecte de cuina (fins i tot si encara no ens has contractat), passa'ns els plànols per WhatsApp i et diem quines tres coses milloraríem abans de començar.</p>
`
  }
};

const POST_006_IVA_REDUCIDO: BlogPost = {
  slug: 'iva-reducido-reformas-cuando-se-aplica',
  date: '2026-03-31',
  category: 'precios',
  readingMinutes: 5,
  title: {
    es: 'IVA reducido en reformas: cuándo se aplica el 10%',
    ca: 'IVA reduït en reformes: quan s\'aplica el 10%'
  },
  summary: {
    es: 'La diferencia entre pagar 21% o 10% de IVA en una reforma puede ser miles de euros. Te explicamos qué obras tienen derecho al IVA reducido y qué requisitos hay que cumplir.',
    ca: 'La diferència entre pagar 21% o 10% d\'IVA en una reforma pot ser milers d\'euros. T\'expliquem quines obres tenen dret a l\'IVA reduït i quins requisits cal complir.'
  },
  metaDescription: {
    es: 'IVA del 10% en reformas: requisitos, vivienda habitual, antigüedad mínima de 2 años y casos donde se aplica el 21%. Ahorro real con ejemplo numérico.',
    ca: 'IVA del 10% en reformes: requisits, habitatge habitual, antiguitat mínima de 2 anys i casos on s\'aplica el 21%. Estalvi real amb exemple numèric.'
  },
  body: {
    es: `
<p class="lead">El IVA es uno de esos temas que pocos miran hasta que ven la factura final. En reformas, la diferencia entre el 21% y el 10% supone cientos o miles de euros. La buena noticia: la mayoría de reformas residenciales se acogen al 10%. La menos buena: hay tres requisitos que cumplir y conviene tenerlos claros antes de firmar.</p>

<h2>Qué dice la ley</h2>

<p>La normativa española (Ley del IVA, art. 91.uno.2.10º) permite aplicar el tipo reducido del 10% a las obras de albañilería realizadas en viviendas particulares, con tres condiciones que han de cumplirse simultáneamente.</p>

<h2>Los 3 requisitos del IVA al 10%</h2>

<h3>1. La vivienda debe ser de uso particular</h3>

<p>Tiene que tratarse de una vivienda donde resida una persona física, no una sociedad ni un local comercial. Las comunidades de propietarios también pueden aplicar el 10% sobre obras en zonas comunes.</p>

<p>Casos donde no aplica: locales de negocio, oficinas, naves industriales, viviendas pertenecientes a personas jurídicas (incluso si están alquiladas a particulares).</p>

<h3>2. La vivienda debe tener al menos 2 años de antigüedad</h3>

<p>Cuenta la fecha de la primera entrega o uso de la vivienda. Para pisos de obra nueva (primera transmisión), el reformista aplica IVA general (10% sobre la entrega de la vivienda, pero 21% sobre obras posteriores hechas en menos de 2 años desde esa entrega). Para pisos de segunda mano que ya tienen historial, en la práctica casi siempre se cumple este requisito.</p>

<h3>3. Los materiales aportados por el reformista no deben superar el 40% del valor total</h3>

<p>Es el requisito menos conocido y el que a veces saca a los propietarios del IVA reducido. Significa que el coste de los materiales que aporta el reformista no puede ser más del 40% de la factura total. Si tu obra es muy "de material" (cocina con muebles caros, encimera premium, electrodomésticos) y poco "de mano de obra", puedes superar ese límite.</p>

<p>En la práctica, las reformas integrales típicas con materiales estándar suelen estar entre el 30% y el 38% de materiales. Las reformas premium con cocinas o sanitarios de alta gama pueden acercarse al 40%. Si pasas el límite, parte o toda la obra tributa al 21%.</p>

<p>Truco: si los materiales caros (cocina de diseño, encimera premium, sanitarios de gama alta) los compras tú directamente al proveedor en lugar de a través del reformista, se quedan fuera del cómputo y la mano de obra del reformista sí va al 10%. Te lo explicamos en cada visita previa.</p>

<h2>Cuándo se aplica el 21%</h2>

<ul>
  <li>Obras en locales comerciales, oficinas y naves.</li>
  <li>Reformas en pisos con menos de 2 años desde la primera entrega.</li>
  <li>Obras donde los materiales aportados superan el 40% del total.</li>
  <li>Servicios separados que no son "albañilería" en sentido estricto: proyectos de arquitectura, decoración como servicio independiente, mudanzas.</li>
  <li>Suministros de materiales sin instalación (compras de tienda, sin servicio asociado): siempre 21%.</li>
</ul>

<h2>Casos especiales</h2>

<p><strong>Pisos para alquiler:</strong> sí pueden acogerse al 10% si tu propósito es alquilar como vivienda habitual. Si lo destinas a alquiler turístico, técnicamente cambia la naturaleza fiscal y puede aplicar el 21%. Consulta con tu asesor.</p>

<p><strong>Garaje y trastero:</strong> pueden acogerse al 10% siempre que estén en el mismo edificio que la vivienda y se reformen junto con ella o como parte de la misma operación.</p>

<p><strong>Viviendas heredadas o nuevas adquisiciones:</strong> aplica el 10% siempre que la antigüedad de la vivienda (desde su primera entrega) supere los 2 años. La fecha en que tú la heredaste o compraste no importa.</p>

<h2>Qué pedir al reformista</h2>

<ul>
  <li><strong>Que el presupuesto especifique el IVA aplicado.</strong> "Total + 10% IVA" si te corresponde el reducido. Si te ponen 21% sin más, pregunta por qué.</li>
  <li><strong>Que separe en la factura mano de obra y materiales.</strong> Esto te permite verificar el porcentaje del 40% y, si superas el límite, identificar qué tributa al 21% y qué al 10%.</li>
  <li><strong>Que conserve la factura archivada.</strong> Hacienda puede requerir justificantes hasta 4 años después.</li>
</ul>

<h2>Ahorro real con un ejemplo</h2>

<p>Reforma integral de 70 m² con un coste base de 30.000€:</p>
<ul>
  <li>Con IVA al 21%: 30.000 + 6.300 = <strong>36.300€</strong></li>
  <li>Con IVA al 10%: 30.000 + 3.000 = <strong>33.000€</strong></li>
  <li>Ahorro: <strong>3.300€</strong></li>
</ul>

<p>En reformas más pequeñas la cifra absoluta baja, pero el porcentaje de ahorro es el mismo: un 9-10% de la factura final. Es un dinero que conviene asegurarse de tener bien aplicado.</p>

<p>Cuando hacemos un presupuesto, te decimos directamente qué IVA aplica a tu caso y por qué. Si por la naturaleza de tu obra (mucho material premium, por ejemplo) parte va al 21%, te lo desglosamos para que veas las dos partes.</p>
`,
    ca: `
<p class="lead">L'IVA és un d'aquests temes que pocs miren fins que veuen la factura final. En reformes, la diferència entre el 21% i el 10% suposa centenars o milers d'euros. La bona notícia: la majoria de reformes residencials s'acullen al 10%. La menys bona: hi ha tres requisits a complir i convé tenir-los clars abans de signar.</p>

<h2>Què diu la llei</h2>

<p>La normativa espanyola (Llei de l'IVA, art. 91.uno.2.10º) permet aplicar el tipus reduït del 10% a les obres de paleta realitzades en habitatges particulars, amb tres condicions que han de complir-se simultàniament.</p>

<h2>Els 3 requisits de l'IVA al 10%</h2>

<h3>1. L'habitatge ha de ser d'ús particular</h3>

<p>Ha de tractar-se d'un habitatge on resideixi una persona física, no una societat ni un local comercial. Les comunitats de propietaris també poden aplicar el 10% sobre obres en zones comunes.</p>

<p>Casos on no s'aplica: locals de negoci, oficines, naus industrials, habitatges pertanyents a persones jurídiques (fins i tot si estan llogats a particulars).</p>

<h3>2. L'habitatge ha de tenir almenys 2 anys d'antiguitat</h3>

<p>Compta la data de la primera entrega o ús de l'habitatge. Per a pisos d'obra nova (primera transmissió), el reformista aplica IVA general (10% sobre l'entrega de l'habitatge, però 21% sobre obres posteriors fetes en menys de 2 anys des d'aquella entrega). Per a pisos de segona mà que ja tenen historial, a la pràctica gairebé sempre es compleix aquest requisit.</p>

<h3>3. Els materials aportats pel reformista no han de superar el 40% del valor total</h3>

<p>És el requisit menys conegut i el que de vegades treu els propietaris de l'IVA reduït. Significa que el cost dels materials que aporta el reformista no pot ser més del 40% de la factura total. Si la teva obra és molt "de material" (cuina amb mobles cars, encimera premium, electrodomèstics) i poc "de mà d'obra", pots superar aquest límit.</p>

<p>A la pràctica, les reformes integrals típiques amb materials estàndard solen estar entre el 30% i el 38% de materials. Les reformes premium amb cuines o sanitaris d'alta gamma poden acostar-se al 40%. Si passes el límit, part o tota l'obra tributa al 21%.</p>

<p>Truc: si els materials cars (cuina de disseny, encimera premium, sanitaris de gamma alta) els compres tu directament al proveïdor en lloc de a través del reformista, es queden fora del còmput i la mà d'obra del reformista sí va al 10%. T'ho expliquem a cada visita prèvia.</p>

<h2>Quan s'aplica el 21%</h2>

<ul>
  <li>Obres en locals comercials, oficines i naus.</li>
  <li>Reformes en pisos amb menys de 2 anys des de la primera entrega.</li>
  <li>Obres on els materials aportats superen el 40% del total.</li>
  <li>Serveis separats que no són "paleta" en sentit estricte: projectes d'arquitectura, decoració com a servei independent, mudances.</li>
  <li>Subministraments de materials sense instal·lació (compres de botiga, sense servei associat): sempre 21%.</li>
</ul>

<h2>Casos especials</h2>

<p><strong>Pisos per a lloguer:</strong> sí poden acollir-se al 10% si el teu propòsit és llogar com a habitatge habitual. Si el destines a lloguer turístic, tècnicament canvia la naturalesa fiscal i pot aplicar el 21%. Consulta amb el teu assessor.</p>

<p><strong>Garatge i traster:</strong> poden acollir-se al 10% sempre que estiguin al mateix edifici que l'habitatge i es reformin junt amb ell o com a part de la mateixa operació.</p>

<p><strong>Habitatges heretats o noves adquisicions:</strong> aplica el 10% sempre que l'antiguitat de l'habitatge (des de la seva primera entrega) superi els 2 anys. La data en què tu el vas heretar o comprar no importa.</p>

<h2>Què demanar al reformista</h2>

<ul>
  <li><strong>Que el pressupost especifiqui l'IVA aplicat.</strong> "Total + 10% IVA" si et correspon el reduït. Si et posen 21% sense més, pregunta per què.</li>
  <li><strong>Que separi a la factura mà d'obra i materials.</strong> Això et permet verificar el percentatge del 40% i, si superes el límit, identificar què tributa al 21% i què al 10%.</li>
  <li><strong>Que conservi la factura arxivada.</strong> Hisenda pot requerir justificants fins a 4 anys després.</li>
</ul>

<h2>Estalvi real amb un exemple</h2>

<p>Reforma integral de 70 m² amb un cost base de 30.000€:</p>
<ul>
  <li>Amb IVA al 21%: 30.000 + 6.300 = <strong>36.300€</strong></li>
  <li>Amb IVA al 10%: 30.000 + 3.000 = <strong>33.000€</strong></li>
  <li>Estalvi: <strong>3.300€</strong></li>
</ul>

<p>En reformes més petites la xifra absoluta baixa, però el percentatge d'estalvi és el mateix: un 9-10% de la factura final. És un diner que convé assegurar-se de tenir ben aplicat.</p>

<p>Quan fem un pressupost, et diem directament quin IVA s'aplica al teu cas i per què. Si per la naturalesa de la teva obra (molt material premium, per exemple) part va al 21%, t'ho desglossem perquè vegis les dues parts.</p>
`
  }
};

const POST_007_PISO_HEREDADO: BlogPost = {
  slug: 'reforma-piso-heredado-orden-recomendado',
  date: '2026-03-24',
  category: 'planificacion',
  readingMinutes: 8,
  title: {
    es: 'Reforma de piso heredado: el orden por el que conviene atacarlo',
    ca: 'Reforma de pis heretat: l\'ordre pel qual convé atacar-lo'
  },
  summary: {
    es: 'Has heredado un piso de los años 60-80 con todo viejo y la primera pregunta es por dónde empezar. Aquí va una guía honesta del orden que aporta más valor por euro gastado.',
    ca: 'Has heretat un pis dels anys 60-80 amb tot vell i la primera pregunta és per on començar. Aquí va una guia honesta de l\'ordre que aporta més valor per euro gastat.'
  },
  metaDescription: {
    es: 'Cómo reformar un piso heredado en Barcelona: prioridades por urgencia, valor de mercado, orden de fases y presupuesto realista para 60-80 m².',
    ca: 'Com reformar un pis heretat a Barcelona: prioritats per urgència, valor de mercat, ordre de fases i pressupost realista per a 60-80 m².'
  },
  body: {
    es: `
<p class="lead">Heredar un piso es una bendición complicada. Llega con muebles de 1985, instalación eléctrica de Tubo Bergmann, baño con bañera amarilleada, cocina sin extracción y mil decisiones por delante. Esta guía es lo que te diríamos en una primera visita técnica para que sepas por dónde empezar y, sobre todo, por qué.</p>

<h2>Antes de presupuestar nada: para qué quieres el piso</h2>

<p>El orden y la profundidad de la reforma cambian según tu objetivo. Las tres opciones más comunes:</p>

<ol>
  <li><strong>Vivir tú en el piso.</strong> Reforma profunda, pensada en uso a largo plazo. Inversión alta pero amortizable en años de uso.</li>
  <li><strong>Alquilarlo (vivienda habitual).</strong> Reforma media, materiales duraderos pero no premium. Pensada para que dure 10-15 años con inquilinos sin grandes intervenciones.</li>
  <li><strong>Venderlo.</strong> Reforma estética y de calidad media: lo justo para subir el precio de venta sin invertir en cosas que el comprador no valorará.</li>
</ol>

<p>Sin tener clara esta decisión, cualquier presupuesto es un disparo al aire. Empezamos siempre por aquí.</p>

<h2>Prioridad 1: instalaciones y estructura</h2>

<p>Si el piso es de los años 60-80, casi seguro tiene problemas en una o varias de estas:</p>

<ul>
  <li><strong>Instalación eléctrica</strong> (cableado antiguo de cobre o aluminio sin toma de tierra, cuadro general sin diferencial moderno). Esto no es opcional: es seguridad. Una instalación deficiente es la principal causa de incendios en pisos antiguos.</li>
  <li><strong>Fontanería</strong> (tuberías de plomo o hierro fundido). Suelen seguir funcionando, pero el plomo afecta a la calidad del agua y el hierro fundido se va estrechando por óxido interno.</li>
  <li><strong>Aluminosis o estructuras dañadas.</strong> Especialmente en edificios construidos entre 1950-1972 con cemento aluminoso. Pide un peritaje técnico si tienes dudas.</li>
  <li><strong>Carpintería exterior</strong> (ventanas) sin doble cristal y con marcos de aluminio sin rotura de puente térmico. Esto te cuesta dinero todos los meses en calefacción.</li>
</ul>

<p>Estas son las cosas que <strong>tienes que arreglar antes de pensar en el resto</strong>. No tiene sentido reformar la cocina si la electricidad va a obligarte a abrir la pared dos años después.</p>

<h2>Prioridad 2: distribución y carpinterías</h2>

<p>Los pisos antiguos suelen tener distribuciones que ya no funcionan:</p>

<ul>
  <li>Pasillos largos y oscuros que conectan habitaciones cuadradas pequeñas.</li>
  <li>Cocina y comedor separados (cuando hoy se busca cocina-salón abierta).</li>
  <li>Baño único interior sin ventilación.</li>
  <li>Puertas batientes en sitios donde una corredera ahorraría 1 m².</li>
</ul>

<p>Si vas a vivir tú o alquilar, vale la pena estudiar si tirar 1-2 tabiques (siempre que no sean estructurales) puede mejorar la habitabilidad de forma significativa. Si vas a vender, los compradores valoran mucho una distribución actualizada: el coste de derribo y nueva tabiquería se amortiza en el precio.</p>

<h3>Aluminio vs PVC vs madera en ventanas</h3>

<p>Para ventanas exteriores en Barcelona, recomendamos PVC con doble cristal de cámara grande (4/16/4). Aporta el mejor aislamiento térmico y acústico (importante en calles ruidosas), no requiere mantenimiento y dura 25+ años. El aluminio con rotura de puente térmico es alternativa premium estética pero más cara.</p>

<h2>Prioridad 3: cocina y baños</h2>

<p>Una vez resueltas instalaciones y carpintería, vienen las dos zonas que más visitas reciben en las visitas de venta y que más impactan en la habitabilidad:</p>

<ul>
  <li><strong>Cocina.</strong> Si la actual es funcional pero estéticamente vieja, una "reforma estética" (muebles nuevos, encimera nueva, alicatado nuevo, electrodomésticos) puede salir entre 4.000 y 8.000€ y revalorizar el piso de forma muy notable. Si la distribución no funciona, sumamos 2.000-4.000€ por modificaciones de fontanería y electricidad.</li>
  <li><strong>Baño.</strong> Reforma completa entre 4.000 y 7.000€ para un baño de 5-7 m². Es prácticamente obligatorio en pisos heredados de los 70-80: la combinación de bañera marrón, azulejos color crema y sanitarios amarilleados es lo que más espanta a un comprador.</li>
</ul>

<h2>Prioridad 4: acabados</h2>

<p>Suelos, paredes y carpintería interior. Aquí el rango es amplio:</p>

<ul>
  <li><strong>Suelos:</strong> si el actual es buen parquet, lijar y barnizar (~25-35€/m²) ahorra mucho. Si es terrazo o suelos viejos, sustituir por porcelánico imitación madera o tarima laminada nueva (~45-70€/m² puesto).</li>
  <li><strong>Pintura:</strong> imprescindible en piso heredado. Una pintura completa profesional (con preparación) en 70 m² ronda los 1.500-2.500€.</li>
  <li><strong>Puertas interiores:</strong> si las actuales son macizas pero feas, lijar y pintar en blanco vale 50-80€/puerta. Sustituir por puertas nuevas, 200-400€/puerta puestas.</li>
</ul>

<h2>Si tu objetivo es vender o alquilar</h2>

<p>El error más común es sobreinvertir. Recomendaciones:</p>

<ul>
  <li>Materiales de gama media-alta pero nada premium. Quien compra no va a pagar más por silestone que por cuarzo aglomerado.</li>
  <li>Colores neutros (blanco, gris, beige) en todo. Lo personal espanta compradores.</li>
  <li>Una reforma "completa pero contenida" suele costar 25.000-40.000€ en un piso de 70 m² y eleva el precio de venta entre 50.000 y 80.000€ en buenas zonas de Barcelona.</li>
</ul>

<h2>Si tu objetivo es vivir</h2>

<p>Aquí sí merece la pena gastar más en lo que tocas todos los días: griferías y mecanismos de calidad, cocina con cajones bien organizados, suelo cómodo, ventanas con buen aislamiento. La diferencia entre estándar y premium en estos elementos se amortiza en confort durante 15 años.</p>

<h2>Presupuesto realista para integral 70-80 m²</h2>

<p>Para una reforma integral completa en piso heredado típico de 70-80 m² en Barcelona:</p>

<ul>
  <li><strong>Reforma básica:</strong> 25.000-35.000€. Materiales estándar, cocina y baño nuevos pero gama económica, todo limpio y funcional. Pensada para alquilar o vender rápido.</li>
  <li><strong>Reforma media:</strong> 40.000-55.000€. Materiales de gama media-alta, cocina decente con buen almacenaje, dos baños o uno grande, instalaciones renovadas. Pensada para vivir bien.</li>
  <li><strong>Reforma premium:</strong> 60.000-90.000€. Materiales de diseño, cocina a medida, baños tipo spa, suelo radiante, domótica básica. Para quien busca un piso de presunción.</li>
</ul>

<h2>Errores típicos en pisos heredados</h2>

<ul>
  <li><strong>Empezar por la pintura.</strong> "Le doy una manita y ya veré". Resultado: pintas paredes que tienes que volver a pintar cuando hagas la electricidad seis meses después.</li>
  <li><strong>Mantener azulejos antiguos por ahorrar.</strong> Suele ser falsa economía: el resto del baño nuevo destaca lo viejo y queda peor que reformarlo entero.</li>
  <li><strong>No revisar las instalaciones.</strong> Cuando lo descubres es porque ya hay un problema y la obra es el doble de cara.</li>
  <li><strong>Sobre-personalizar para vender.</strong> El piso del color preferido del propietario suele tardar más en venderse.</li>
</ul>

<p>En la visita previa hacemos exactamente este diagnóstico contigo: vamos habitación por habitación, te decimos qué prioridad tiene cada cosa según tu objetivo y te damos un cronograma realista del orden y el coste de cada fase.</p>
`,
    ca: `
<p class="lead">Heretar un pis és una benedicció complicada. Arriba amb mobles de 1985, instal·lació elèctrica de Tubo Bergmann, bany amb banyera groguenca, cuina sense extracció i mil decisions per davant. Aquesta guia és el que et diríem en una primera visita tècnica perquè sàpigues per on començar i, sobretot, per què.</p>

<h2>Abans de pressupostar res: per a què vols el pis</h2>

<p>L'ordre i la profunditat de la reforma canvien segons el teu objectiu. Les tres opcions més comunes:</p>

<ol>
  <li><strong>Viure-hi tu.</strong> Reforma profunda, pensada en ús a llarg termini. Inversió alta però amortitzable en anys d'ús.</li>
  <li><strong>Llogar-lo (habitatge habitual).</strong> Reforma mitjana, materials duradors però no premium. Pensada perquè duri 10-15 anys amb llogaters sense grans intervencions.</li>
  <li><strong>Vendre'l.</strong> Reforma estètica i de qualitat mitjana: el just per pujar el preu de venda sense invertir en coses que el comprador no valorarà.</li>
</ol>

<p>Sense tenir clara aquesta decisió, qualsevol pressupost és un tret a l'aire. Sempre comencem per aquí.</p>

<h2>Prioritat 1: instal·lacions i estructura</h2>

<p>Si el pis és dels anys 60-80, gairebé segur té problemes en una o diverses d'aquestes:</p>

<ul>
  <li><strong>Instal·lació elèctrica</strong> (cablejat antic de coure o alumini sense presa de terra, quadre general sense diferencial modern). Això no és opcional: és seguretat. Una instal·lació deficient és la principal causa d'incendis en pisos antics.</li>
  <li><strong>Lampisteria</strong> (canonades de plom o ferro fos). Solen seguir funcionant, però el plom afecta la qualitat de l'aigua i el ferro fos s'estreny per òxid intern.</li>
  <li><strong>Aluminosi o estructures danyades.</strong> Especialment en edificis construïts entre 1950-1972 amb ciment aluminós. Demana un peritatge tècnic si tens dubtes.</li>
  <li><strong>Fusteria exterior</strong> (finestres) sense doble vidre i amb marcs d'alumini sense ruptura de pont tèrmic. Això et costa diners cada mes en calefacció.</li>
</ul>

<p>Aquestes són les coses que <strong>has d'arreglar abans de pensar en la resta</strong>. No té sentit reformar la cuina si l'electricitat t'obligarà a obrir la paret dos anys després.</p>

<h2>Prioritat 2: distribució i fusteria</h2>

<p>Els pisos antics solen tenir distribucions que ja no funcionen:</p>

<ul>
  <li>Passadissos llargs i foscos que connecten habitacions quadrades petites.</li>
  <li>Cuina i menjador separats (quan avui es busca cuina-saló oberta).</li>
  <li>Bany únic interior sense ventilació.</li>
  <li>Portes batents en llocs on una corredissa estalviaria 1 m².</li>
</ul>

<p>Si vas a viure-hi tu o llogar, val la pena estudiar si tirar 1-2 envans (sempre que no siguin estructurals) pot millorar l'habitabilitat de manera significativa. Si vas a vendre, els compradors valoren molt una distribució actualitzada: el cost d'enderroc i nova tabicació s'amortitza en el preu.</p>

<h3>Alumini vs PVC vs fusta en finestres</h3>

<p>Per a finestres exteriors a Barcelona, recomanem PVC amb doble vidre de cambra gran (4/16/4). Aporta el millor aïllament tèrmic i acústic (important en carrers sorollosos), no requereix manteniment i dura 25+ anys. L'alumini amb ruptura de pont tèrmic és alternativa premium estètica però més cara.</p>

<h2>Prioritat 3: cuina i banys</h2>

<p>Un cop resoltes instal·lacions i fusteria, venen les dues zones que més visites reben a les visites de venda i que més impacten en l'habitabilitat:</p>

<ul>
  <li><strong>Cuina.</strong> Si l'actual és funcional però estèticament vella, una "reforma estètica" (mobles nous, encimera nova, enrajolat nou, electrodomèstics) pot sortir entre 4.000 i 8.000€ i revaloritzar el pis de manera molt notable. Si la distribució no funciona, sumem 2.000-4.000€ per modificacions de lampisteria i electricitat.</li>
  <li><strong>Bany.</strong> Reforma completa entre 4.000 i 7.000€ per a un bany de 5-7 m². És pràcticament obligatori en pisos heretats dels 70-80: la combinació de banyera marró, rajoles color crema i sanitaris groguencs és el que més espanta un comprador.</li>
</ul>

<h2>Prioritat 4: acabats</h2>

<p>Terres, parets i fusteria interior. Aquí el rang és ampli:</p>

<ul>
  <li><strong>Terres:</strong> si l'actual és bon parquet, polir i envernissar (~25-35€/m²) estalvia molt. Si és terratzo o terres vells, substituir per porcellànic imitació fusta o tarima laminada nova (~45-70€/m² posat).</li>
  <li><strong>Pintura:</strong> imprescindible en pis heretat. Una pintura completa professional (amb preparació) en 70 m² ronda els 1.500-2.500€.</li>
  <li><strong>Portes interiors:</strong> si les actuals són massisses però lletges, polir i pintar en blanc val 50-80€/porta. Substituir per portes noves, 200-400€/porta posades.</li>
</ul>

<h2>Si el teu objectiu és vendre o llogar</h2>

<p>L'error més comú és sobreinvertir. Recomanacions:</p>

<ul>
  <li>Materials de gamma mitjana-alta però res premium. Qui compra no pagarà més per silestone que per quars aglomerat.</li>
  <li>Colors neutres (blanc, gris, beix) en tot. El personal espanta compradors.</li>
  <li>Una reforma "completa però continguda" sol costar 25.000-40.000€ en un pis de 70 m² i eleva el preu de venda entre 50.000 i 80.000€ en bones zones de Barcelona.</li>
</ul>

<h2>Si el teu objectiu és viure-hi</h2>

<p>Aquí sí val la pena gastar més en el que toques cada dia: aixetes i mecanismes de qualitat, cuina amb calaixos ben organitzats, terra còmode, finestres amb bon aïllament. La diferència entre estàndard i premium en aquests elements s'amortitza en confort durant 15 anys.</p>

<h2>Pressupost realista per a integral 70-80 m²</h2>

<p>Per a una reforma integral completa en pis heretat típic de 70-80 m² a Barcelona:</p>

<ul>
  <li><strong>Reforma bàsica:</strong> 25.000-35.000€. Materials estàndard, cuina i bany nous però gamma econòmica, tot net i funcional. Pensada per llogar o vendre ràpid.</li>
  <li><strong>Reforma mitjana:</strong> 40.000-55.000€. Materials de gamma mitjana-alta, cuina decent amb bon emmagatzematge, dos banys o un de gran, instal·lacions renovades. Pensada per viure bé.</li>
  <li><strong>Reforma premium:</strong> 60.000-90.000€. Materials de disseny, cuina a mida, banys tipus spa, terra radiant, domòtica bàsica. Per a qui busca un pis de presumir.</li>
</ul>

<h2>Errors típics en pisos heretats</h2>

<ul>
  <li><strong>Començar per la pintura.</strong> "Li dono una mica i ja veuré". Resultat: pintes parets que has de tornar a pintar quan facis l'electricitat sis mesos després.</li>
  <li><strong>Mantenir rajoles antigues per estalviar.</strong> Sol ser falsa economia: la resta del bany nou destaca el vell i queda pitjor que reformar-ho sencer.</li>
  <li><strong>No revisar les instal·lacions.</strong> Quan ho descobreixes és perquè ja hi ha un problema i l'obra és el doble de cara.</li>
  <li><strong>Sobre-personalitzar per vendre.</strong> El pis del color preferit del propietari sol trigar més a vendre's.</li>
</ul>

<p>A la visita prèvia fem exactament aquest diagnòstic amb tu: anem habitació per habitació, et diem quina prioritat té cada cosa segons el teu objectiu i et donem un cronograma realista de l'ordre i el cost de cada fase.</p>
`
  }
};

const POST_008_PLAZOS_REALES: BlogPost = {
  slug: 'plazos-reales-reforma-piso-barcelona',
  date: '2026-03-17',
  category: 'planificacion',
  readingMinutes: 6,
  title: {
    es: 'Plazos reales de una reforma en Barcelona: del primer email a las llaves',
    ca: 'Terminis reals d\'una reforma a Barcelona: del primer correu a les claus'
  },
  summary: {
    es: 'Cuánto tarda en realidad una reforma desde el momento en que escribes el primer mensaje. Visita, presupuesto, planificación, obra y entrega. Sin promesas exprés irreales.',
    ca: 'Quant triga en realitat una reforma des del moment en què escrius el primer missatge. Visita, pressupost, planificació, obra i lliurament. Sense promeses exprés irreals.'
  },
  metaDescription: {
    es: 'Plazos reales para una reforma en Barcelona: visita, presupuesto, materiales, ejecución y entrega. Cronograma honesto basado en obras reales.',
    ca: 'Terminis reals per a una reforma a Barcelona: visita, pressupost, materials, execució i lliurament. Cronograma honest basat en obres reals.'
  },
  body: {
    es: `
<p class="lead">Cuando alguien nos dice "necesito que esté terminado en 3 semanas desde mañana", lo decimos directamente: si no es una reforma muy puntual, no es realista. Esta es la cronología honesta de una reforma típica en Barcelona desde que entras en contacto con un reformista hasta que recibes las llaves del piso terminado.</p>

<h2>Fase 0: tu primer mensaje (día 0)</h2>

<p>Escribes un email, un WhatsApp o rellenas un formulario. Para nosotros, lo razonable es responder en menos de 24 horas con dos cosas: confirmación de que recibimos tu mensaje y propuesta de fecha y hora para visita técnica.</p>

<p>Si tardamos más de 48 horas en darte una respuesta concreta, es mala señal: el ritmo de comunicación que veas en esta fase suele ser el ritmo que tendrás durante toda la obra.</p>

<h2>Fase 1: visita técnica (días 2-7)</h2>

<p>Quedamos en el piso. La visita dura entre 45 minutos y 1 hora 30 minutos según el alcance. Tomamos medidas, vemos el estado de instalaciones, hablamos contigo de lo que quieres y de lo que no, y nos llevamos toda la información para preparar el presupuesto.</p>

<p>Si tienes flexibilidad horaria, podemos quedar en 2-4 días. Si solo puedes ciertas tardes, a veces hay que esperar 5-7 días.</p>

<h2>Fase 2: presupuesto cerrado (días 5-12)</h2>

<p>Después de la visita, tardamos entre 3 y 5 días laborables en entregar presupuesto detallado por escrito. Una reforma simple (un baño) sale antes que una reforma integral con muchas decisiones técnicas.</p>

<p>El presupuesto te llega por email con desglose de partidas, marcas y modelos de los elementos principales, plazo de ejecución previsto y calendario de pagos. Si hay dudas, las resolvemos por teléfono o quedamos otra vez en el piso.</p>

<p>Aquí entra la parte que depende de ti: revisar, tomar decisiones de materiales, preguntar lo que no esté claro. Lo razonable es 1-2 semanas para esa fase. Algunos clientes se deciden en 48 horas; otros tardan un mes en cerrar definitivamente.</p>

<h2>Fase 3: pedido de materiales y planificación (semanas 1-3 antes de empezar)</h2>

<p>Una vez firmado el presupuesto, hay un periodo previo a la obra que no se ve pero es el que más diferencia hace en el cumplimiento de plazos:</p>

<ul>
  <li>Pedidos de muebles de cocina (4-8 semanas de fabricación según fabricante).</li>
  <li>Pedidos de azulejos y pavimentos (2-4 semanas si el modelo no está en stock).</li>
  <li>Sanitarios, mamparas y griferías (1-3 semanas).</li>
  <li>Encimeras de cuarzo o silestone (3-6 semanas; se fabrican a medida tras toma de medidas con la cocina ya instalada).</li>
</ul>

<p>El "no podemos empezar mañana" suele ser por esto. Lo correcto es planificar la fecha de inicio cuando los materiales críticos ya están confirmados o pedidos. Empezar antes de que llegue la cocina o los azulejos es una receta para tener al equipo parado y la obra alargada.</p>

<h2>Fase 4: trámites (semanas 1-2 antes de empezar)</h2>

<p>Si la obra requiere comunicación previa al Ayuntamiento, la presentamos en paralelo a los pedidos de material. Tarda de 1 a 2 semanas en quedar formalizada. Si requiere licencia con proyecto (poco habitual en reformas particulares), entre 1 y 3 meses. Te avisamos al inicio del cronograma cuál te aplica.</p>

<h2>Fase 5: la obra (la duración depende del alcance)</h2>

<p>Estas son las duraciones reales que vemos en obras hechas en Barcelona, asumiendo cumplimiento estricto del calendario y materiales en sitio cuando toca:</p>

<ul>
  <li><strong>Reforma de baño completa (5-8 m²):</strong> 7-10 días laborables.</li>
  <li><strong>Reforma de cocina completa (8-12 m²):</strong> 10-14 días laborables.</li>
  <li><strong>Pintura de piso 70 m²:</strong> 4-6 días laborables.</li>
  <li><strong>Reforma integral 60-80 m²:</strong> 4-6 semanas laborables.</li>
  <li><strong>Reforma integral 80-110 m²:</strong> 6-9 semanas laborables.</li>
  <li><strong>Reforma integral 110+ m² o con cambios estructurales:</strong> 9-14 semanas laborables.</li>
</ul>

<p>"Días laborables" significa de lunes a viernes en horario diurno. Si trabajamos algunos sábados puntuales por la mañana, lo sumamos al cálculo.</p>

<h2>Fase 6: entrega y revisión final (1-3 días)</h2>

<p>Antes del cierre, hacemos repaso conjunto contigo: vamos habitación por habitación viendo acabados, comprobando interruptores, abriendo grifos, verificando que cada cosa funciona como debe. Si hay algún detalle a corregir (un sellado mal terminado, un tornillo que falta, una rozadura) lo apuntamos y volvemos en 1-2 días para repasarlo. La obra se da por cerrada cuando tú firmas conformidad. Aquí no hay "ya te llamamos".</p>

<h2>Cronograma típico para casos comunes</h2>

<h3>Solo un baño</h3>
<ul>
  <li>Día 0: contacto.</li>
  <li>Día 3-5: visita técnica.</li>
  <li>Día 7-10: presupuesto entregado.</li>
  <li>Día 14-21: firma y pedido de materiales.</li>
  <li>Día 35-45: inicio de obra (cuando materiales en stock).</li>
  <li>Día 45-55: obra ejecutada y entregada.</li>
  <li><strong>Total: ~7-8 semanas desde el primer mensaje.</strong></li>
</ul>

<h3>Reforma integral 70 m²</h3>
<ul>
  <li>Día 0: contacto.</li>
  <li>Día 3-7: visita técnica.</li>
  <li>Día 12-15: presupuesto.</li>
  <li>Día 25-35: firma, pedido cocina y materiales.</li>
  <li>Día 60-75: inicio de obra (esperando muebles de cocina).</li>
  <li>Día 100-120: obra ejecutada y entregada.</li>
  <li><strong>Total: ~14-17 semanas desde el primer mensaje.</strong></li>
</ul>

<h2>Dónde se rompen los plazos</h2>

<ul>
  <li><strong>Cambios de cliente durante la obra.</strong> Cada cambio significativo suma 3-7 días. No es problema si los aceptas; es problema si esperabas terminar el día acordado.</li>
  <li><strong>Materiales con plazo largo no anticipados.</strong> Si decides en pleno mes de obra cambiar la encimera por una a medida, se añaden 3-4 semanas.</li>
  <li><strong>Obras eléctricas o de fontanería sorpresa.</strong> En pisos antiguos a veces aparece algo que requiere intervención adicional. Lo gestionamos con el menor impacto posible, pero suma días.</li>
  <li><strong>Vacaciones de proveedores en agosto.</strong> Las dos primeras semanas de agosto la mayoría de fabricantes y proveedores cierran. Si la obra cae ahí, se nota.</li>
</ul>

<h2>El plazo que firmamos</h2>

<p>En el presupuesto va siempre una fecha de inicio y una fecha de entrega prevista. La fecha de entrega es <strong>compromiso firme</strong>, salvo que tú pidas cambios o aparezca un imprevisto técnico que te comunicamos al momento. Si el equipo no se da prisa por culpa nuestra, el plazo se mantiene y hacemos las horas necesarias para cumplirlo.</p>

<p>Si quieres saber cuánto tardaríamos para tu caso concreto, te lo concretamos en la visita previa con un calendario por escrito.</p>
`,
    ca: `
<p class="lead">Quan algú ens diu "necessito que estigui acabat en 3 setmanes des de demà", ho diem directament: si no és una reforma molt puntual, no és realista. Aquesta és la cronologia honesta d'una reforma típica a Barcelona des que entres en contacte amb un reformista fins que reps les claus del pis acabat.</p>

<h2>Fase 0: el teu primer missatge (dia 0)</h2>

<p>Escrius un correu, un WhatsApp o omples un formulari. Per a nosaltres, el raonable és respondre en menys de 24 hores amb dues coses: confirmació que rebem el teu missatge i proposta de data i hora per a visita tècnica.</p>

<p>Si triguem més de 48 hores a donar-te una resposta concreta, és mal senyal: el ritme de comunicació que vegis en aquesta fase sol ser el ritme que tindràs durant tota l'obra.</p>

<h2>Fase 1: visita tècnica (dies 2-7)</h2>

<p>Quedem al pis. La visita dura entre 45 minuts i 1 hora 30 minuts segons l'abast. Prenem mides, veiem l'estat d'instal·lacions, parlem amb tu del que vols i del que no, i ens emportem tota la informació per preparar el pressupost.</p>

<p>Si tens flexibilitat horària, podem quedar en 2-4 dies. Si només pots certes tardes, de vegades cal esperar 5-7 dies.</p>

<h2>Fase 2: pressupost tancat (dies 5-12)</h2>

<p>Després de la visita, triguem entre 3 i 5 dies laborables a lliurar pressupost detallat per escrit. Una reforma simple (un bany) surt abans que una reforma integral amb moltes decisions tècniques.</p>

<p>El pressupost t'arriba per email amb desglossament de partides, marques i models dels elements principals, termini d'execució previst i calendari de pagaments. Si hi ha dubtes, els resolem per telèfon o quedem un altre cop al pis.</p>

<p>Aquí entra la part que depèn de tu: revisar, prendre decisions de materials, preguntar el que no estigui clar. El raonable és 1-2 setmanes per a aquesta fase. Alguns clients es decideixen en 48 hores; d'altres triguen un mes a tancar definitivament.</p>

<h2>Fase 3: comanda de materials i planificació (setmanes 1-3 abans de començar)</h2>

<p>Un cop signat el pressupost, hi ha un període previ a l'obra que no es veu però és el que més diferència fa en el compliment de terminis:</p>

<ul>
  <li>Comandes de mobles de cuina (4-8 setmanes de fabricació segons fabricant).</li>
  <li>Comandes de rajoles i paviments (2-4 setmanes si el model no està en stock).</li>
  <li>Sanitaris, mampares i aixetes (1-3 setmanes).</li>
  <li>Encimeres de quars o silestone (3-6 setmanes; es fabriquen a mida després de presa de mides amb la cuina ja instal·lada).</li>
</ul>

<p>El "no podem començar demà" sol ser per això. El correcte és planificar la data d'inici quan els materials crítics ja estan confirmats o demanats. Començar abans que arribi la cuina o les rajoles és una recepta per tenir l'equip aturat i l'obra allargada.</p>

<h2>Fase 4: tràmits (setmanes 1-2 abans de començar)</h2>

<p>Si l'obra requereix comunicació prèvia a l'Ajuntament, la presentem en paral·lel a les comandes de material. Triga d'1 a 2 setmanes a quedar formalitzada. Si requereix llicència amb projecte (poc habitual en reformes particulars), entre 1 i 3 mesos. T'avisem a l'inici del cronograma quina t'aplica.</p>

<h2>Fase 5: l'obra (la durada depèn de l'abast)</h2>

<p>Aquestes són les durades reals que veiem en obres fetes a Barcelona, assumint compliment estricte del calendari i materials al lloc quan toca:</p>

<ul>
  <li><strong>Reforma de bany completa (5-8 m²):</strong> 7-10 dies laborables.</li>
  <li><strong>Reforma de cuina completa (8-12 m²):</strong> 10-14 dies laborables.</li>
  <li><strong>Pintura de pis 70 m²:</strong> 4-6 dies laborables.</li>
  <li><strong>Reforma integral 60-80 m²:</strong> 4-6 setmanes laborables.</li>
  <li><strong>Reforma integral 80-110 m²:</strong> 6-9 setmanes laborables.</li>
  <li><strong>Reforma integral 110+ m² o amb canvis estructurals:</strong> 9-14 setmanes laborables.</li>
</ul>

<p>"Dies laborables" significa de dilluns a divendres en horari diürn. Si treballem alguns dissabtes puntuals al matí, ho sumem al càlcul.</p>

<h2>Fase 6: lliurament i revisió final (1-3 dies)</h2>

<p>Abans del tancament, fem repàs conjunt amb tu: anem habitació per habitació veient acabats, comprovant interruptors, obrint aixetes, verificant que cada cosa funciona com ha de fer-ho. Si hi ha algun detall a corregir (un segellat mal acabat, un cargol que falta, una rascada) ho apuntem i tornem en 1-2 dies per repassar-ho. L'obra es dóna per tancada quan tu signes conformitat. Aquí no hi ha "ja us truquem".</p>

<h2>Cronograma típic per a casos comuns</h2>

<h3>Només un bany</h3>
<ul>
  <li>Dia 0: contacte.</li>
  <li>Dia 3-5: visita tècnica.</li>
  <li>Dia 7-10: pressupost lliurat.</li>
  <li>Dia 14-21: signatura i comanda de materials.</li>
  <li>Dia 35-45: inici d'obra (quan materials en stock).</li>
  <li>Dia 45-55: obra executada i lliurada.</li>
  <li><strong>Total: ~7-8 setmanes des del primer missatge.</strong></li>
</ul>

<h3>Reforma integral 70 m²</h3>
<ul>
  <li>Dia 0: contacte.</li>
  <li>Dia 3-7: visita tècnica.</li>
  <li>Dia 12-15: pressupost.</li>
  <li>Dia 25-35: signatura, comanda cuina i materials.</li>
  <li>Dia 60-75: inici d'obra (esperant mobles de cuina).</li>
  <li>Dia 100-120: obra executada i lliurada.</li>
  <li><strong>Total: ~14-17 setmanes des del primer missatge.</strong></li>
</ul>

<h2>On es trenquen els terminis</h2>

<ul>
  <li><strong>Canvis de client durant l'obra.</strong> Cada canvi significatiu suma 3-7 dies. No és problema si els acceptes; és problema si esperaves acabar el dia acordat.</li>
  <li><strong>Materials amb termini llarg no anticipats.</strong> Si decideixes en ple mes d'obra canviar l'encimera per una a mida, s'afegeixen 3-4 setmanes.</li>
  <li><strong>Obres elèctriques o de lampisteria sorpresa.</strong> En pisos antics de vegades apareix alguna cosa que requereix intervenció addicional. Ho gestionem amb el menor impacte possible, però suma dies.</li>
  <li><strong>Vacances de proveïdors a l'agost.</strong> Les dues primeres setmanes d'agost la majoria de fabricants i proveïdors tanquen. Si l'obra cau allà, es nota.</li>
</ul>

<h2>El termini que signem</h2>

<p>En el pressupost va sempre una data d'inici i una data de lliurament prevista. La data de lliurament és <strong>compromís ferm</strong>, llevat que tu demanis canvis o aparegui un imprevist tècnic que et comuniquem al moment. Si l'equip no s'afanya per culpa nostra, el termini es manté i fem les hores necessàries per complir-lo.</p>

<p>Si vols saber quant trigaríem per al teu cas concret, te'l concretem a la visita prèvia amb un calendari per escrit.</p>
`
  }
};

export const BLOG_POSTS: BlogPost[] = [
  POST_001_BANO_EIXAMPLE,
  POST_002_PERMISOS_BCN,
  POST_003_INTEGRAL_O_FASES,
  POST_004_AZULEJOS_BANO,
  POST_005_ERRORES_COCINA,
  POST_006_IVA_REDUCIDO,
  POST_007_PISO_HEREDADO,
  POST_008_PLAZOS_REALES
];

export function findPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}
