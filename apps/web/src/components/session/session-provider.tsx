'use client'

import { PartnerSession, UserSession } from '@/lib/session/types'
import { createContext, useContext, useEffect, useState } from 'react'

interface SessionContextType {
  userSession: UserSession | null
  partnerSession: PartnerSession | null
  isLoading: boolean
  refreshUserSession: () => Promise<void>
  refreshPartnerSession: () => Promise<void>
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export function SessionProvider({
  children,
  initialUserSession,
  initialPartnerSession,
}: {
  children: React.ReactNode
  initialUserSession?: UserSession
  initialPartnerSession?: PartnerSession
}) {
  const [userSession, setUserSession] = useState<UserSession | null>(initialUserSession || null)
  const [partnerSession, setPartnerSession] = useState<PartnerSession | null>(
    initialPartnerSession || null,
  )
  const [isLoading, setIsLoading] = useState(false)

  const refreshUserSession = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/session/user')
      if (response.ok) {
        const session = await response.json()
        setUserSession(session)
      }
    } catch (error) {
      console.error('Failed to refresh user session:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const refreshPartnerSession = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/session/partner')
      if (response.ok) {
        const session = await response.json()
        setPartnerSession(session)
      }
    } catch (error) {
      console.error('Failed to refresh partner session:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Refresh sessions on mount
    refreshUserSession()
    refreshPartnerSession()
  }, [])

  return (
    <SessionContext.Provider
      value={{
        userSession,
        partnerSession,
        isLoading,
        refreshUserSession,
        refreshPartnerSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider')
  }
  return context
}

export function useUserSession() {
  const { userSession, isLoading, refreshUserSession } = useSession()
  return { userSession, isLoading, refreshUserSession }
}

export function usePartnerSession() {
  const { partnerSession, isLoading, refreshPartnerSession } = useSession()
  return { partnerSession, isLoading, refreshPartnerSession }
}
