import { useState } from 'react'
import { signInSchema } from '../../schemas/authSchemas.js'
import Input from '../ui/Input.jsx'
import Button from '../ui/Button.jsx'
import AuthDivider from './AuthDivider.jsx'
import SocialLogin from './SocialLogin.jsx'

export default function SignInForm({ onSwitch }) {
  const [values, setValues] = useState({ email: '', password: '' })
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'success' | null
  const [notice, setNotice] = useState(null)

  function handleChange(field) {
    return (e) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
      setStatus(null)
    }
  }

  
function handleSubmit(e) {
  e.preventDefault()

  const result = signInSchema.safeParse(values)

  if (!result.success) {
    const fieldErrors = {}

    for (const issue of result.error.issues) {
      const key = issue.path[0]
      if (key && !fieldErrors[key]) {
        fieldErrors[key] = issue.message
      }
    }

    setErrors(fieldErrors)
    setStatus(null)
    return
  }

  setErrors({})
  setStatus('success')

  window.location.href =
    'https://currency-exchange-navy-five.vercel.app/'
}

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full max-w-[480px] flex-col gap-[18px] rounded-card border border-card-border bg-card px-[30px] pb-[30px] pt-[34px] shadow-2xl"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-[28px] font-bold leading-tight text-primary">
          Welcome Back
        </h1>
        <p className="text-[14px] text-text-secondary">
          Sign in to continue your journey
        </p>
      </div>

      <Input
        label="Email Address"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange('email')}
        placeholder="you@example.com"
        autoComplete="email"
        error={errors.email}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange('password')}
        placeholder="••••••••"
        autoComplete="current-password"
        error={errors.password}
      />

      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2 text-[13px] text-text">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 accent-primary"
          />
          Remember me
        </label>
        <button
          type="button"
          onClick={() => setNotice('Password recovery is not available in this demo.')}
          className="text-[13px] font-medium text-primary hover:underline"
        >
          Forgot password?
        </button>
      </div>

      {notice && (
        <p className="text-[12px] text-text-secondary" role="status">
          {notice}
        </p>
      )}

      <Button type="submit">Sign In</Button>

      {status === 'success' && (
        <p className="text-center text-[13px] text-primary" role="status">
          Demo: form validated successfully. No backend call was made.
        </p>
      )}

      <AuthDivider />
      <SocialLogin />

      <p className="text-center text-[13px] text-text-secondary">
        Don&apos;t have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="font-semibold text-primary hover:underline"
        >
          Sign Up
        </button>
      </p>
    </form>
  )
}