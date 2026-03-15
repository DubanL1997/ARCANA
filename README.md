# 🔮 ARCANA — Plataforma de Novelas Ligeras

> La plataforma de novelas ligeras en español. Historias que trascienden lo ordinario.

---

## 📁 Estructura del proyecto

```
arcana/
├── index.html          ← Página de inicio
├── catalog.html        ← Catálogo completo con filtros
├── novel.html          ← Página individual de novela (?id=N)
├── reader.html         ← Lector de capítulos (?id=N&ch=N)
├── profile.html        ← Perfil de autor (?id=N)
├── dashboard.html      ← Panel para publicar novelas
├── ranking.html        ← Ranking de novelas
├── css/
│   └── arcana.css      ← Estilos globales compartidos
├── js/
│   └── data.js         ← Datos, lógica compartida y utilidades
└── README.md
```

---

## 🌐 Páginas incluidas

| Página | Descripción |
|--------|-------------|
| `index.html` | Inicio con novela destacada, tendencias, géneros |
| `catalog.html` | Catálogo con filtros por género, estado, orden + búsqueda + vista lista/grid |
| `novel.html?id=1` | Página de novela con sinopsis, lista de capítulos y comentarios |
| `reader.html?id=1&ch=0` | Lector inmersivo con navegación por teclado, ajuste de fuente y comentarios por capítulo |
| `profile.html?id=1` | Perfil de autor con sus obras y estadísticas |
| `dashboard.html` | Panel completo para publicar novelas, añadir capítulos, ver estadísticas |
| `ranking.html` | Rankings por lecturas, valoración, favoritos y nuevas |

---

## 🚀 Subir a GitHub y publicar en Netlify

### GitHub
```bash
git init
git add .
git commit -m "feat: ARCANA plataforma completa v1.0"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/arcana.git
git push -u origin main
```

### Netlify
1. app.netlify.com → Add new site → Import from GitHub
2. Selecciona el repo `arcana`
3. Publish directory: `.`
4. Deploy site ✅

---

## ✏️ Cómo agregar contenido

### Nueva novela al catálogo
En `js/data.js`, añade un objeto al array `ARCANA_NOVELS`:
```javascript
{
  id: 13,
  title: 'Mi Nueva Novela',
  author: 'Mi Nombre',
  icon: '⚡',
  cover: 'cover-1',  // cover-1 a cover-8
  genres: ['Fantasía', 'Acción'],
  chapters: 5,
  views: '0',
  viewsNum: 0,
  rating: 0,
  favorites: 0,
  badge: 'new',
  status: 'en curso',
  desc: 'Descripción larga...',
  descShort: 'Una línea.',
  tags: ['tag1', 'tag2'],
  publishDate: '2026',
  lastUpdate: 'Hoy',
  wordCount: '~5,000 palabras'
}
```

### Nuevos capítulos al lector
En `reader.html`, añade al array `ALL_CHAPTERS`:
```javascript
{
  num: 'CAPÍTULO IV',
  title: 'Título del capítulo',
  sub: 'Lugar · Fecha',
  comments: [],
  content: `<p class="drop-cap">Texto del capítulo...</p>`
}
```

---

## 📱 Convertir a App Android
Ver guía en el panel de ARCANA → próximamente.

---

*ARCANA © 2026 · Plataforma de novelas ligeras en español*
