import { CartManager } from '@/components/cart/cart-manager'
import { SessionProvider } from '@/components/session/session-provider'
import { logoutUserAction } from '@/lib/session/actions'
import { getUserSession } from '@/lib/session/utils'
import { Badge } from '@boilerplate/ui/badge'
import { Button } from '@boilerplate/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@boilerplate/ui/card'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getUserSession()

  if (!session.isLoggedIn) {
    redirect('/login')
  }

  return (
    <SessionProvider initialUserSession={session}>
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-1 text-sm text-gray-600">Welcome back, {session.name}!</p>
              </div>
              <form action={logoutUserAction}>
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
                <CardTitle>Session Information</CardTitle>
                <CardDescription>Current user session details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">User ID</p>
                    <p className="text-sm text-gray-900">{session.userId}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-sm text-gray-900">{session.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Role</p>
                    <Badge variant={session.role === 'admin' ? 'default' : 'secondary'}>
                      {session.role}
                    </Badge>
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
              </CardContent>
            </Card>
          </div>

          {/* Cart Manager */}
          <div className="px-4 py-6 sm:px-0">
            <CartManager />
          </div>
        </div>
      </div>
    </SessionProvider>
  )
}
