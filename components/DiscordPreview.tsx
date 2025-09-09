'use client'
import React from 'react'

type Props = {
  server: string
  channel: string
  height?: number
}

export default function DiscordPreview({ server, channel, height = 520 }: Props) {
  const src = `https://e.widgetbot.io/channels/${server}/${channel}`

  return (
    <div className="rounded-xl border border-[var(--line)] overflow-hidden">
      <iframe
        src={src}
        width="100%"
        height={height}
        allow="clipboard-write; fullscreen"
        style={{ display: 'block' }}
      />
    </div>
  )
}
