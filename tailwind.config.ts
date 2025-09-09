import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1220',          // texto principal (gris carbón)
        paper: '#ffffff',        // fondo
        subtle: '#6b7280',       // texto secundario
        border: '#e5e7eb',       // líneas suaves
        accent: '#1e3a8a',       // azul editorial (no chillón)
        accentLight: '#3b82f6'   // azul secundario (links/hover)
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['"Libre Baskerville"', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
}
export default config
