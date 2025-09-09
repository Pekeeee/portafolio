'use client'

import Image from 'next/image'

type AvatarProps = {
  name: string
  src?: string
}

export default function Avatar({ name, src }: AvatarProps) {
  // Fallback: iniciales (ej: "Alejandro Daniel" → "AD")
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="relative flex flex-col items-center gap-3">
      <div className="relative w-36 h-36 rounded-full flex items-center justify-center overflow-hidden avatar-ring">
        {src ? (
          <Image
            src={src}
            alt={name}
            fill
            sizes="144px"
            className="object-cover rounded-full"
            priority
          />
        ) : (
          <span className="text-3xl font-bold">{initials}</span>
        )}
      </div>
      <div className="text-sm opacity-70">Full-Stack • Irapuato, MX</div>
      <div className="flex flex-wrap justify-center gap-2">
        {['Next.js', 'Prisma', 'MySQL', 'Laravel'].map(s => (
          <span key={s} className="pill">{s}</span>
        ))}
      </div>
    </div>
  )
}
