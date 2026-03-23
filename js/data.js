/* ═══════════════════════════════════════
   ARCANA — Data & App Logic Centralizado
   Sincronizado con Firebase Auth & Firestore
═══════════════════════════════════════ */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore, collection, getDocs, query, where, limit, orderBy } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyC1Fn6QXJu0UtH086vlpH2l2P-CI_ul3_A",
  authDomain: "arcana-553dd.firebaseapp.com",
  projectId: "arcana-553dd",
  storageBucket: "arcana-553dd.firebasestorage.app",
  messagingSenderId: "674195855924",
  appId: "1:674195855924:web:1f88f303c99cf6a4b0c861"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// --- LÓGICA DE USUARIO ---
window._currentUser = null;

onAuthStateChanged(auth, (user) => {
  window._currentUser = user;
  if (typeof renderNavbar === 'function') renderNavbar(window._currentPath || 'home');
  // Disparar evento para páginas que necesiten reaccionar al login (ej. Dashboard)
  window.dispatchEvent(new CustomEvent('authReady', { detail: user }));
});

window.loginWithGoogle = async () => {
  try {
    showToast('✦ Conectando con el Archivo Astral...');
    await signInWithPopup(auth, provider);
    closeAuth();
  } catch (e) {
    showToast('Error en la conexión');
    console.error(e);
  }
};

window.logout = async () => {
  await signOut(auth);
  location.reload();
};

// --- DATOS ESTÁTICOS ---
export const ARCANA_GENRES = [
  { name: 'Acción', icon: '⚔️' }, { name: 'Aventura', icon: '🗺️' },
  { name: 'Comedia', icon: '🎭' }, { name: 'Fantasía', icon: '🐉' },
  { name: 'Misterio', icon: '🔍' }, { name: 'Romance', icon: '💖' },
  { name: 'Sci-Fi', icon: '🚀' }, { name: 'Slice of Life', icon: '☕' }
];

export const ARCANA_NOVELS = [
  {
    id: 'local-1',
    title: 'Quartetas del Destino',
    author: 'Duban L.',
    icon: '🔮',
    cover: 'cover-1',
    genres: ['Sci-Fi', 'Misterio'],
    chapters: 16, views: '2.4K', rating: 4.9,
    descShort: 'Un manuscrito de 1555 y una IA que espera las preguntas correctas.'
  }
];

// --- UTILIDADES DE UI ---
window.showToast = (msg) => {
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
};

window.novelCardHTML = (n) => `
  <div class="novel-card" onclick="window.location.href='novel.html?id=${n.id}'">
    <div class="novel-cover ${n.cover || 'cover-1'}">
      <span style="font-size:2.8rem;">${n.icon || '📖'}</span>
    </div>
    <div class="novel-body">
      <div class="novel-title">${n.title}</div>
      <div class="novel-author">${n.author}</div>
      <div class="novel-stats">
        <span>⭐ ${n.rating || 0}</span> <span>👁 ${n.views || 0}</span>
      </div>
    </div>
  </div>
`;

// Exponer db y funciones a la ventana global para los otros scripts
window.db = db;
window.ARCANA_GENRES = ARCANA_GENRES;
// --- SISTEMA DE NOTIFICACIONES PARA AUTORES ---
import { onSnapshot } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

window.initNotifications = function() {
  if (!window._currentUser) return;

  // Escuchar nuevos comentarios en todas las novelas
  const q = query(
    collection(db, "comments"),
    orderBy("createdAt", "desc"),
    limit(1)
  );

  // Vigilante en tiempo real
  onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const comment = change.doc.data();
        
        // Solo notificar si el comentario no es del propio autor
        // y si la novela pertenece al usuario actual
        if (comment.uid !== window._currentUser.uid) {
           checkIfOwnerAndNotify(comment);
        }
      }
    });
  });
};

async function checkIfOwnerAndNotify(comment) {
  const novelRef = doc(db, "novels", comment.novelId);
  const novelSnap = await getDoc(novelRef);
  
  if (novelSnap.exists() && novelSnap.data().authorId === window._currentUser.uid) {
    showToast(`💬 ${comment.userName} comentó en tu novela: "${comment.text.substring(0, 20)}..."`);
    // Opcional: Sonido de notificación
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3');
    audio.play().catch(() => {}); 
  }
}

// Activar notificaciones cuando el usuario esté listo
window.addEventListener('authReady', () => {
  window.initNotifications();
});