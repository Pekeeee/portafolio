'use client'

import { motion } from 'framer-motion'

type T = {
  name: string
  color: string
  icon?: string          // clase devicon-*
  mono?: boolean         // el icono es monocromo → forzar color
  iconColor?: string     // color del icono cuando mono=true
  emoji?: string         // fallback
}

// Si en ../lib/data solo tienes strings, no lo usamos aquí.
// Puedes borrar la importación anterior y dejar este arreglo:
const items: T[] = [
  // Frontend
  { name:'HTML',        color:'#E44D26', icon:'devicon-html5-plain colored' },
  { name:'CSS',         color:'#1572B6', icon:'devicon-css3-plain colored' },
  { name:'JavaScript',  color:'#F7DF1E', icon:'devicon-javascript-plain colored' },
  { name:'TypeScript',  color:'#3178C6', icon:'devicon-typescript-plain colored' },
  { name:'React',       color:'#61DAFB', icon:'devicon-react-original colored' },
  { name:'Next.js',     color:'#111827', icon:'devicon-nextjs-plain', mono:true, iconColor:'#fff' },
  { name:'TailwindCSS', color:'#38BDF8', icon:'devicon-tailwindcss-plain colored' },
  { name:'Bootstrap',   color:'#7952B3', icon:'devicon-bootstrap-plain colored' },

  // Backend
  { name:'Node.js',     color:'#539E43', icon:'devicon-nodejs-plain colored' },
  { name:'PHP',         color:'#777BB4', icon:'devicon-php-plain colored' },
  { name:'Laravel',     color:'#FF2D20', icon:'devicon-laravel-plain colored' },
  { name:'.NET',        color:'#512BD4', icon:'devicon-dotnetcore-plain colored' },

  // DB
  { name:'MySQL',       color:'#4479A1', icon:'devicon-mysql-plain colored' },
  { name:'PostgreSQL',  color:'#336791', icon:'devicon-postgresql-plain colored' },
  { name:'Prisma ORM',  color:'#0C344B', icon:'devicon-prisma-plain', mono:true, iconColor:'#fff' },
  { name:'SQL',         color:'#3E62A9', icon:'devicon-microsoftsqlserver-plain colored' },

  // Sistemas
  { name:'Linux (Ubuntu/Debian)', color:'#E95420', icon:'devicon-ubuntu-plain colored' },
  { name:'Windows Server',        color:'#00A4EF', icon:'devicon-windows8-original colored' },
  { name:'DNS',        color:'#6B7280', emoji:'🌐' },
  { name:'SSL',        color:'#0EA5E9', emoji:'🔒' },
  { name:'Firewalls',  color:'#EF4444', emoji:'🛡️' },
  { name:'cPanel',     color:'#FF6C2C', icon:'devicon-cpanel-plain colored' },

  // DevOps
  { name:'GitHub',            color:'#24292E', icon:'devicon-github-original', mono:true, iconColor:'#fff' },
  { name:'npm',               color:'#CB0000', icon:'devicon-npm-original colored' },
  { name:'Cloudflare',        color:'#F48120', icon:'devicon-cloudflare-plain colored' },
  { name:'AWS',               color:'#FF9900', icon:'devicon-amazonwebservices-original colored' },
  { name:'Google Analytics',  color:'#E37400', emoji:'📈' },

  // Otros
  { name:'Lua',                    color:'#2C2D72', icon:'devicon-lua-plain colored' },
  { name:'Python (bots)',          color:'#3776AB', icon:'devicon-python-plain colored' },
  { name:'Shopify',                color:'#95BF47', icon:'devicon-shopify-plain colored' },
  { name:'WordPress (WooCommerce)',color:'#21759B', icon:'devicon-wordpress-plain colored' },
  { name:'Glide Apps',             color:'#00C3A5', emoji:'🧩' },

  // Juegos
  { name:'FiveM (ESX, QBCore)',                 color:'#43B581', emoji:'🚗' },
  { name:'Minecraft (Spigot/Paper/Velocity)',   color:'#5C913B', emoji:'⛏️' },
]

// ---------- helpers ----------
const hexToRgb = (hex: string) => {
  const h = hex.replace('#', '')
  const n = parseInt(h, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}
const rgba = (hex: string, a: number) => {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r},${g},${b},${a})`
}
const textColorFor = (hex: string) => {
  const { r, g, b } = hexToRgb(hex)
  const L = (.2126 * (r / 255) ** 2.2 + .7152 * (g / 255) ** 2.2 + .0722 * (b / 255) ** 2.2)
  return L > 0.6 ? '#111' : '#fff'
}

// Divide en 5 capas para “pila”
const makeLayers = <T,>(arr: T[]) => {
  const L = 5
  const base = Math.floor(arr.length / L)
  const extra = arr.length % L
  const out: T[][] = []
  let i = 0
  Array.from({ length: L }, (_, k) => {
    const size = base + (k < extra ? 1 : 0)
    out.push(arr.slice(i, i + size))
    i += size
  })
  return out
}
const jitter = (i: number) => ({
  rot: (i % 2 ? -1 : 1) * (Math.random() * 10 - 5),
  x: (Math.random() * 10 - 5),
  y: (Math.random() * 6 - 3),
})

// ---------- timings (más lento + sin “trabas”) ----------
const ROW_DELAY  = 0.12   // delay por fila
const ITEM_DELAY = 0.07   // delay extra por item dentro de la fila
const FALL_DUR   = 1.2    // duración de la caída (lento y fluido)

export default function TechGrid() {
  const layers = makeLayers(items)
  const L = layers.length

  return (
    <div className="relative">
      <h3 className="h2 mb-6">Tecnologías</h3>

      <div className="relative select-none">
        {layers.map((row, li) => {
          // Primero cae la fila de abajo
          const bottomFirstIndex = L - 1 - li
          const baseDelay = bottomFirstIndex * ROW_DELAY

          return (
            <motion.div
              key={`row-${li}`}
              className="flex flex-wrap gap-3 mb-3"
              style={{
                zIndex: 20 - li,
                transform: `translateY(${li * 3}px) scale(${1 - li * 0.02})`,
              }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .25 }}
              transition={{ duration: .5, ease: 'easeOut', delay: baseDelay }}
            >
              {row.map((t, ci) => {
                const bg = rgba(t.color, .35)
                const bd = rgba(t.color, .55)
                const fg = textColorFor(t.color)
                const j  = jitter(li * 100 + ci)

                return (
                  <motion.span
                    key={`${t.name}-${ci}`}
                    className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 shadow-sm"
                    style={{
                      background: bg,
                      border: `1px solid ${bd}`,
                      color: fg,
                      transform: `translateZ(0) rotate(${j.rot}deg)`,
                      boxShadow: '0 14px 28px rgba(0,0,0,.08), 0 8px 10px rgba(0,0,0,.06)',
                      willChange: 'transform, opacity, filter',
                      backdropFilter: 'saturate(1.1)',
                    }}
                    initial={{ opacity: 0, y: -220, filter: 'blur(2px)' }}
                    whileInView={{ opacity: 1, y: j.y, x: j.x, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: .25 }}
                    transition={{
                      duration: FALL_DUR,
                      ease: [0.16, 1, 0.30, 1],
                      delay: baseDelay + ci * ITEM_DELAY,
                    }}
                  >
                    {/* circulito del icono */}
                    <span
                      className="inline-grid place-items-center rounded-full"
                      style={{
                        width: 26, height: 26,
                        background: rgba(t.color, .18),
                        border: '1px solid rgba(255,255,255,.75)',
                        boxShadow: '0 2px 6px rgba(0,0,0,.18)',
                        willChange: 'transform',
                      }}
                    >
                      {t.icon ? (
                        <i
                          className={t.icon}
                          style={{
                            fontSize: 16,
                            lineHeight: 0,
                            color: t.mono ? (t.iconColor || '#fff') : undefined
                          }}
                        />
                      ) : t.emoji ? (
                        <span style={{ fontSize: 15, lineHeight: 0 }}>{t.emoji}</span>
                      ) : null}
                    </span>

                    <span className="text-[13px] font-medium leading-none">{t.name}</span>
                  </motion.span>
                )
              })}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
