'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

type Project = {
  title: string
  description: string
  stack: string[]
  image?: string
  github?: string
  demo?: string
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: -60, rotate: -8, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 520,
      damping: 28,
      mass: 0.7
    }
  }
}

export default function ProjectsAnimated({ projects }: { projects: Project[] }) {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    // Espera a que acaben las animaciones de entrada y luego activa el desplazamiento
    const t = setTimeout(() => setScroll(true), 1400)
    return () => clearTimeout(t)
  }, [])

  // Duplicamos el arreglo para que el marquee sea continuo
  const loop = [...projects, ...projects]

  return (
    <div className="projects-viewport">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`projects-track ${scroll ? 'marquee' : ''}`}
      >
        {loop.map((p, i) => (
          <motion.div
            key={`${p.title}-${i}`}
            variants={item}
            style={{ minWidth: 'min(520px, 92vw)' }}  // ancho fijo por tarjeta para el carril
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
