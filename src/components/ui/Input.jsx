export default function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
}) {
  const errorId = error ? `${name}-error` : undefined

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[13px] font-medium text-text"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={`h-14 w-full rounded-input border bg-input-bg px-4 text-[15px] text-text placeholder:text-text-secondary/60 outline-none transition-colors focus:border-primary ${
          error ? 'border-error' : 'border-input-border'
        }`}
      />
      {error && (
        <p id={errorId} className="text-[12px] text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}