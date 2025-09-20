// app/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import SkillsSection from '../components/SkillsSection'
import AboutSplit from '../components/AboutSplit'
import DiscordPreview from '../components/DiscordPreview'

// -------------------------
// Tipos y datos
// -------------------------
type Project = {
  title: string
  description: string
  stack: string[]
  image?: string
  github?: string
  demo?: string
}

type Client = {
  name: string
  logo?: string // opcional (ruta a imagen). Si no hay, se muestra fallback con iniciales
  url?: string
}

const projects: Project[] = [
  {
    title: 'AMADTECH Store',
    description: 'Plataforma e-commerce con pagos, envíos y panel admin.',
    stack: ['Next.js', 'Node.js', 'Prisma', 'MySQL'],
    image: '/projects/amadtech-store.jpg',
    demo: 'https://amadtechstore.com',
  },
  {
    title: 'AMAD Notify Pro (FiveM)',
    description: 'Sistema de notificaciones personalizadas para FiveM.',
    stack: ['HTML', 'CSS', 'JS', 'Lua'],
    image: '/projects/amad-notify.jpg',
    demo: 'https://youtu.be/F6sC3HUFYKw?si=97LtxlFIUc2j74dP',
  },
  {
    title: 'Chop Chop',
    description:
      'Ecommerce para una empresa de premios para mascotas con pagos, envíos y panel admin.',
    stack: ['HTML', 'PHP', 'CSS', 'SQL', 'Bootstrap'],
    image: '/projects/chopchop.jpg',
    demo: 'https://drive.google.com/drive/folders/1G3d4YzkFkdi2sEsj6RBLlRvYPu4GUdGE?usp=sharing',
  },
  {
    title: 'Bistro Italiano',
    description: 'Restaurante de comida italiana, página informativa.',
    stack: ['HTML', 'CSS', 'JS', 'Tailwind'],
    image: '/projects/bistro.jpg',
    demo: 'https://drive.google.com/drive/folders/1ZcJmjBXdAjF5YLWIGSjVO3-yEpy7Ru1I?usp=sharing',
  },
  {
    title: 'Hazlo creativo',
    description: 'Página web para una agencia de marketing.',
    stack: ['HTML', 'CSS', 'JS', 'Tailwind'],
    image: '/projects/hazlo-creativo.jpg',
    demo: 'https://drive.google.com/drive/folders/1ogvVTgxQWVaZUut702bBnrDEX_U7Fcyi?usp=sharing',
  },
  {
    title: 'Power GYM',
    description:
      'Página para gym con pagos de suscripción y panel administrativo.',
    stack: ['HTML', 'CSS', 'JS', 'Tailwind', 'NodeJS', 'MySQL', 'NextJs', 'Prisma'],
    image: '/projects/power-gym.jpg',
    demo: 'https://drive.google.com/drive/folders/13tshGOAlDLRqVZcnHsAvH9Yizlz0aW5Q?usp=sharing',
  },
  {
    title: 'Tech Store',
    description: 'Ecommerce de electrónicos, con panel y ventas.',
    stack: ['Next.js', 'Node.js', 'Prisma', 'MySQL'],
    image: '/projects/tech-store.jpg',
    demo: 'https://drive.google.com/drive/folders/1_AzsMhCVGhZf6KF3ThVrp5rEFk9gmpjL?usp=sharing',
  },
  {
    title: 'Why Not?',
    description: 'Página web para antro con sistema de reservas.',
    stack: ['HTML', 'CSS', 'JS', 'PHP'],
    image: '/projects/whynot.jpg',
    demo: 'https://drive.google.com/drive/folders/1inaL-hUTU9JcLPV8txLtJ29FQb7xXetQ?usp=sharing',
  },
  {
    title: 'Sistema de inventario con código de barras',
    description: 'Sistema de gestión de inventario con escaneo de códigos de barras.',
    stack: ['Tailwind', 'NodeJS', 'MySQL', 'NextJs', 'Prisma'],
    image: '/projects/inventory-system.jpg',
    demo: 'https://drive.google.com/file/d/1CAg6gU7a0x3gtDZ7tuzuM7nGgP4oIFiA/view?usp=sharing',
  },
  {
    title: 'Sistema de control de gastos',
    description: 'Sistema de gestión de gastos con reportes y análisis.',
    stack: ['Tailwind', 'NodeJS', 'MySQL', 'NextJs', 'Prisma'],
    image: '/projects/contable.jpg',
    demo: 'https://drive.google.com/drive/folders/1D7ZkaR2P_X8ow41rv4DVNOZ44vRfh4Ld?usp=sharing',
  },
  {
    title: 'Portafolio Emily',
    description: 'Portafolio personal de Emily con proyectos y habilidades.',
    stack: ['Tailwind', 'HTML', 'CSS', 'JavaScript'],
    image: '/projects/portafolio.png',
    demo: 'https://pekeeee.github.io/emilyportafolio/index.html',
  },
  {
    title: 'Sparta Laxion',
    description: 'Pagina web para agencia de influencers',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/sparta.png',
    demo: 'https://spartalaxion.com/',
  },
]

const clients: Client[] = [
  { name: 'AMADTECH', url: 'https://amadtechstore.com', logo: '/clients/amadtech.png' },
  { name: 'Casseg Ingenieria', url: 'https://cassegingenieria.com/', logo: '/clients/casseg.png' },
  { name: 'CHOP CHOP', url: 'https://chopchop.com/', logo: '/clients/chopchop.png' },
  { name: 'SPARTA LAXION', url: 'https://spartalaxion.com/', logo: '/clients/sparta.png' },

]

// (si lo llegas a usar más adelante)
const tech = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript',
  'React', 'Next.js', 'Tailwind', 'Bootstrap',
  'Node.js', 'PHP', 'Laravel', '.NET',
  'MySQL', 'SQL', 'Prisma',
  'Lua', 'C#', 'Python', 'WordPress', 'Shopify'
]

// Animaciones base
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: -60, rotate: -8, scale: 0.96 },
  show: { opacity: 1, y: 0, rotate: 0, scale: 1, transition: { type: 'spring', stiffness: 520, damping: 28, mass: 0.7 } }
}

export default function HomePage() {
  // (legacy, por si lo ocupas)
  const [scroll, setScroll] = useState(false)
  useEffect(() => { const t = setTimeout(() => setScroll(true), 1400); return () => clearTimeout(t) }, [])

  // --- Formulario de contacto ---
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus(null)

    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: 'Completa todos los campos.' })
      return
    }

    try {
      setSending(true)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Error al enviar')

      setStatus({ ok: true, msg: '¡Mensaje enviado! Te responderé muy pronto.' })
      setForm({ name: '', email: '', message: '' })
    } catch (err: any) {
      setStatus({ ok: false, msg: err.message || 'No se pudo enviar. Intenta de nuevo.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <main>
      {/* ===== NAVBAR ===== */}
      <header className="sticky top-0 z-50 navbar border-b border-[var(--line)]">
        <nav className="container-max h-16 flex items-center justify-between">
          <Link href="#inicio" className="font-semibold">Alejandro <span style={{color:'var(--accent)'}}>AMAD</span></Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#tecnologias" className="navlink">Tecnologías</a>
            <a href="#clientes" className="navlink">Clientes</a>
            <a href="#proyectos" className="navlink">Proyectos</a>
            <a href="#skills" className="navlink">Skills</a>
            <a href="#sobre-mi" className="navlink">Sobre mí</a>
            <a href="#contacto" className="navlink">Contacto</a>
          </div>
          <a href="#contacto" className="btn btn-primary hidden md:inline-flex">Trabajemos</a>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section id="inicio" className="section hero-wrap hero-grid">
        <div className="hero-orb" />
        <div className="container-max grid gap-8 lg:grid-cols-[1.25fr_.9fr] lg:gap-12 items-start">
          {/* Izquierda */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: 'easeOut' }}>
            <p className="kicker">Desarrollador Full-Stack</p>
            <motion.h1
              className="mt-2 font-semibold tracking-tight leading-tight text-4xl sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .05 }}
            >
              Alejandro AMAD <br className="hidden sm:block" />
            </motion.h1>
            <motion.p
              className="mt-4 max-w-2xl leading-relaxed text-neutral-300 text-base sm:text-lg"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1 }}
            >
              Me especializo en <b>desarrollo web para empresas</b> de cualquier sector:
              <b> sistemas a medida</b>, <b>aplicaciones web</b> y <b>plataformas completas</b> que optimizan procesos y generan resultados reales.
              Trabajo con <em>arquitectura simple</em> y foco en <b>rendimiento</b> y <b>mantenibilidad</b>.
            </motion.p>
            <motion.div className="mt-6 flex flex-wrap gap-3" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .18 }}>
              <a href="#proyectos" className="btn btn-primary">Ver proyectos</a>
              <a href="#contacto" className="btn btn-ghost">Contacto</a>
            </motion.div>
            {/* Stats */}
            <motion.div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-5" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .12, delayChildren: .15 } } }}>
              {[{ k: '8+ años', v: 'Experiencia' }, { k: '50+', v: 'Proyectos' }, { k: 'End-to-end', v: 'Frontend · Backend · Infra' }].map(s => (
                <motion.div key={s.k} className="stat" variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: .6 } } }}>
                  <strong className="block leading-none text-2xl sm:text-3xl">{s.k}</strong>
                  <small className="block mt-1 text-xs sm:text-sm text-neutral-400">{s.v}</small>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Derecha */}
          <motion.aside
            className="card p-6 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 16, scale: .98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: .7, ease: 'easeOut', delay: .12 }}
          >
            <div className="text-sm muted">Stack principal</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {['Next.js','Node.js','Prisma','MySQL','TypeScript','Tailwind'].map((s, i) => (
                <motion.span key={s} className="pill text-sm" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: .25 + i * .05 }}>
                  {s}
                </motion.span>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <div>
                <div className="text-sm muted">Disponibilidad</div>
                <div className="font-medium">Proyecto / Part-time</div>
              </div>
              <div>
                <div className="text-sm muted">Ubicación</div>
                <div className="font-medium">Irapuato, Gto, México</div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <div className="hr container-max" />

      {/* ===== TECNOLOGÍAS ===== */}
      <section id="tecnologias" className="section">
        <div className="container-max">
          <h2 className="h2 mb-6">Tecnologías</h2>

          {(() => {
            type T = {
              name: string; tag: string; color: string;
              icon?: string; mono?: boolean; iconColor?: string; emoji?: string; logo?: string
            }

            const items: T[] = [
              // Frontend
              { name:'HTML', tag:'Frontend', color:'#E44D26', icon:'devicon-html5-plain colored' },
              { name:'CSS', tag:'Frontend', color:'#1572B6', icon:'devicon-css3-plain colored' },
              { name:'JavaScript', tag:'Frontend', color:'#F7DF1E', icon:'devicon-javascript-plain colored' },
              { name:'TypeScript', tag:'Frontend', color:'#3178C6', icon:'devicon-typescript-plain colored' },
              { name:'React', tag:'Frontend', color:'#61DAFB', icon:'devicon-react-original colored' },
              { name:'Next.js', tag:'Frontend', color:'#111827', icon:'devicon-nextjs-plain', mono:true, iconColor:'#fff' },
              { name:'TailwindCSS', tag:'Frontend', color:'#38BDF8', icon:'devicon-tailwindcss-plain colored' },
              { name:'Bootstrap', tag:'Frontend', color:'#7952B3', icon:'devicon-bootstrap-plain colored' },
              // Backend
              { name:'Node.js', tag:'Backend', color:'#539E43', icon:'devicon-nodejs-plain colored' },
              { name:'PHP', tag:'Backend', color:'#777BB4', icon:'devicon-php-plain colored' },
              { name:'Laravel', tag:'Backend', color:'#FF2D20', icon:'devicon-laravel-plain colored' },
              { name:'.NET', tag:'Backend', color:'#512BD4', icon:'devicon-dotnetcore-plain colored' },
              // DB
              { name:'MySQL', tag:'DB', color:'#4479A1', icon:'devicon-mysql-plain colored' },
              { name:'PostgreSQL', tag:'DB', color:'#336791', icon:'devicon-postgresql-plain colored' },
              { name:'Prisma ORM', tag:'DB', color:'#0C344B', icon:'devicon-prisma-plain', mono:true, iconColor:'#fff' },
              { name:'SQL', tag:'DB', color:'#3E62A9', icon:'devicon-microsoftsqlserver-plain colored' },
              // Sistemas
              { name:'Linux (Ubuntu/Debian)', tag:'Sistemas', color:'#E95420', icon:'devicon-ubuntu-plain colored' },
              { name:'Windows Server', tag:'Sistemas', color:'#00A4EF', icon:'devicon-windows8-original colored' },
              { name:'DNS', tag:'Sistemas', color:'#6B7280', emoji:'🌐' },
              { name:'SSL', tag:'Sistemas', color:'#0EA5E9', emoji:'🔒' },
              { name:'Firewalls', tag:'Sistemas', color:'#EF4444', emoji:'🛡️' },
              { name:'cPanel', tag:'Sistemas', color:'#FF6C2C', icon:'devicon-cpanel-plain colored' },
              // DevOps
              { name:'GitHub', tag:'DevOps', color:'#24292E', icon:'devicon-github-original', mono:true, iconColor:'#fff' },
              { name:'npm', tag:'DevOps', color:'#CB0000', icon:'devicon-npm-original colored' },
              { name:'Cloudflare', tag:'DevOps', color:'#F48120', icon:'devicon-cloudflare-plain colored' },
              { name:'AWS', tag:'DevOps', color:'#FF9900', icon:'devicon-amazonwebservices-original colored' },
              { name:'Google Analytics', tag:'DevOps', color:'#E37400', emoji:'📈' },
              // Otros
              { name:'Lua', tag:'Otros', color:'#2C2D72', icon:'devicon-lua-plain colored' },
              { name:'Python (bots)', tag:'Otros', color:'#3776AB', icon:'devicon-python-plain colored' },
              { name:'Shopify', tag:'Otros', color:'#95BF47', icon:'devicon-shopify-plain colored' },
              { name:'WordPress (WooCommerce)', tag:'Otros', color:'#21759B', icon:'devicon-wordpress-plain colored' },
              { name:'Glide Apps', tag:'Otros', color:'#00C3A5', emoji:'🧩' },
              // Juegos
              { name:'FiveM (ESX, QBCore)', tag:'Games', color:'#43B581', emoji:'🚗' },
              { name:'Minecraft (Spigot/Paper/Velocity)', tag:'Games', color:'#5C913B', emoji:'⛏️' },
            ]

            // utils
            const hexToRgb = (hex:string) => { const h=hex.replace('#',''); const n=parseInt(h,16); return {r:(n>>16)&255,g:(n>>8)&255,b:n&255} }
            const rgba       = (hex:string,a:number) => { const {r,g,b}=hexToRgb(hex); return `rgba(${r},${g},${b},${a})` }
            const textColor  = (hex:string) => { const {r,g,b}=hexToRgb(hex); const L=(.2126*(r/255)**2.2+.7152*(g/255)**2.2+.0722*(b/255)**2.2); return L>0.6?'#111':'#fff' }
            const makeLayers = <T,>(arr:T[]) => { const L=5, base=Math.floor(arr.length/L), extra=arr.length%L; const out:T[][]=[]; let i=0; Array.from({length:L},(_,k)=>{ const size=base+(k<extra?1:0); out.push(arr.slice(i,i+size)); i+=size }); return out }
            const jitter     = (i:number)=>({rot:(i%2?-1:1)*(Math.random()*10-5),x:(Math.random()*10-5),y:(Math.random()*6-3)})

            const layers = makeLayers(items)

            // Animación
            const START_DELAY = 0.0
            const STEP_DELAY  = 0.07
            const FALL_DUR    = 1.2
            const EASE        = [0.16, 1, 0.30, 1] as const

            const orderMap = new Map<string, number>()
            let idx = 0
            for (let r = layers.length - 1; r >= 0; r--) {
              for (let c = 0; c < layers[r].length; c++) orderMap.set(`${r}:${c}`, idx++)
            }

            // FIT-SCALE: ajuste automático sin scroll ni cortes
            const outerRef = useRef<HTMLDivElement>(null)
            const innerRef = useRef<HTMLDivElement>(null)
            const [scale, setScale] = useState(1)
            const [height, setHeight] = useState<number|undefined>(undefined)

            useEffect(() => {
              const recalc = () => {
                const outer = outerRef.current
                const inner = innerRef.current
                if (!outer || !inner) return
                const avail = outer.clientWidth
                const real  = inner.scrollWidth
                const s = real ? Math.min(1, avail / real) : 1
                setScale(s)
                const h = inner.getBoundingClientRect().height
                setHeight(h * s)
              }
              const ro = new ResizeObserver(recalc)
              if (outerRef.current) ro.observe(outerRef.current)
              if (innerRef.current) ro.observe(innerRef.current)
              recalc()
              return () => ro.disconnect()
            }, [])

            const pileSeen = useInView(innerRef, { once: true, amount: 0.25 })

            return (
              <div ref={outerRef} style={{ height }} className="relative">
                <div ref={innerRef} style={{ transform: `scale(${scale})`, transformOrigin: 'left top' }} className="select-none">
                  {layers.map((row, li) => (
                    <motion.div
                      key={`row-${li}`}
                      className="pile-row"
                      style={{ zIndex: 20 - li, transform: `translateY(${li * 2}px) scale(${1 - li * 0.02})`, willChange: 'transform', display: 'flex', gap: '1rem', padding: '.4rem .6rem' }}
                      initial={{ opacity: 0, y: -16 }} animate={pileSeen ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.35, ease: EASE }}
                    >
                      {row.map((t, ci) => {
                        const bg  = rgba(t.color,.30)
                        const bd  = rgba(t.color,.50)
                        const fg  = textColor(t.color)
                        const j   = jitter(li*100+ci)
                        const k   = orderMap.get(`${li}:${ci}`)!
                        const dly = START_DELAY + k * STEP_DELAY

                        return (
                          <motion.span
                            key={`${t.name}-${ci}`}
                            className="pebble"
                            style={{ background:bg, borderColor:bd, color:fg, transform:`rotate(${j.rot}deg)`, fontSize:'1.05rem', padding:'.7rem 1rem', borderRadius:16, display:'inline-flex', alignItems:'center', gap:'.55rem', lineHeight:1 }}
                            initial={{ opacity: 0, y: -140, x: j.x*2, rotate: j.rot }}
                            animate={pileSeen ? { opacity: 1, y: j.y, x: j.x, rotate: j.rot } : {}}
                            transition={{ duration: FALL_DUR, ease: EASE, delay: dly }}
                          >
                            <span className="pebble-icon" style={{ width:28, height:28, borderRadius:999, display:'grid', placeItems:'center', background: bg, border:'1px solid rgba(255,255,255,.75)', boxShadow:'0 2px 6px rgba(0,0,0,.18)' }}>
                              {t.icon ? <i className={t.icon} style={{ fontSize: 18, lineHeight: 0, color: t.mono ? (t.iconColor || '#fff') : undefined }} /> :
                               t.emoji ? <span style={{ fontSize: 16, lineHeight: 0 }}>{t.emoji}</span> :
                               t.logo  ? <img src={t.logo} alt={t.name} style={{ width: 18, height: 18 }} /> : null}
                            </span>
                            {t.name}
                          </motion.span>
                        )
                      })}
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      <div className="hr container-max" />

      {/* ===== CLIENTES ===== */}
      <section id="clientes" className="section">
        <div className="container-max">
          <h2 className="h2 mb-3">Clientes</h2>
          <p className="muted text-sm mb-6">
            He colaborado con empresas, equipos y emprendedores para lanzar productos y optimizar operaciones.
          </p>

          <style>{`
  .logo-grid{
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:12px;
  }
  @media (min-width:640px){ .logo-grid{ grid-template-columns:repeat(3,1fr); } }
  @media (min-width:768px){ .logo-grid{ grid-template-columns:repeat(4,1fr); } }
  @media (min-width:1024px){ .logo-grid{ grid-template-columns:repeat(6,1fr); } }

  .logo-card{
    display:flex; align-items:center; justify-content:center;
    height:72px; padding:12px;
    border:1px solid var(--line); border-radius:12px;
    background: rgba(255,255,255,.02);
    filter: grayscale(1) contrast(.92) brightness(.95);
    opacity:.95; transition: all .2s ease;
  }
  .logo-card:hover{
    filter:none; opacity:1;
    border-color: color-mix(in oklab, var(--accent) 28%, var(--line));
    box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 18%, transparent);
  }

  .logo-img{
    max-height: 48px;
    width:auto; object-fit:contain;
  }
  @media (min-width:640px){ .logo-img{ max-height:52px; } }
  @media (min-width:1024px){ .logo-img{ max-height:56px; } }

  .logo-fallback{
    display:inline-flex; align-items:center; justify-content:center;
    width:48px; height:48px; border-radius:999px;
    font-weight:700; letter-spacing:.5px;
    background: color-mix(in oklab, var(--accent) 20%, #0a0f14);
    color:#dff7ff; border:1px solid var(--line);
  }
`}</style>

          <div className="logo-grid">
            {clients.map((c) => {
              const initials = c.name.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase()

              const Content = c.logo ? (
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={240}
                  height={80}
                  className="logo-img opacity-90 grayscale contrast-125 transition group-hover:opacity-100 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 160px, 240px"
                />
              ) : (
                <span className="logo-fallback">{initials}</span>
              )

              return c.url ? (
                <a key={c.name} href={c.url} target="_blank" rel="noreferrer" className="logo-card group" aria-label={c.name}>
                  {Content}
                  <span className="sr-only">{c.name}</span>
                </a>
              ) : (
                <div key={c.name} className="logo-card group" aria-label={c.name}>
                  {Content}
                  <span className="sr-only">{c.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== DISCORD (vista previa) ===== */}
      <section id="discord" className="section">
        <div className="container-max">
          <h2 className="h2 mb-3">Referencias de otros clientes</h2>
          <p className="muted text-sm mb-6">Vista previa del canal de referencias de clientes.</p>
          <DiscordPreview server="1170068135374770286" channel="1225185055878545481" height={520} />
        </div>
      </section>

      <div className="hr container-max" />

      {/* ===== PROYECTOS (marquee infinito lento) ===== */}
      <section id="proyectos" className="section">
        <div className="container-max">
          <h2 className="h2 mb-8">Proyectos</h2>

          <style>{`
  .projects-viewport{ overflow:hidden; }
  .projects-track{ display:flex; gap:0; will-change:transform; }
  .projects-group{ display:flex; gap:1.25rem; }

  /* velocidad más LENTA (desktop & mobile) */
  :root{ --marquee-speed: 28s; }                                   /* desktop */
  @media (min-width:641px) and (max-width:1024px){ :root{ --marquee-speed: 22s; } }  /* tablet */
  @media (max-width:640px){ :root{ --marquee-speed: 28s; } }                            /* móvil */

  .projects-track.marquee{ animation: marquee-x var(--marquee-speed) linear infinite; }
  .projects-track.marquee:hover{ animation-play-state: paused; }

  @keyframes marquee-x{ to{ transform: translateX(calc(-1 * var(--shift, 0px))); } }

  @media (prefers-reduced-motion: reduce){ .projects-track.marquee{ animation:none; } }
`}</style>

          {(() => {
            const item = (dir: 'left' | 'right') => ({
              hidden: { opacity: 0, y: -200, x: dir === 'left' ? -340 : 340, rotate: dir === 'left' ? -18 : 18, scale: 0.86 },
              show:   { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1, transition: { duration: 1.0, ease: "easeOut" } }
            })

            const [marquee, setMarquee] = useState(false)
            const loop = [...projects] // se duplica en DOM

            const viewRef = useRef<HTMLDivElement>(null)
            const inView  = useInView(viewRef, { once: true, amount: 0.2 })

            // medir ancho real del primer grupo
            const groupRef = useRef<HTMLDivElement>(null)
            const [shift, setShift] = useState(0)
            useEffect(() => {
              const recalc = () => setShift(groupRef.current?.scrollWidth ?? 0)
              recalc()
              const ro = new ResizeObserver(recalc)
              if (groupRef.current) ro.observe(groupRef.current)
              return () => ro.disconnect()
            }, [])

            useEffect(() => {
              if (inView && shift > 0) {
                const t = setTimeout(() => setMarquee(true), 800)
                return () => clearTimeout(t)
              }
            }, [inView, shift])

            return (
              <div className="projects-viewport" ref={viewRef}>
                <motion.div
                  className={`projects-track ${marquee ? 'marquee' : ''}`}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  style={{ ['--shift' as any]: `${shift}px` }}
                >
                  {/* Grupo A */}
                  <div className="projects-group" ref={groupRef}>
                    {loop.map((p, i) => (
                      <motion.article
                        key={`A-${p.title}-${i}`}
                        variants={item(i % 2 === 0 ? 'left' : 'right')}
                        className="project overflow-hidden"
                        style={{ minWidth: 'min(520px, 92vw)' }}
                      >
                        <div className="relative aspect-[16/9] border-b border-[var(--line)] bg-[#0b0e12]">
                          {p.image && (
                            <Image
                              src={p.image}
                              alt={p.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 520px, 520px"
                              priority={i < 2}
                            />
                          )}
                        </div>

                        <div className="p-5 space-y-3">
                          <h3 className="font-semibold text-lg">{p.title}</h3>
                          <p className="text-sm muted leading-relaxed">{p.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
                          </div>
                          <div className="pt-1 flex gap-4 items-center">
                            {(p.demo || p.github) && (
                              <a href={p.demo || p.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                                Ver
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>

                  {/* Grupo B (clon) */}
                  <div className="projects-group" aria-hidden="true">
                    {loop.map((p, i) => (
                      <article
                        key={`B-${p.title}-${i}`}
                        className="project overflow-hidden"
                        style={{ minWidth: 'min(520px, 92vw)' }}
                      >
                        <div className="relative aspect-[16/9] border-b border-[var(--line)] bg-[#0b0e12]">
                          {p.image && (
                            <Image
                              src={p.image}
                              alt={p.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 520px, 520px"
                            />
                          )}
                        </div>
                        <div className="p-5 space-y-3">
                          <h3 className="font-semibold text-lg">{p.title}</h3>
                          <p className="text-sm muted leading-relaxed">{p.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
                          </div>
                          {(p.demo || p.github) && (
                            <div className="pt-1">
                              <a href={p.demo || p.github} target="_blank" rel="noreferrer" className="btn btn-primary">Ver</a>
                            </div>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </motion.div>
              </div>
            )
          })()}
        </div>
      </section>

      <div className="hr container-max" />

      {/* ===== SKILLS ===== */}
      <section id="skills" className="section">
        <div className="container-max">
          <h2 className="h2 mb-6">Skills</h2>
          <SkillsSection />
        </div>
      </section>

      <div className="hr container-max" />

      {/* ===== SOBRE MÍ ===== */}
      <section id="sobre-mi" className="bg-neutral-900 text-neutral-100">
        <AboutSplit />
      </section>

      <div className="hr container-max" />

     {/* ===== CONTACTO ===== */}
<section id="contacto" className="section">
  <div className="container-max grid md:grid-cols-2 gap-6">
    <div className="card p-6">
      <h3 className="text-xl font-semibold">Hablemos</h3>
      <p className="muted text-sm mt-2">
        Cuéntame qué necesitas y te propongo una solución con alcance, tiempos y entregables claros.
      </p>
      <div className="mt-6">
        <a href="mailto:dani.loco5@hotmail.com" className="underline underline-offset-4">
          dani.loco5@hotmail.com
        </a>
      </div>
    </div>

    <div className="card p-6">
      <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          className="border border-[var(--line)] rounded-lg px-3 py-2
                     bg-white text-neutral-900 placeholder:text-neutral-500
                     caret-neutral-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-[var(--line)] rounded-lg px-3 py-2
                     bg-white text-neutral-900 placeholder:text-neutral-500
                     caret-neutral-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Mensaje"
          rows={5}
          className="border border-[var(--line)] rounded-lg px-3 py-2
                     bg-white text-neutral-900 placeholder:text-neutral-500
                     caret-neutral-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button className="btn btn-primary disabled:opacity-60" disabled={sending}>
          {sending ? 'Enviando…' : 'Enviar'}
        </button>

        {status && (
          <p className={`text-sm ${status.ok ? 'text-emerald-400' : 'text-red-400'}`}>
            {status.msg}
          </p>
        )}
      </form>
    </div>
  </div>
</section>


      <footer className="py-12 border-t border-[var(--line)]">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm muted">© {new Date().getFullYear()} Alejandro AMAD</p>
          <div className="flex gap-4 text-sm">
            <a href="#tecnologias" className="navlink">Tecnologías</a>
            <a href="#clientes" className="navlink">Clientes</a>
            <a href="#proyectos" className="navlink">Proyectos</a>
            <a href="#skills" className="navlink">Skills</a>
            <a href="#contacto" className="navlink">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
