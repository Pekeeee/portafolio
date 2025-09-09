'use client'
import { motion } from 'framer-motion'

type Skill = { name: string; level: number; note?: string }

export default function SkillsSection({ skills }: { skills?: Skill[] }) {
  const SKILLS: Skill[] =
    skills ?? [
      { name: 'Frontend', level: 4, note: 'React, Next.js, Tailwind, CSS, Bootstrap, JS, HTML, TypeScript' },
      { name: 'Backend', level: 5, note: 'Node.js, Prisma, REST, GraphQL, Express, Laravel, PHP, MySQL' },
      { name: 'Infraestructura', level: 4, note: 'Linux, Nginx, SSL, Git' },
    ]

  const Dots = ({ level }: { level: number }) => (
    <div className="flex gap-1" aria-label={`${level} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            'inline-block h-2.5 w-2.5 rounded-full ' +
            (i < level ? 'bg-neutral-300' : 'bg-neutral-600/40')
          }
        />
      ))}
    </div>
  )

  return (
    <ul className="space-y-6">
      {SKILLS.map((s) => (
        <li key={s.name} className="group">
          <div className="mb-1 flex items-center justify-between">
            <div className="text-sm font-medium">{s.name}</div>
            <Dots level={s.level} />
          </div>

          <div className="h-2 rounded-full bg-neutral-800">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(s.level / 5) * 100}%` }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="h-2 rounded-full bg-neutral-300"
            />
          </div>

          {s.note && (
            <p className="mt-1 text-xs text-neutral-400">{s.note}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
