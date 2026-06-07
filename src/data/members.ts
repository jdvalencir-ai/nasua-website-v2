// ═══════════════════════════════════════════════
//  MIEMBROS DEL COLECTIVO — Editar aquí
// ═══════════════════════════════════════════════

export interface Miembro {
  nombre: string;
  rol: string;
  bio: string;
  imagen: string;     // ruta en /public/images/members/
  instagram?: string;
}

export const MIEMBROS: Miembro[] = [
  {
    nombre:    'Vivian',
    rol:       'Voz & Composición',
    bio:       'La fuerza vocal del colectivo. Vivian trae la intensidad tropical que define el sonido de Nasúa.',
    imagen:    '/images/members/vivian.jpg',   // ← PENDIENTE: foto real
    instagram: '',
  },
  {
    nombre:    'Julie',
    rol:       'Producción & Teclados',
    bio:       'Arquitecta del sonido. Julie construye los paisajes electrónicos y tropicales que sostienen cada canción.',
    imagen:    '/images/members/julie.jpg',    // ← PENDIENTE: foto real
    instagram: '',
  },
  {
    nombre:    'Luis',
    rol:       'Guitarras & Arreglos',
    bio:       'El corazón rítmico. Luis teje la fusión de géneros que hace imposible quedarse quieto.',
    imagen:    '/images/members/luis.jpg',     // ← PENDIENTE: foto real
    instagram: '',
  },
];
