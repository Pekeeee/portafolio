'use client'

export default function AboutSplit() {
  return (
    <section className="bg-[var(--bg)] text-[var(--ink)]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        {/* Encabezado */}
        <header className="mb-12">
          <p className="text-xs tracking-widest text-neutral-400 uppercase">
            Alejandro AMAD
          </p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
            Construyo software claro para problemas reales.
          </h1>
        </header>

        {/* Split layout */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1.9fr]">
          {/* Columna izquierda (sticky solo en desktop) */}
          <aside className="relative lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-auto">
            <figure className="overflow-hidden rounded-xl border border-[var(--line)] bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1400&auto=format&fit=crop"
                alt="Ilustración o foto profesional"
                className="h-[320px] sm:h-[380px] lg:h-[420px] w-full object-cover"
              />
            </figure>

            <div className="mt-4 rounded-lg border border-[var(--line)] p-4">
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-neutral-400">Ubicación</dt>
                  <dd className="mt-0.5">Irapuato, MX</dd>
                </div>
                <div>
                  <dt className="text-neutral-400">Disponibilidad</dt>
                  <dd className="mt-0.5">Proyecto / Part-time</dd>
                </div>
              </dl>
            </div>
          </aside>

          {/* Columna derecha */}
          <div className="space-y-12">
            {/* Descripción */}
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-neutral-300">
                Desde mis inicios en programación a los 13 años he trabajado en proyectos muy distintos:
                desde <strong>plataformas e-commerce</strong> hasta <strong>backoffice corporativos</strong> y
                <strong> sistemas para comunidades de juego</strong>.  
                Mi enfoque siempre ha sido el mismo: entender a fondo el flujo del usuario,
                simplificar lo complejo y entregar soluciones que duren en el tiempo.  
                Hoy colaboro con empresas y emprendedores creando software claro,
                con procesos definidos y resultados medibles.
              </p>
            </div>

            {/* Principios / Cómo trabajo */}
            <div className="grid gap-10 md:grid-cols-2">
              <section>
                <h2 className="text-sm font-medium text-neutral-300">Principios</h2>
                <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                  <li>• Primero el flujo del usuario</li>
                  <li>• Menos dependencias, más claridad</li>
                  <li>• Priorizar lo medible</li>
                </ul>
              </section>
              <section>
                <h2 className="text-sm font-medium text-neutral-300">Cómo trabajo</h2>
                <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                  <li>• Arquitectura y límites claros</li>
                  <li>• Entregas por hitos con alcance definido</li>
                  <li>• Documentación y handoff para escalar</li>
                </ul>
              </section>
            </div>

            {/* Servicios */}
            <section className="rounded-xl border border-[var(--line)] p-6">
              <h3 className="text-sm font-medium text-neutral-300">Servicios</h3>
              <ul className="mt-4 grid gap-3 text-sm text-neutral-300 md:grid-cols-2">
                <li>• Desarrollo de aplicaciones web a medida</li>
                <li>• Backoffice: auth, roles, reportes y flujos operativos</li>
                <li>• Integraciones con pagos, envíos y APIs de terceros</li>
                <li>• Optimización de rendimiento y SEO técnico</li>
                <li>• Arquitectura, despliegue y CI/CD</li>
                <li>• Mantenimiento evolutivo y soporte</li>
              </ul>
            </section>

            {/* Timeline */}
            <section>
              <h2 className="mb-3 text-sm font-medium text-neutral-300">Trayectoria</h2>
              <ol className="relative border-l border-[var(--line)] pl-6">
                <li className="mb-6">
                  <div className="absolute -left-2.5 top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-100" />
                  <p className="text-xs text-neutral-500">2017</p>
                  <p className="text-sm font-medium">Inicio en programación</p>
                  <p className="text-sm text-neutral-400">C# / Lua / web básica</p>
                </li>
                <li className="mb-6">
                  <div className="absolute -left-2.5 top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-100" />
                  <p className="text-xs text-neutral-500">2018–2022</p>
                  <p className="text-sm font-medium">Freelance & sistemas a medida</p>
                  <p className="text-sm text-neutral-400">PHP / Laravel / WordPress / Bots</p>
                </li>
                <li>
                  <div className="absolute -left-2.5 top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-100" />
                  <p className="text-xs text-neutral-500">Actualidad</p>
                  <p className="text-sm font-medium">Full-Stack especializado en desarrollo web</p>
                  <p className="text-sm text-neutral-400">Next.js · Node.js · Prisma · MySQL · TypeScript</p>
                </li>
              </ol>
            </section>

            {/* CTA final */}
            <div className="flex flex-wrap gap-3">
              <a href="#proyectos" className="inline-flex items-center justify-center rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white">
                Ver proyectos
              </a>
              <a href="#contacto" className="inline-flex items-center justify-center rounded-md border border-[var(--line)] px-4 py-2 text-sm font-medium hover:bg-neutral-800">
                Hablemos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
