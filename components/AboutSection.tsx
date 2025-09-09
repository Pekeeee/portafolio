'use client'

import { motion } from 'framer-motion'

const ease: number[] = [0.16, 1, 0.3, 1]

const timeline = [
  {
    y: '13 años',
    t: 'Primer contacto con programación',
    d: 'Curiosidad total. Empecé a construir cosas pequeñas, scripts y páginas.'
  },
  {
    y: '14 años',
    t: 'Primeros proyectos freelance',
    d: 'Aprendí a trabajar con clientes, alcance y entregables claros.'
  },
  {
    y: 'Hoy',
    t: 'Full-Stack & FiveM',
    d: 'E-commerce, sistemas a medida y utilidades para servidores (HUDs & scripts).'
  },
]

const values = [
  { k: 'Código simple y legible', emoji: '✍️' },
  { k: 'UIs limpias y directas', emoji: '🎨' },
  { k: 'Performance y DX', emoji: '⚡' },
  { k: 'Integraciones bien diseñadas', emoji: '🔌' },
]

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container-max grid md:grid-cols-3 gap-6 items-start">
        {/* LEFT – About + mini timeline */}
        <motion.div
          className="md:col-span-2 card p-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
        >
          {/* borde glow sutil */}
          <div className="pointer-events-none absolute inset-0 rounded-xl"
               style={{
                 boxShadow: '0 0 0 1px rgba(0,222,255,.08), inset 0 0 80px rgba(0,222,255,.04)'
               }}
          />
          <h2 className="h2 mb-3">Sobre mí</h2>
          <p className="muted leading-relaxed">
            Empecé a programar a los 13 años y a los 14 ya hacía proyectos freelance. Me muevo bien entre
            frontend, backend e infraestructura. Me gusta resolver problemas reales con soluciones claras y
            mantenibles. Si no aporta, no entra al repo.
          </p>

          {/* Mini timeline */}
          <div className="mt-6 grid gap-4">
            {timeline.map((n, i) => (
              <motion.div
                key={n.t}
                className="grid grid-cols-[auto_1fr] gap-4"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
              >
                {/* marcador */}
                <div className="relative">
                  <span
                    className="block w-3.5 h-3.5 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                  {/* línea vertical */}
                  {i !== timeline.length - 1 && (
                    <span className="absolute left-1.5 top-3.5 w-[2px] h-8 rounded"
                          style={{ background: 'linear-gradient(var(--accent), transparent)' }} />
                  )}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] opacity-70">{n.y}</div>
                  <div className="font-semibold">{n.t}</div>
                  <div className="muted text-[13.5px]">{n.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT – Muro de valores (badges animados) */}
        <motion.aside
          className="card p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
        >
          <div className="muted text-sm mb-3">Lo que valoro</div>
          <div className="flex flex-wrap gap-2.5">
            {values.map((v, i) => (
              <motion.span
                key={v.k}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm border"
                style={{
                  borderColor: 'var(--line)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease, delay: 0.05 + i * 0.06 }}
                whileHover={{
                  y: -2,
                  boxShadow: '0 10px 26px rgba(0,222,255,.08)',
                  transition: { duration: 0.18 }
                }}
              >
                <span
                  className="grid place-items-center w-6 h-6 rounded-md text-[13px] font-semibold"
                  style={{
                    background: 'color-mix(in oklab, var(--accent) 18%, black)',
                    color: 'white'
                  }}
                >
                  {v.emoji}
                </span>
                <span>{v.k}</span>
              </motion.span>
            ))}
          </div>

          {/* tip opcional */}
          <div className="mt-4 text-xs opacity-60">
            * Paso el 80% del tiempo simplificando: requisitos claros, código claro, entregables claros.
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
