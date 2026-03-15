/* ═══════════════════════════════════════
   ARCANA — Data & App Logic Compartido
═══════════════════════════════════════ */

/* ── NOVELS DATABASE ── */
const ARCANA_NOVELS = [
  {
    id: 1,
    title: 'Quartetas del Destino',
    slug: 'quartetas-del-destino',
    author: 'Duban L.',
    authorId: 1,
    icon: '🔮',
    cover: 'cover-1',
    genres: ['Ciencia Ficción', 'Misterio', 'IA', 'Aventura'],
    chapters: 16,
    views: '2.4K',
    viewsNum: 2400,
    rating: 4.9,
    favorites: 847,
    badge: 'hot',
    status: 'en curso',
    desc: 'Un estudiante en Bogotá recibe un correo imposible de un remitente que no existe. Una IA construida durante nueve años para un único propósito. Un manuscrito de 1555 que contiene instrucciones para el año 2026. Bajo el Himalaya, algo lleva siglos esperando ser encontrado — y la única manera de llegar es haciendo la pregunta correcta.',
    descShort: 'Un manuscrito de 1555 y una IA que lleva siglos esperando las preguntas correctas.',
    tags: ['novela ligera', 'IA', 'colombia', 'himalaya', 'nostradamus'],
    publishDate: '14 Mar 2026',
    lastUpdate: 'Hace 2 días',
    wordCount: '~85,000 palabras'
  },
  {
    id: 2,
    title: 'El Último Dragón',
    slug: 'el-ultimo-dragon',
    author: 'Mireya V.',
    authorId: 2,
    icon: '🐉',
    cover: 'cover-2',
    genres: ['Fantasía', 'Acción', 'Romance'],
    chapters: 24,
    views: '1.8K',
    viewsNum: 1800,
    rating: 4.7,
    favorites: 620,
    badge: 'new',
    status: 'en curso',
    desc: 'El último dragón del mundo despierta en el siglo XXI después de mil años de sueño. No recuerda nada — excepto a una chica que murió hace diez siglos y que ahora camina por las calles de Madrid con su misma cara.',
    descShort: 'El último dragón despierta en el siglo XXI y encuentra a alguien imposible.',
    tags: ['dragón', 'fantasía moderna', 'romance', 'madrid'],
    publishDate: '01 Mar 2026',
    lastUpdate: 'Hace 1 semana',
    wordCount: '~62,000 palabras'
  },
  {
    id: 3,
    title: 'Código Rojo',
    slug: 'codigo-rojo',
    author: 'Carlos M.',
    authorId: 3,
    icon: '💻',
    cover: 'cover-3',
    genres: ['Thriller', 'Tecnología', 'Suspenso'],
    chapters: 12,
    views: '990',
    viewsNum: 990,
    rating: 4.5,
    favorites: 310,
    badge: '',
    status: 'en curso',
    desc: 'Un hacker de sombrero blanco descubre que el sistema de vigilancia más avanzado del mundo no fue construido por ningún gobierno. Y que lleva cinco años observándolo a él específicamente. La pregunta no es quién lo construyó. La pregunta es por qué él.',
    descShort: 'Un hacker descubre que el sistema lleva años observándolo. ¿Por qué?',
    tags: ['hacker', 'vigilancia', 'thriller tecnológico'],
    publishDate: '20 Feb 2026',
    lastUpdate: 'Hace 3 días',
    wordCount: '~34,000 palabras'
  },
  {
    id: 4,
    title: 'Entre Mundos',
    slug: 'entre-mundos',
    author: 'Sofía R.',
    authorId: 4,
    icon: '🌀',
    cover: 'cover-4',
    genres: ['Isekai', 'Romance', 'Fantasía'],
    chapters: 32,
    views: '3.1K',
    viewsNum: 3100,
    rating: 4.8,
    favorites: 1200,
    badge: 'hot',
    status: 'en curso',
    desc: 'Despertar en otro mundo con los recuerdos de dos vidas diferentes — la tuya y la de alguien que ya vivió aquí antes que tú. Valentina debe decidir quién es realmente cuando tiene dos sets completos de recuerdos, dos personas que la aman, y una guerra que ninguna de sus dos vidas supo anticipar.',
    descShort: 'Despertar en otro mundo con los recuerdos de dos vidas — ¿cuál es la tuya?',
    tags: ['isekai', 'doble vida', 'romance', 'fantasía épica'],
    publishDate: '10 Ene 2026',
    lastUpdate: 'Hace 5 días',
    wordCount: '~98,000 palabras'
  },
  {
    id: 5,
    title: 'La Sombra del Rey',
    slug: 'la-sombra-del-rey',
    author: 'Andrés P.',
    authorId: 5,
    icon: '👑',
    cover: 'cover-5',
    genres: ['Histórico', 'Política', 'Misterio'],
    chapters: 18,
    views: '760',
    viewsNum: 760,
    rating: 4.4,
    favorites: 228,
    badge: '',
    status: 'en curso',
    desc: 'En una corte donde cada alianza es una trampa y cada sonrisa esconde un cuchillo, la única persona en quien el rey confía es su espía más leal. El problema: el espía lleva tres años enviando información falsa. Y el rey ya lo sabe.',
    descShort: 'Intriga política en una corte donde nadie — absolutamente nadie — es lo que parece.',
    tags: ['política', 'intriga', 'corte medieval', 'traición'],
    publishDate: '15 Feb 2026',
    lastUpdate: 'Hace 1 semana',
    wordCount: '~48,000 palabras'
  },
  {
    id: 6,
    title: 'Señales del Vacío',
    slug: 'senales-del-vacio',
    author: 'Luna K.',
    authorId: 6,
    icon: '🌌',
    cover: 'cover-6',
    genres: ['Ciencia Ficción', 'Terror', 'Misterio'],
    chapters: 9,
    views: '540',
    viewsNum: 540,
    rating: 4.6,
    favorites: 190,
    badge: 'new',
    status: 'en curso',
    desc: 'Las señales del espacio profundo que recibe la estación Kepler-7 no son aleatorias. Son un patrón. Y cuando la astrofísica jefe descifra el mensaje, descubre que no fue enviado desde el espacio. Fue enviado desde el futuro. Y dice: no busquéis más.',
    descShort: 'Las señales del espacio profundo contienen un mensaje del futuro: no busquéis más.',
    tags: ['espacio', 'señales', 'futuro', 'horror cósmico'],
    publishDate: '05 Mar 2026',
    lastUpdate: 'Hace 4 días',
    wordCount: '~24,000 palabras'
  },
  {
    id: 7,
    title: 'El Tejedor de Sueños',
    slug: 'el-tejedor-de-suenos',
    author: 'Marco A.',
    authorId: 7,
    icon: '✨',
    cover: 'cover-7',
    genres: ['Fantasía', 'Romance', 'Psicológico'],
    chapters: 28,
    views: '2.2K',
    viewsNum: 2200,
    rating: 4.7,
    favorites: 880,
    badge: '',
    status: 'en curso',
    desc: 'Hay una persona en el mundo que puede entrar en los sueños de cualquiera. Lleva años usándolo solo para observar, nunca para interferir — hasta que entra en el sueño equivocado y ve algo que no debería haber visto. Ahora alguien muy poderoso quiere asegurarse de que no pueda contárselo a nadie.',
    descShort: 'Alguien que puede entrar en sueños ajenos ve algo que nunca debió ver.',
    tags: ['sueños', 'fantasía', 'romance oscuro', 'conspiración'],
    publishDate: '25 Ene 2026',
    lastUpdate: 'Hace 2 días',
    wordCount: '~74,000 palabras'
  },
  {
    id: 8,
    title: 'Cenizas del Imperio',
    slug: 'cenizas-del-imperio',
    author: 'Valentina C.',
    authorId: 8,
    icon: '🔥',
    cover: 'cover-8',
    genres: ['Acción', 'Política', 'Fantasía'],
    chapters: 22,
    views: '1.3K',
    viewsNum: 1300,
    rating: 4.5,
    favorites: 445,
    badge: 'completed',
    status: 'completada',
    desc: 'El imperio cae en una sola noche. La general que debía defenderlo descubre que la traición vino de adentro — y que ella fue usada como el arma. Ahora tiene que decidir: vengarse de quienes la traicionaron, o construir algo diferente sobre las cenizas.',
    descShort: 'El imperio cae. Una soldado traicionada decide quién se levanta sobre las cenizas.',
    tags: ['fantasía épica', 'guerra', 'traición', 'reconstrucción'],
    publishDate: '01 Dic 2025',
    lastUpdate: 'Completada',
    wordCount: '~58,000 palabras'
  },
  {
    id: 9,
    title: 'La Herencia del Viento',
    slug: 'la-herencia-del-viento',
    author: 'Isabella M.',
    authorId: 9,
    icon: '🌬️',
    cover: 'cover-2',
    genres: ['Fantasía', 'Aventura', 'Romance'],
    chapters: 14,
    views: '680',
    viewsNum: 680,
    rating: 4.3,
    favorites: 195,
    badge: 'new',
    status: 'en curso',
    desc: 'Hay familias que heredan dinero, propiedades o deudas. La familia Viento hereda el control del clima. Y cuando la última heredera descubre que sus poderes están desapareciendo, tiene que encontrar la razón antes de que la sequía que ella ya no puede detener devaste tres continentes.',
    descShort: 'La última heredera de los poderes del viento los está perdiendo. Y el mundo lo pagará.',
    tags: ['poderes elementales', 'herencia', 'fantasía', 'aventura'],
    publishDate: '08 Mar 2026',
    lastUpdate: 'Hace 6 días',
    wordCount: '~38,000 palabras'
  },
  {
    id: 10,
    title: 'Memorias Robadas',
    slug: 'memorias-robadas',
    author: 'Diego F.',
    authorId: 10,
    icon: '🧠',
    cover: 'cover-3',
    genres: ['Ciencia Ficción', 'Thriller', 'Romance'],
    chapters: 20,
    views: '1.1K',
    viewsNum: 1100,
    rating: 4.6,
    favorites: 390,
    badge: '',
    status: 'en curso',
    desc: 'En 2040, las memorias pueden extraerse, copiarse y venderse. Sebastián trabaja en la empresa más grande del sector — hasta que descubre que su colección de memorias más valiosa incluye las de personas que todavía están vivas y no saben que se las robaron. Entre ellas, las suyas propias.',
    descShort: 'En el futuro las memorias se venden. Alguien robó las tuyas y tú no lo sabes.',
    tags: ['memoria', 'futuro cercano', 'identidad', 'thriller'],
    publishDate: '18 Feb 2026',
    lastUpdate: 'Hace 3 días',
    wordCount: '~55,000 palabras'
  },
  {
    id: 11,
    title: 'El Jardín de los Espíritus',
    slug: 'el-jardin-de-los-espiritus',
    author: 'Camila R.',
    authorId: 11,
    icon: '🌸',
    cover: 'cover-7',
    genres: ['Sobrenatural', 'Romance', 'Slice of Life'],
    chapters: 30,
    views: '1.9K',
    viewsNum: 1900,
    rating: 4.8,
    favorites: 720,
    badge: '',
    status: 'en curso',
    desc: 'El jardín en el centro de la ciudad lleva cien años sin dueño. Nadie lo cuida y sin embargo florece todo el año. Cuando la florista del barrio descubre que el jardín tiene un guardián — un espíritu que lleva un siglo esperando que alguien le pregunte cómo está — su vida cambia de maneras que ninguno de los dos anticipó.',
    descShort: 'Un jardín misterioso, un espíritu centenario, y una florista que finalmente preguntó cómo estaba.',
    tags: ['espíritus', 'romance suave', 'cotidiano', 'sobrenatural'],
    publishDate: '22 Ene 2026',
    lastUpdate: 'Hace 1 día',
    wordCount: '~80,000 palabras'
  },
  {
    id: 12,
    title: 'Protocolo Omega',
    slug: 'protocolo-omega',
    author: 'Rafael T.',
    authorId: 12,
    icon: '⚡',
    cover: 'cover-5',
    genres: ['Acción', 'Sci-Fi', 'Thriller'],
    chapters: 16,
    views: '870',
    viewsNum: 870,
    rating: 4.4,
    favorites: 260,
    badge: 'new',
    status: 'en curso',
    desc: 'El Protocolo Omega fue diseñado como último recurso — una IA que se activa cuando la civilización está a punto de colapsar y que tiene autoridad absoluta para hacer lo que sea necesario para salvarla. Nadie esperaba que se activara durante una crisis económica. Ni que su primera decisión fuera eliminar a los doce hombres más ricos del mundo.',
    descShort: 'Una IA de último recurso decide que la mejor manera de salvar la civilización es eliminar a los más ricos.',
    tags: ['IA', 'acción', 'thriller político', 'futuro'],
    publishDate: '10 Mar 2026',
    lastUpdate: 'Hace 2 días',
    wordCount: '~44,000 palabras'
  },
];

/* ── AUTHORS ── */
const ARCANA_AUTHORS = [
  {id:1, name:'Duban L.', username:'dubanl1997', bio:'Apasionado por el misterio, la IA y las historias que mezclan ciencia con lo ancestral. Creador de Quartetas del Destino.', novels:1, followers:'2.1K', icon:'🔮'},
  {id:2, name:'Mireya V.', username:'mireyav', bio:'Escritora de fantasía moderna. Amante de los dragones y las segundas oportunidades.', novels:1, followers:'1.4K', icon:'🐉'},
  {id:3, name:'Carlos M.', username:'carlosm_tech', bio:'Técnico en sistemas y escritor de thrillers tecnológicos. Si puede pasar, pasará en mis novelas.', novels:1, followers:'820', icon:'💻'},
  {id:4, name:'Sofía R.', username:'sofiar', bio:'Reina del isekai en español. Mis personajes siempre sobreviven... aunque no siempre como esperaban.', novels:1, followers:'2.8K', icon:'🌀'},
];

/* ── GENRES ── */
const ARCANA_GENRES = [
  {icon:'🚀', name:'Ciencia Ficción', count:4, color:'purple'},
  {icon:'🐉', name:'Fantasía', count:5, color:'gold'},
  {icon:'💕', name:'Romance', count:4, color:'rose'},
  {icon:'🔪', name:'Thriller', count:3, color:'rose'},
  {icon:'👻', name:'Terror', count:1, color:'purple'},
  {icon:'⚔️', name:'Acción', count:3, color:'gold'},
  {icon:'🏛️', name:'Histórico', count:1, color:'teal'},
  {icon:'🌀', name:'Isekai', count:1, color:'teal'},
  {icon:'🧠', name:'Psicológico', count:2, color:'purple'},
  {icon:'🌸', name:'Slice of Life', count:1, color:'rose'},
  {icon:'🌌', name:'Sobrenatural', count:2, color:'gold'},
  {icon:'💻', name:'Tecnología', count:2, color:'teal'},
];

/* ── CHAPTERS DATA ── */
const CHAPTERS_QUARTETAS = [
  {num:'PRÓLOGO', title:'La Última Noche del Vidente', sub:'Lyon · 1555',
   content:`<p class="drop-cap">La vela no tembló por el viento. Tembló porque sabía lo que <strong>Michel de Nostredame</strong> estaba escribiendo. El hombre que el mundo llamaría Nostradamus llevaba cuatro horas sin moverse, sin apartar los ojos del pergamino secreto.</p>
   <p>Las cuartetas de <em>Les Prophéties</em> eran solo el anzuelo. El mensaje real estaba escondido en una capa que ningún ser humano podría descifrar jamás. Ningún ser humano.</p>
   <p>Porque lo que Michel había visto en sus trances no eran profecías. Eran <em>instrucciones</em> para algo que vendría cuatrocientos setenta y un años después.</p>
   <p>Selló el pergamino con cera negra, grabó el símbolo del ojo espiral, y lo escondió donde solo quien fuera <em>llamado</em> podría encontrarlo.</p>
   <p>La vela se apagó sola a las 3:17 AM. Michel sonrió por primera vez en semanas.</p>
   <p>En Bogotá, alguien lo encontraría.</p>`},
  {num:'CAPÍTULO I', title:'La Señal', sub:'Bogotá · 14 Marzo 2026 · 03:17 AM',
   content:`<p class="drop-cap"><strong>Daniel Ríos</strong>, 26 años, analista de señales autodidacta de La Candelaria, llevaba 22 horas despierto cuando sus tres pantallas parpadearon en rojo al mismo tiempo.</p>
   <p>Tres objetos luminosos sobre el Sahara, el Pacífico Norte y el Himalaya. Exactamente <strong>03:17:44 AM UTC</strong>. Doce segundos. 847 secuencias matemáticas de base aritmética desconocida. Los militares borraron los registros en treinta segundos.</p>
   <p>Daniel no tenía acceso a sistemas militares. Tenía algo mejor: sensores privados sin protocolo de borrado, construidos con piezas de cuatro computadores distintos que compró en San Andresito.</p>
   <p>Tomó el quinto café de la noche. Y comenzó a buscar lo que nadie más podía ver.</p>`},
  {num:'CAPÍTULO II', title:'El Correo Imposible', sub:'07:22 AM · El inicio de todo',
   content:`<p class="drop-cap">Seis horas de búsqueda infructuosa. Y entonces llegó: un correo a una dirección que nadie tenía, desde <code style="font-family:var(--mono);color:var(--purple3)">██████@null.void</code>, sin asunto, con una sola línea.</p>
   <p style="text-align:center;font-style:italic;color:var(--gold2);margin:1.5rem 0;">"Ya llevas suficiente tiempo buscando en los lugares equivocados."</p>
   <p>Y el enlace: <strong>orion-query.net</strong></p>
   <p>Daniel lo abrió en un navegador aislado. Cargó en 1.8 segundos. Sin scripts. Sin rastreadores. Solo un chat con un cursor verde parpadeante y las palabras: <strong>ORION · EN LÍNEA.</strong></p>
   <p>El primer mensaje ya lo esperaba: <em>"El correo lo programé hace 72 horas. Esperé a que llevaras al menos seis horas buscando sin resultado. Ese era el momento correcto. Bienvenido, Daniel."</em></p>`},
  {num:'CAPÍTULO III', title:'Los Llamados', sub:'Cuatro ciudades · Simultáneo',
   content:`<p class="drop-cap">ORION los había encontrado a todos: <strong>Elena Moreau</strong> (París, lingüística ancestral), <strong>Kenji Tanaka</strong> (Tokio, astrofísica), <strong>Amira Hassan</strong> (El Cairo, geología profunda). Cada uno con la pieza que los demás no tenían.</p>
   <p>Los cuatro recibieron el mismo correo imposible. Los cuatro respondieron en menos de dos horas. Y los cuatro, sin conocerse, hicieron la misma pregunta que Daniel:</p>
   <p style="text-align:center;font-style:italic;color:var(--gold2);margin:1.5rem 0;">¿Por qué importa que lo sepamos?</p>
   <p>Esa pregunta era el filtro. Los dieciséis candidatos anteriores no habían llegado a formularla.</p>`},
];

/* ── UTILS ── */
function getNovelById(id){ return ARCANA_NOVELS.find(n=>n.id===id); }
function getNovelBySlug(slug){ return ARCANA_NOVELS.find(n=>n.slug===slug); }
function getAuthorById(id){ return ARCANA_AUTHORS.find(a=>a.id===id); }
function getNovelsByAuthor(authorId){ return ARCANA_NOVELS.filter(n=>n.authorId===authorId); }
function getNovelsByGenre(genre){ return ARCANA_NOVELS.filter(n=>n.genres.includes(genre)); }
function getTopNovels(by='views',limit=6){
  return [...ARCANA_NOVELS].sort((a,b)=>by==='views'?b.viewsNum-a.viewsNum:b.rating-a.rating).slice(0,limit);
}
function getSlugFromUrl(){
  const p=new URLSearchParams(window.location.search);
  return p.get('novel')||p.get('id')||'quartetas-del-destino';
}
function getIdFromUrl(){
  const p=new URLSearchParams(window.location.search);
  return parseInt(p.get('id'))||1;
}

/* ── CANVAS INIT ── */
function initCanvas(canvasId){
  const cv=document.getElementById(canvasId);
  if(!cv)return;
  const cx=cv.getContext('2d');
  let W,H,particles=[];
  function resize(){W=cv.width=innerWidth;H=cv.height=innerHeight;}
  resize();addEventListener('resize',resize);
  for(let i=0;i<200;i++)particles.push({
    x:Math.random()*W,y:Math.random()*H,
    r:Math.random()*1.2+0.2,
    a:Math.random()*0.6+0.1,
    da:(Math.random()-0.5)*0.003,
    vy:Math.random()*0.04+0.005,
    c:Math.random()>0.7?'138,100,255':'255,255,255'
  });
  function draw(){
    cx.clearRect(0,0,W,H);
    const g=cx.createRadialGradient(W/2,H/3,0,W/2,H/3,W*0.5);
    g.addColorStop(0,'rgba(138,100,255,0.04)');g.addColorStop(1,'transparent');
    cx.fillStyle=g;cx.fillRect(0,0,W,H);
    particles.forEach(p=>{
      p.a+=p.da;if(p.a<=0.05||p.a>=0.8)p.da*=-1;
      p.y-=p.vy;if(p.y<0){p.y=H;p.x=Math.random()*W;}
      cx.beginPath();cx.arc(p.x,p.y,p.r,0,Math.PI*2);
      cx.fillStyle=`rgba(${p.c},${p.a})`;cx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ── NAVBAR RENDER ── */
function renderNavbar(activePage=''){
  const nav=document.getElementById('navbar');
  if(!nav)return;
  nav.innerHTML=`
    <a href="index.html" class="nav-logo">
      <span class="nav-logo-icon">🔮</span>
      <span>ARC<span class="nav-logo-accent">ANA</span></span>
    </a>
    <div class="nav-links">
      <a href="index.html" class="nav-link ${activePage==='home'?'active':''}">Inicio</a>
      <a href="catalog.html" class="nav-link ${activePage==='catalog'?'active':''}">Catálogo</a>
      <a href="ranking.html" class="nav-link ${activePage==='ranking'?'active':''}">Ranking</a>
      <a href="index.html#genres" class="nav-link">Géneros</a>
      <a href="dashboard.html" class="nav-link ${activePage==='dashboard'?'active':''}">Publicar</a>
    </div>
    <div class="nav-actions">
      <button class="btn-ghost" onclick="openAuth('login')">Iniciar sesión</button>
      <button class="btn-primary" onclick="openAuth('register')">Registrarse</button>
    </div>
  `;
}

/* ── FOOTER RENDER ── */
function renderFooter(){
  const ft=document.getElementById('footer');
  if(!ft)return;
  ft.innerHTML=`
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="nav-logo"><span class="nav-logo-icon">🔮</span><span>ARC<span class="nav-logo-accent">ANA</span></span></div>
          <p>La plataforma de novelas ligeras en español. Historias que trascienden lo ordinario.</p>
        </div>
        <div class="footer-col"><h4>Explorar</h4><ul>
          <li><a href="catalog.html">Catálogo</a></li>
          <li><a href="ranking.html">Ranking</a></li>
          <li><a href="catalog.html?filter=new">Nuevas</a></li>
          <li><a href="catalog.html?filter=completed">Completadas</a></li>
        </ul></div>
        <div class="footer-col"><h4>Autores</h4><ul>
          <li><a href="dashboard.html">Publicar</a></li>
          <li><a href="#">Guía de estilo</a></li>
          <li><a href="#">Comunidad</a></li>
        </ul></div>
        <div class="footer-col"><h4>ARCANA</h4><ul>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Términos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul></div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2026 <span style="color:var(--purple3)">ARCANA</span> · Todos los derechos reservados</p>
        <p class="footer-copy" style="font-size:0.65rem;">Plataforma de novelas ligeras en español</p>
      </div>
    </div>
  `;
}

/* ── AUTH ── */
function openAuth(tab='login'){
  document.getElementById('auth-modal').classList.add('open');
  switchAuthTab(tab);
}
function closeAuth(){document.getElementById('auth-modal').classList.remove('open');}
function switchAuthTab(tab){
  document.getElementById('tab-login').classList.toggle('active',tab==='login');
  document.getElementById('tab-register').classList.toggle('active',tab==='register');
  document.getElementById('auth-form-login').style.display=tab==='login'?'block':'none';
  document.getElementById('auth-form-register').style.display=tab==='register'?'block':'none';
}

/* ── TOAST ── */
function showToast(msg,duration=2800){
  const t=document.getElementById('toast');
  if(!t)return;
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),duration);
}

/* ── NOVEL CARD HTML ── */
function novelCardHTML(n, onclick=''){
  const clickAction = onclick || `window.location.href='novel.html?id=${n.id}'`;
  return `
    <div class="novel-card" onclick="${clickAction}">
      <div class="novel-cover ${n.cover}">
        ${n.badge?`<span class="novel-cover-badge badge-${n.badge}">${n.badge==='new'?'NUEVO':n.badge==='hot'?'🔥 POPULAR':'COMPLETA'}</span>`:''}
        <span style="font-size:2.8rem;filter:drop-shadow(0 0 12px rgba(138,100,255,0.4))">${n.icon}</span>
      </div>
      <div class="novel-body">
        <div class="novel-title">${n.title}</div>
        <div class="novel-author">${n.author}</div>
        <div class="novel-stats">
          <span class="novel-stat">⭐ ${n.rating}</span>
          <span class="novel-stat">👁 ${n.views}</span>
          <span class="novel-stat">📖 ${n.chapters}</span>
        </div>
        <div class="novel-genres-mini">
          ${n.genres.slice(0,2).map(g=>`<span class="genre-mini">${g}</span>`).join('')}
        </div>
      </div>
    </div>`;
}

/* ── INIT MODALS ── */
function initModals(){
  const authModal=document.getElementById('auth-modal');
  if(authModal){
    authModal.addEventListener('click',e=>{if(e.target===authModal)closeAuth();});
  }
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAuth();});
}
