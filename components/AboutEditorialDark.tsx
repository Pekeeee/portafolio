// components/AboutEditorialDark.tsx
'use client'

export default function AboutEditorialDark() {
  return (
    <section className="bg-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        {/* Encabezado */}
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest text-neutral-400 uppercase">
              Alejandro Daniel González Acosta
            </p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
              Diseño sistemas claros. <span className="font-normal text-neutral-400">Sin ruido.</span>
            </h1>
          </div>
          {/* Monograma */}
          <div className="hidden shrink-0 sm:flex h-16 w-16 items-center justify-center rounded-md border border-neutral-800">
            <span className="text-sm font-medium tracking-widest">ADG</span>
          </div>
        </div>

        {/* Layout principal */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_2fr]">
          {/* Columna izquierda */}
          <aside className="space-y-8">
            <div className="rounded-lg border border-neutral-800 p-5">
              <h3 className="text-sm font-medium text-neutral-300">En qué me enfoco</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li>• E-commerce con pagos y envíos reales</li>
                <li>• Backoffice y flujos operativos</li>
                <li>• HUDs/útiles para servidores FiveM</li>
              </ul>
            </div>

            <div className="rounded-lg border border-neutral-800 p-5">
              <h3 className="text-sm font-medium text-neutral-300">Algunos números</h3>
              <dl className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-xs text-neutral-500">Experiencia</dt>
                  <dd className="mt-1 text-2xl font-semibold">8+ años</dd>
                </div>
                <div>
                  <dt className="text-xs text-neutral-500">Proyectos</dt>
                  <dd className="mt-1 text-2xl font-semibold">50+</dd>
                </div>
                <div>
                  <dt className="text-xs text-neutral-500">Stack</dt>
                  <dd className="mt-1 text-sm">Next.js · Prisma · MySQL</dd>
                </div>
                <div>
                  <dt className="text-xs text-neutral-500">Ubicación</dt>
                  <dd className="mt-1 text-sm">Irapuato, MX</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-lg border border-neutral-800 p-5">
              <h3 className="text-sm font-medium text-neutral-300">Disponibilidad</h3>
              <p className="mt-2 text-sm text-neutral-400">Proyecto / Part-time</p>
              <a
                href="mailto:dani.loco5@hotmail.com"
                className="mt-4 inline-flex items-center justify-center rounded-md border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-white"
              >
                Escribe un correo
              </a>
            </div>
          </aside>

          {/* Columna derecha */}
          <div className="space-y-10">
            <div className="max-w-none">
              <p className="text-lg leading-relaxed text-neutral-300">
                Empecé a programar a los 13 y a los 14 ya entregaba proyectos freelance.
                Trabajo de punta a punta: frontend, backend e infraestructura. Me obsesiona que el software sea
                <strong> legible</strong>, <strong> predecible</strong> y que resuelva problemas reales del negocio.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-neutral-300">Principios</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                  <li>• Primero el flujo del usuario</li>
                  <li>• Menos dependencias, más claridad</li>
                  <li>• Métricas sobre opiniones</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-300">Cómo trabajo</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                  <li>• Diseño la arquitectura y los límites del sistema</li>
                  <li>• Entrego en milestones con alcance claro</li>
                  <li>• Documentación y handoff listos para crecer</li>
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="mb-3 text-sm font-medium text-neutral-300">Trayectoria</h3>
              <ol className="relative border-l border-neutral-800 pl-6">
                <li className="mb-6">
                  <div className="absolute -left-2.5 top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-100" />
                  <p className="text-xs text-neutral-500">2016</p>
                  <p className="text-sm font-medium">Inicio en programación</p>
                  <p className="text-sm text-neutral-400">C# / Lua / web básica</p>
                </li>
                <li className="mb-6">
                  <div className="absolute -left-2.5 top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-100" />
                  <p className="text-xs text-neutral-500">2017–2022</p>
                  <p className="text-sm font-medium">Freelance & sistemas a medida</p>
                  <p className="text-sm text-neutral-400">PHP / Laravel / WordPress / Bots</p>
                </li>
                <li>
                  <div className="absolute -left-2.5 top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-100" />
                  <p className="text-xs text-neutral-500">Actualidad</p>
                  <p className="text-sm font-medium">Full-Stack con enfoque en e-commerce</p>
                  <p className="text-sm text-neutral-400">Next.js · Prisma · MySQL · Integraciones</p>
                </li>
              </ol>
            </div>

            {/* Stack chips */}
            <div>
              <h3 className="mb-3 text-sm font-medium text-neutral-300">Stack principal</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js','Prisma','MySQL','Node.js','Laravel','Tailwind'].map(s => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-md border border-neutral-800 px-2.5 py-1 text-xs text-neutral-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-md border border-neutral-800 px-4 py-2 text-sm font-medium hover:bg-neutral-800"
              >
                Hablemos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
