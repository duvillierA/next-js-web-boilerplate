import { UserLoginForm } from '@/components/auth/user-login-form'
import { getUserSession } from '@/lib/session/utils'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  // Check if user is already logged in
  const session = await getUserSession()

  if (session.isLoggedIn) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Use the demo credentials below to test the session management
          </p>
        </div>

        <UserLoginForm />
      </div>
    </div>
  )
}
