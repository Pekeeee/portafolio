// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://portafolio-iota-black-48.vercel.app'

export const metadata: Metadata = {
  // 🔹 Title y description con keywords
  title: 'Programador en Irapuato — Alejandro AMAD | Full-Stack Developer',
  description:
    'Soy Alejandro AMAD, programador y desarrollador web en Irapuato. Especialista en sistemas a medida, e-commerce y plataformas completas con Next.js, Node.js y MySQL.',

  // 🔹 Base absoluta para OG/canonical
  metadataBase: new URL(siteUrl),

  // 🔹 Canonical
  alternates: {
    canonical: '/',
  },

  // 🔹 Open Graph
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Programador en Irapuato — Alejandro AMAD | Full-Stack Developer',
    description:
      'Desarrollador web full-stack. Sistemas a medida, e-commerce y plataformas completas con Next.js, Node.js y MySQL.',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Alejandro AMAD — Portafolio' },
    ],
    siteName: 'Alejandro AMAD — Portafolio',
    locale: 'es_MX',
  },

  // 🔹 Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Programador en Irapuato — Alejandro AMAD | Full-Stack Developer',
    description:
      'Desarrollador web full-stack. Sistemas a medida, e-commerce y plataformas completas con Next.js, Node.js y MySQL.',
    images: ['/og.png'],
  },

  // 🔹 Favicon / Apple
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  // 🔹 Robots (permitir indexación)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 🔹 Theme color del sitio
  themeColor: '#0b0e12',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD (Schema.org): Person + WebSite (+SearchAction)
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alejandro AMAD',
    jobTitle: 'Full-Stack Developer',
    url: siteUrl,
    sameAs: [
      // Pon tus perfiles reales:
      'https://github.com/AMAD', // ejemplo
      'https://www.linkedin.com/in/alejandro-amad', // ejemplo
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Irapuato',
      addressRegion: 'Guanajuato',
      addressCountry: 'MX',
    },
  }

  const webSiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Alejandro AMAD — Portafolio',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="es">
      <head>
        {/* ✅ DEVICON CDN (una sola versión estable) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/devicon.min.css"
        />

        {/* ✅ Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          // @ts-expect-error: Next types
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          // @ts-expect-error: Next types
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
