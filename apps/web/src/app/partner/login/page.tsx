import { PartnerLoginForm } from '@/components/auth/partner-login-form'
import { getPartnerSession } from '@/lib/session/utils'
import { redirect } from 'next/navigation'

export default async function PartnerLoginPage() {
  // Check if partner is already logged in
  const session = await getPartnerSession()

  if (session.isLoggedIn) {
    redirect('/partner/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Partner Portal Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access your partner dashboard
          </p>
        </div>

        <PartnerLoginForm />
      </div>
    </div>
  )
}
