import { config } from '@/config'
import { SessionOptions } from 'iron-session'

/**
 * Session configuration class for managing different types of sessions
 */
export class SessionConfig {
  private readonly sessionPassword: string
  private readonly isProduction: boolean

  constructor(sessionPassword: string) {
    this.sessionPassword = sessionPassword
    this.isProduction = process.env.NODE_ENV === 'production'

    // Validate session password in production
    if (this.isProduction) {
      this.validateSessionPassword()
    }
  }

  /**
   * Get base session options that are common to all session types
   */
  #baseSessionOptions(): SessionOptions {
    return {
      password: this.sessionPassword,
      cookieName: 'session',
      cookieOptions: {
        httpOnly: true,
        secure: this.isProduction,
        sameSite: 'lax' as const,
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      },
    }
  }

  /**
   * Get user session configuration for all routes
   */
  getUserSessionOptions(): SessionOptions {
    return {
      ...this.#baseSessionOptions(),
      cookieName: 'user-session',
      cookieOptions: {
        ...this.#baseSessionOptions().cookieOptions,
        path: '/',
      },
    }
  }

  /**
   * Get partner session configuration for /partner routes
   * @param id - Optional partner ID to include in cookie name and path
   */
  getPartnerSessionOptions(id: string): SessionOptions {
    return {
      ...this.#baseSessionOptions(),
      cookieName: `partner-session-${id}`,
      cookieOptions: {
        ...this.#baseSessionOptions().cookieOptions,
        path: `/partner/${id}`,
      },
    }
  }

  /**
   * Validate session password meets production requirements
   */
  private validateSessionPassword(): void {
    if (!this.sessionPassword || this.sessionPassword.length < 32) {
      throw new Error('Session password must be at least 32 characters long in production')
    }
  }
}

// Create default instance using config
const sessionConfig = new SessionConfig(config.SESSION_PASSWORD)

// Export convenience methods for backward compatibility
export const userSessionOptions = sessionConfig.getUserSessionOptions()
export const partnerSessionOptions = (id: string) => sessionConfig.getPartnerSessionOptions(id)
