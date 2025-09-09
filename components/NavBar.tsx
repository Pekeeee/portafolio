'use client'
import { useEffect, useState } from 'react'

const items = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function NavBar() {
  const [shadow, setShadow] = useState(false)
  useEffect(()=>{
    const onScroll = () => setShadow(window.scrollY > 8)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`sticky top-0 z-50 bg-white ${shadow ? 'border-b border-border' : ''}`}>
      <nav className="container-max h-16 flex items-center justify-between">
        <a href="#inicio" className="font-semibold">Alejandro <span className="text-accent">AMAD</span></a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {items.map(i => (
            <a key={i.href} href={i.href} className="hover:text-accent transition-colors">{i.label}</a>
          ))}
        </div>
        <a href="#contacto" className="btn btn-primary hidden md:inline-flex">Contáctame</a>
      </nav>
    </header>
  )
}
