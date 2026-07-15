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
  { titulo: 'El profesor',                 youtubeId: 'k2OEo8H5-6c', destacado: true },
  { titulo: 'La verdad es un problema',    youtubeId: 'PjhKr1xpJ1c' },
  { titulo: 'Mujeres con alma de hombre',  youtubeId: 'KUjNSLFevFA' },
  { titulo: 'Para siempre',                youtubeId: 'dpJouJPQ2lw' },
  { titulo: 'No seas así',                 youtubeId: 'akh3KL7qABg' },
  { titulo: 'La vida va',                  youtubeId: 'fZOKIjx7Za0' },
];
