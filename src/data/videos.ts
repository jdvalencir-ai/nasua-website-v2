// ═══════════════════════════════════════════════════════════
//  VIDEOS — Agregar/quitar videos de YouTube aquí
// ═══════════════════════════════════════════════════════════

export interface Video {
  titulo: string;
  youtubeId: string;   // solo el ID, ej: "dQw4w9WgXcQ"
  destacado?: boolean; // si true, aparece más grande en la grilla
}

// VIDEO PRINCIPAL — "La Leyenda" (sección especial)
// ← PENDIENTE: reemplazar con el ID real del video final
export const VIDEO_LEYENDA = {
  youtubeId: 'PENDIENTE',   // ← cambiar este ID cuando esté listo
  titulo:    'La Leyenda',
};

// GRILLA DE VIDEOS
export const VIDEOS: Video[] = [
  // ← PENDIENTE: agregar los IDs reales de YouTube
  { titulo: 'Video 1 — PENDIENTE',  youtubeId: 'PENDIENTE_1',  destacado: true },
  { titulo: 'Video 2 — PENDIENTE',  youtubeId: 'PENDIENTE_2' },
  { titulo: 'Video 3 — PENDIENTE',  youtubeId: 'PENDIENTE_3' },
  { titulo: 'Video 4 — PENDIENTE',  youtubeId: 'PENDIENTE_4' },
  { titulo: 'Video 5 — PENDIENTE',  youtubeId: 'PENDIENTE_5' },
  { titulo: 'Video 6 — PENDIENTE',  youtubeId: 'PENDIENTE_6' },
];
