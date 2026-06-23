export default function SectionLabel({ children }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
        {children}
      </p>
      <div className="h-px bg-accent w-full opacity-30" />
    </div>
  )
}
