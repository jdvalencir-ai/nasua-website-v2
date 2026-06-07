// ═══════════════════════════════════════════════════════════
//  CONFIGURACIÓN DEL SITIO — Editar aquí para actualizar
// ═══════════════════════════════════════════════════════════

// ── Logo activo en el header (cambiar la variante aquí) ──
// Opciones: 'full' | 'horizontal' | 'wordmark' | 'icon'
export const LOGO_VARIANTE = 'horizontal' as const;

export const LOGOS = {
  full:       '/logos/logo-full.png',
  horizontal: '/logos/logo-horizontal.png',
  wordmark:   '/logos/logo-wordmark.png',
  icon:       '/logos/logo-icon.png',
} as const;

// ── Datos de contacto / Booking (PENDIENTE del cliente) ──
export const CONTACTO = {
  email:   'booking@nasuamusica.com',     // ← PENDIENTE: actualizar
  asunto:  'Booking - Nasúa Narica',
  telefono: '',                            // ← PENDIENTE: agregar si aplica
};

// ── Redes sociales ───────────────────────────────────────
export const REDES = {
  instagram: 'https://instagram.com/nasuamusica',
  youtube:   'https://youtube.com/@nasuamusica',
  spotify:   '',                           // ← PENDIENTE: agregar link Spotify
  tiktok:    '',                           // ← PENDIENTE: agregar si tienen
};

// ── SEO / Metadatos ───────────────────────────────────────
export const SEO = {
  sitio:       'https://nasuanarica.com',
  titulo:      'Nasúa Narica — Música Sin Fronteras',
  descripcion: 'Colectivo de pop tropical y fusión latinoamericana. Música que rompe fronteras.',
  og_imagen:   '/logos/logo-full.png',
};
