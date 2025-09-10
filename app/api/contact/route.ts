// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const escapeHTML = (s = '') =>
  s.replace(/[&<>"']/g, (m) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', "'":'&#39;' }[m] as string))

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos.' }, { status: 400 })
    }

    const to = process.env.MAIL_TO
    const from = process.env.MAIL_FROM || 'Alejandro AMAD <onboarding@resend.dev>'

    if (!process.env.RESEND_API_KEY || !to) {
      return NextResponse.json({ error: 'Falta RESEND_API_KEY o MAIL_TO.' }, { status: 500 })
    }

    const html = `
      <h2>Nuevo mensaje desde el portafolio</h2>
      <p><b>Nombre:</b> ${escapeHTML(name)}</p>
      <p><b>Email:</b> ${escapeHTML(email)}</p>
      <p><b>Mensaje:</b></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${escapeHTML(message)}</pre>
    `

    const { error } = await resend.emails.send({
      from,
      to,                    // puede ser string o string[]
      subject: `Portafolio | ${name}`,
      html,
      reply_to: email,       // para que puedas responder directo
    })

    if (error) {
      console.error('Resend error:', error)
      // intenta extraer un mensaje legible
      // @ts-ignore
      const msg = error?.message || JSON.stringify(error)
      return NextResponse.json({ error: msg }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
