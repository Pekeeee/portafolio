'use client'
import { useState } from 'react'


export default function ContactForm() {
const [sent, setSent] = useState(false)
async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault()
const form = new FormData(e.currentTarget)
// Aquí podrías integrar EmailJS o tu API
await new Promise(r => setTimeout(r, 600))
setSent(true)
}
if (sent) return <div className="p-6 card text-center">¡Gracias! Te responderé muy pronto.</div>
return (
<form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input name="name" required placeholder="Nombre" className="card px-4 py-3 outline-none" />
<input name="email" type="email" required placeholder="Email" className="card px-4 py-3 outline-none" />
<input name="subject" placeholder="Asunto" className="card px-4 py-3 outline-none sm:col-span-2" />
<textarea name="message" required placeholder="Mensaje" rows={5} className="card px-4 py-3 outline-none sm:col-span-2" />
<button className="sm:col-span-2 px-5 py-3 rounded-xl bg-brand text-black font-semibold shadow-glow">Enviar</button>
</form>
)
}