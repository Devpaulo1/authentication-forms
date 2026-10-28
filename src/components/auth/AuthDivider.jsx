export default function AuthDivider() {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px flex-1 bg-input-border" />
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-secondary">
        OR CONTINUE WITH
      </span>
      <span className="h-px flex-1 bg-input-border" />
    </div>
  )
}