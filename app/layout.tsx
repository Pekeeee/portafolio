// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://portafolio-iota-black-48.vercel.app'

export const metadata: Metadata = {
  title: 'Programador en Irapuato — Alejandro AMAD | Full-Stack Developer',
  description:
    'Soy Alejandro AMAD, programador y desarrollador web en Irapuato. Especialista en sistemas a medida, e-commerce y plataformas completas con Next.js, Node.js y MySQL.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Programador en Irapuato — Alejandro AMAD | Full-Stack Developer',
    description:
      'Desarrollador web full-stack. Sistemas a medida, e-commerce y plataformas completas con Next.js, Node.js y MySQL.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Alejandro AMAD — Portafolio' }],
    siteName: 'Alejandro AMAD — Portafolio',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programador en Irapuato — Alejandro AMAD | Full-Stack Developer',
    description:
      'Desarrollador web full-stack. Sistemas a medida, e-commerce y plataformas completas con Next.js, Node.js y MySQL.',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
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
  themeColor: '#0b0e12',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alejandro AMAD',
    jobTitle: 'Full-Stack Developer',
    url: siteUrl,
    sameAs: [
      // Sustituye por tus enlaces reales:
      'https://github.com/tuusuario',
      'https://www.linkedin.com/in/tuusuario',
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
        {/* DEVICON CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/devicon.min.css"
        />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
