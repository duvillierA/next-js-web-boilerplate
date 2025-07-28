import { SessionProvider } from '@/components/session/session-provider'
import { logoutPartnerAction } from '@/lib/session/actions'
import { getPartnerSession } from '@/lib/session/utils'
import { Badge } from '@boilerplate/ui/badge'
import { Button } from '@boilerplate/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@boilerplate/ui/card'
import { redirect } from 'next/navigation'

export default async function PartnerDashboardPage() {
  const session = await getPartnerSession()

  if (!session.isLoggedIn) {
    redirect('/partner/login')
  }

  return (
    <SessionProvider initialPartnerSession={session}>
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Partner Dashboard</h1>
                <p className="mt-1 text-sm text-gray-600">Welcome, {session.companyName}!</p>
              </div>
              <form action={logoutPartnerAction}>
                <Button
                  variant="outline"
                  type="submit"
                >
                  Sign Out
                </Button>
              </form>
            </div>
          </div>

          {/* Session Info */}
          <div className="px-4 py-6 sm:px-0">
            <Card>
              <CardHeader>
                <CardTitle>Partner Session Information</CardTitle>
                <CardDescription>Current partner session details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Partner ID</p>
                    <p className="text-sm text-gray-900">{session.partnerId}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-sm text-gray-900">{session.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Company Name</p>
                    <p className="text-sm text-gray-900">{session.companyName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Last Activity</p>
                    <p className="text-sm text-gray-900">
                      {session.lastActivity
                        ? new Date(session.lastActivity).toLocaleString()
                        : 'Never'}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-2 text-sm font-medium text-gray-500">Permissions</p>
                  <div className="flex flex-wrap gap-2">
                    {session.permissions.map((permission) => (
                      <Badge
                        key={permission}
                        variant="outline"
                      >
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partner-specific content */}
          <div className="px-4 py-6 sm:px-0">
            <Card>
              <CardHeader>
                <CardTitle>Partner Portal</CardTitle>
                <CardDescription>
                  This is a separate session from the main user session
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This partner session is completely separate from the main user session. You can be
                  logged in as both a user and a partner simultaneously, and each will have their
                  own session data and cookies.
                </p>

                <div className="mt-4 rounded-lg bg-blue-50 p-4">
                  <h3 className="font-medium text-blue-900">Session Separation</h3>
                  <ul className="mt-2 space-y-1 text-sm text-blue-800">
                    <li>• User session: cookie path `/` (all routes)</li>
                    <li>• Partner session: cookie path `/partner` (partner routes only)</li>
                    <li>• Different cookie names: `user-session` vs `partner-session`</li>
                    <li>• Independent session data and TTL</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SessionProvider>
  )
}
