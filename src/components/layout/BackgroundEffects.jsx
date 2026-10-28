export default function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Glow amarelo — canto superior esquerdo */}
      <div className="absolute -left-[120px] -top-[130px] h-[520px] w-[520px] rounded-full bg-[#d4a017]/25 blur-[100px]" />
      {/* Glow azul — canto inferior direito (parcialmente fora) */}
      <div className="absolute -bottom-[200px] -right-[200px] h-[600px] w-[600px] rounded-full bg-[#1e40af]/45 blur-[120px]" />
    </div>
  )
}