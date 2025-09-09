// components/AboutCover.tsx
'use client'

export default function AboutCover() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-900 text-neutral-100">
      {/* Fondo editorial con grid sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.035),transparent_45%)]"
      />
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        {/* Cabecera tipo cover */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Software tan claro
            <br className="hidden md:block" />
            <span className="block font-normal text-neutral-400">que explica el negocio.</span>
          </h1>

        {/* Sub-nav lateral (desktop) */}
          <nav className="hidden shrink-0 md:block">
            <ul className="space-y-2 text-sm">
              <li><a href="#focus" className="text-neutral-300 hover:text-white">En qué me enfoco</a></li>
              <li><a href="#principios" className="text-neutral-300 hover:text-white">Principios</a></li>
              <li><a href="#metricas" className="text-neutral-300 hover:text-white">Métricas</a></li>
              <li><a href="#trayectoria" className="text-neutral-300 hover:text-white">Trayectoria</a></li>
            </ul>
          </nav>
        </div>

        {/* Grid de contenido denso */}
        <div className="grid gap-10 md:grid-cols-2">
          <section id="focus" className="rounded-xl border border-neutral-800 p-6">
            <h2 className="text-sm font-medium text-neutral-300">En qué me enfoco</h2>
            <p className="mt-3 text-neutral-300">
              E-commerce con pagos y envíos reales, backoffice, reporting y utilidades para servidores (FiveM).
              Diseño sistemas con límites claros, para que escalen sin fricción.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['E-commerce','Backoffice','Integraciones','FiveM'].map(tag => (
                <span key={tag} className="rounded-md border border-neutral-800 px-2.5 py-1 text-xs text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section id="principios" className="rounded-xl border border-neutral-800 p-6">
            <h2 className="text-sm font-medium text-neutral-300">Principios</h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>• Flujo primero, UI después</li>
              <li>• Mínimas dependencias para máximo control</li>
              <li>• Métricas para decidir, no opiniones</li>
            </ul>
          </section>

          <section id="metricas" className="rounded-xl border border-neutral-800 p-6">
            <h2 className="text-sm font-medium text-neutral-300">Métricas</h2>
            <dl className="mt-4 grid grid-cols-2 gap-6">
              <div>
                <dt className="text-xs text-neutral-500">Experiencia</dt>
                <dd className="mt-1 text-3xl font-semibold">8+ años</dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-500">Proyectos</dt>
                <dd className="mt-1 text-3xl font-semibold">50+</dd>
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
          </section>

          <section id="trayectoria" className="rounded-xl border border-neutral-800 p-6">
            <h2 className="text-sm font-medium text-neutral-300">Trayectoria</h2>
            <ol className="mt-3 relative border-l border-neutral-800 pl-6">
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
                <p className="text-sm font-medium">Full-Stack con foco en e-commerce</p>
                <p className="text-sm text-neutral-400">Next.js · Prisma · MySQL · Integraciones</p>
              </li>
            </ol>
          </section>
        </div>

        {/* CTA inferior */}
        <div className="mt-12 flex flex-wrap gap-3">
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
    </section>
  )
}
