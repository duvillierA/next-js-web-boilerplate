'use client'

import { loginPartner } from '@/lib/session/actions'
import { Alert, AlertDescription } from '@boilerplate/ui/alert'
import { Button } from '@boilerplate/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@boilerplate/ui/card'
import { Input } from '@boilerplate/ui/input'
import { useState } from 'react'

interface PartnerLoginFormProps {
  onSuccess?: () => void
}

export function PartnerLoginForm({ onSuccess }: PartnerLoginFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [generalError, setGeneralError] = useState<string>('')

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    setErrors({})
    setGeneralError('')

    try {
      const result = await loginPartner(formData)

      if (result.success) {
        onSuccess?.()
      } else {
        setErrors(result.errors || {})
        if (result.errors?.email) {
          setGeneralError('Login failed. Please check your credentials.')
        }
      }
    } catch (error) {
      console.error('Partner login error:', error)
      setGeneralError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Partner Login</CardTitle>
        <CardDescription>Sign in to your partner account</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action={handleSubmit}
          className="space-y-4"
        >
          {generalError && (
            <Alert variant="destructive">
              <AlertDescription>{generalError}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email[0]}</p>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className={errors.password ? 'border-red-500' : ''}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password[0]}</p>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="companyCode"
              className="text-sm font-medium"
            >
              Company Code
            </label>
            <Input
              id="companyCode"
              name="companyCode"
              type="text"
              placeholder="Enter your company code"
              required
              className={errors.companyCode ? 'border-red-500' : ''}
            />
            {errors.companyCode && <p className="text-sm text-red-500">{errors.companyCode[0]}</p>}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          <p>Demo credentials:</p>
          <p>Partner: partner@example.com / password123 / COMP123</p>
        </div>
      </CardContent>
    </Card>
  )
}
