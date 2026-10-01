// Utilidades para usar los colores de cada marca de forma accesible.

const toRgb = (hex: string): [number, number, number] => {
  let h = hex.replace('#', '').trim()
  if (h.length === 3) h = h.split('').map(c => c + c).join('')
  const n = parseInt(h, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

const luminance = (hex: string) => {
  const [r, g, b] = toRgb(hex).map(v => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** Relación de contraste WCAG entre dos colores (de 1 a 21). */
export const contrastRatio = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

/** Devuelve blanco o casi negro: el que se lea mejor sobre el fondo dado. */
export const readableOn = (bg: string) =>
  contrastRatio(bg, '#FFFFFF') >= contrastRatio(bg, '#1C1A1F') ? '#FFFFFF' : '#1C1A1F'

/** Convierte un título en un id para anclas: "Investigación" -> "investigacion". */
export const toId = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
