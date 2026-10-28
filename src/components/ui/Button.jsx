export default function Button({ children, type = 'button', disabled = false, ...props }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="flex h-14 w-full items-center justify-center rounded-input bg-primary text-[15px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    >
      {children}
    </button>
  )
}