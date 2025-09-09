export default function SectionTitle({ id, kicker, title }: { id: string; kicker: string; title: string }) {
  return (
    <div id={id} className="mb-10">
      <p className="kicker">{kicker}</p>
      <h2 className="h2 mt-2">{title}</h2>
    </div>
  )
}
