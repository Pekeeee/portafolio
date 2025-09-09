import { Github, Link as LinkIcon } from 'lucide-react'

type Props = {
  title: string
  description: string
  stack: string[]
  image?: string
  github?: string
  demo?: string
}

export default function ProjectCard({ title, description, stack, image, github, demo }: Props) {
  return (
    <article className="card overflow-hidden">
      <div
        className="aspect-[16/9] border-b border-border"
        style={{
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-subtle leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map(s => (
            <span key={s} className="text-xs border border-border px-2 py-1 rounded-md bg-white">{s}</span>
          ))}
        </div>
        <div className="pt-2 flex gap-4 text-sm">
          {github && (
            <a className="hover:text-accent transition-colors inline-flex items-center gap-1" href={github} target="_blank">
              <Github className="w-4 h-4" /> Código
            </a>
          )}
          {demo && (
            <a className="hover:text-accent transition-colors inline-flex items-center gap-1" href={demo} target="_blank">
              <LinkIcon className="w-4 h-4" /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
