export default function SocialButton({ symbol, ariaLabel, onClick }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="flex h-14 w-14 items-center justify-center rounded-social border border-input-border bg-input-bg text-[18px] font-semibold text-primary transition-colors hover:border-primary/60 focus:border-primary"
    >
      {symbol}
    </button>
  )
}