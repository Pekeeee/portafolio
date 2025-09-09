export default function Badge({ children }: { children: React.ReactNode }) {
return (
<span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10">
{children}
</span>
)
}