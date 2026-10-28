import { useState } from 'react'
import { signUpSchema } from '../../schemas/authSchemas.js'
import Input from '../ui/Input.jsx'
import Button from '../ui/Button.jsx'
import AuthDivider from './AuthDivider.jsx'
import SocialLogin from './SocialLogin.jsx'

export default function SignUpForm({ onSwitch }) {
  const [values, setValues] = useState({ fullName: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  function handleChange(field) {
    return (e) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
      setStatus(null)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const result = signUpSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0]
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message
      }
      setErrors(fieldErrors)
      setStatus(null)
      return
    }
    setErrors({})
    setStatus('success')
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full max-w-[480px] flex-col gap-[18px] rounded-card border border-card-border bg-card px-[30px] pb-[30px] pt-[34px] shadow-2xl"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-[28px] font-bold leading-tight text-primary">
          Create Account
        </h1>
        <p className="text-[14px] text-text-secondary">
          Join our community today
        </p>
      </div>

      <Input
        label="Full Name"
        name="fullName"
        type="text"
        value={values.fullName}
        onChange={handleChange('fullName')}
        placeholder="Your full name"
        autoComplete="name"
        error={errors.fullName}
      />

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
        autoComplete="new-password"
        error={errors.password}
      />

      <Button type="submit">Create Account</Button>

      {status === 'success' && (
        <p className="text-center text-[13px] text-primary" role="status">
          Demo: form validated successfully. No backend call was made.
        </p>
      )}

      <AuthDivider />
      <SocialLogin />

      <p className="text-center text-[13px] text-text-secondary">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="font-semibold text-primary hover:underline"
        >
          Sign In
        </button>
      </p>
    </form>
  )
}