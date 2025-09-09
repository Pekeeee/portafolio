import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alejandro AMAD — Portafolio',
  description: 'Desarrollo Web, E-commerce, HUD FiveM, Sistemas a medida.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* ✅ DEVICON CDN (solo una versión, la última estable) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
