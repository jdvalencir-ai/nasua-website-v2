// Prefija rutas de /public con el BASE_URL correcto según el entorno.
// BASE_URL = '/nasua-website-v2/' en GitHub Pages
// BASE_URL = '/'                   en local / dominio propio

export function asset(path: string): string {
  const base  = import.meta.env.BASE_URL.replace(/\/$/, ''); // quitar "/" final si existe
  const clean = path.replace(/^\//, '');                      // quitar "/" inicial
  return `${base}/${clean}`;
}
