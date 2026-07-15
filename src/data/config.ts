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
  asunto:  'Booking - Nasúa',
  telefono: '',                            // ← PENDIENTE: agregar si aplica
};

// ── Manager / Representación ─────────────────────────────
export const MANAGER = {
  empresa:   'EL Entertainment',
  nombre:    'Eder Lemus',
  ubicacion: 'Los Angeles, California',
  telefono:  '+1 760 623 9100',
  email:     'manager@elentertainment.us',
};

// ── Redes sociales ───────────────────────────────────────
export const REDES = {
  instagram:  'https://instagram.com/nasuamusica',
  facebook:   'https://facebook.com/nasuamusica',   // ← VERIFICAR URL real (perfil "NASUA Música")
  tiktok:     'https://www.tiktok.com/@nasuamusica',
  youtube:    'https://youtube.com/@nasuanarica',
  spotify:    'https://open.spotify.com/intl-es/artist/3D886oPEYkNZVK9K8t7O7H?si=aNbggApgRd2g0xVod0oOLQ',                          // ← PENDIENTE: pegar link del artista en Spotify
};

// ── SEO / Metadatos ───────────────────────────────────────
export const SEO = {
  sitio:       'https://nasuanarica.com',
  titulo:      'Nasúa — Música Sin Fronteras',
  descripcion: 'Colectivo de pop tropical y fusión latinoamericana. Música que rompe fronteras.',
  og_imagen:   '/logos/logo-full.png',
};
