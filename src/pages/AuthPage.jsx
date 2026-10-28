import { useState } from 'react'
import BackgroundEffects from '../components/layout/BackgroundEffects.jsx'
import AuthBadge from '../components/ui/AuthBadge.jsx'
import SignInForm from '../components/auth/SignInForm.jsx'
import SignUpForm from '../components/auth/SignUpForm.jsx'

export default function AuthPage() {
  const [activeForm, setActiveForm] = useState('signin')

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundEffects />
      <AuthBadge />
      <div className="absolute right-6 top-6 z-10 sm:right-14 sm:top-12">
        <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
          {activeForm === 'signin' ? 'SIGN IN' : 'SIGN UP'}
        </span>
      </div>
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        {activeForm === 'signin' ? (
          <SignInForm onSwitch={() => setActiveForm('signup')} />
        ) : (
          <SignUpForm onSwitch={() => setActiveForm('signin')} />
        )}
      </main>
    </div>
  )
}