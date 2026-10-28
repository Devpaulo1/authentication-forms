import SocialButton from '../ui/SocialButton.jsx'

export default function SocialLogin() {
  return (
    <div className="flex items-center justify-center gap-[14px]">
      <SocialButton symbol="G" ariaLabel="Continue with Google" />
      <SocialButton symbol="A" ariaLabel="Continue with Apple" />
      <SocialButton symbol="f" ariaLabel="Continue with Facebook" />
    </div>
  )
}