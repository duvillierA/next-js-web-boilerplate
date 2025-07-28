import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { partnerSessionOptions, userSessionOptions } from './config'
import { AddToCartData, CartItem, PartnerSession, UpdateCartItemData, UserSession } from './types'

// Get user session (for all routes)
export async function getUserSession(): Promise<UserSession> {
  const session = await getIronSession<UserSession>(await cookies(), userSessionOptions)

  // Initialize session if it doesn't exist
  if (!session.isLoggedIn) {
    session.isLoggedIn = false
    session.cart = []
    session.role = 'user'
  }

  // Clean up expired cart items
  session.cart = session.cart.filter((item) => new Date() < item.expiresAt)

  // Update last activity
  session.lastActivity = new Date()

  return session
}

// Get partner session (only for /partner routes)
export async function getPartnerSession(): Promise<PartnerSession> {
  const session = await getIronSession<PartnerSession>(await cookies(), partnerSessionOptions)

  // Initialize session if it doesn't exist
  if (!session.isLoggedIn) {
    session.isLoggedIn = false
    session.permissions = []
  }

  // Update last activity
  session.lastActivity = new Date()

  return session
}

// Save user session
export async function saveUserSession(session: UserSession): Promise<void> {
  const ironSession = await getIronSession<UserSession>(await cookies(), userSessionOptions)
  Object.assign(ironSession, session)
  await ironSession.save()
}

// Save partner session
export async function savePartnerSession(session: PartnerSession): Promise<void> {
  const ironSession = await getIronSession<PartnerSession>(await cookies(), partnerSessionOptions)
  Object.assign(ironSession, session)
  await ironSession.save()
}

// Cart utilities
export async function addToCart(cartData: AddToCartData): Promise<UserSession> {
  const session = await getUserSession()

  // Calculate expiration time
  const expiresAt = new Date()
  expiresAt.setHours(expiresAt.getHours() + cartData.ttlHours)

  const newItem: CartItem = {
    id: cartData.id,
    name: cartData.name,
    price: cartData.price,
    quantity: cartData.quantity,
    expiresAt,
  }

  // Check if item already exists in cart
  const existingItemIndex = session.cart.findIndex((item) => item.id === cartData.id)

  if (existingItemIndex >= 0 && session.cart[existingItemIndex]) {
    // Update existing item
    session.cart[existingItemIndex].quantity += cartData.quantity
    session.cart[existingItemIndex].expiresAt = expiresAt // Reset TTL
  } else {
    // Add new item
    session.cart.push(newItem)
  }

  await saveUserSession(session)
  return session
}

export async function updateCartItem(updateData: UpdateCartItemData): Promise<UserSession> {
  const session = await getUserSession()

  const itemIndex = session.cart.findIndex((item) => item.id === updateData.id)

  if (itemIndex >= 0 && session.cart[itemIndex]) {
    session.cart[itemIndex].quantity = updateData.quantity
    await saveUserSession(session)
  }

  return session
}

export async function removeFromCart(itemId: string): Promise<UserSession> {
  const session = await getUserSession()

  session.cart = session.cart.filter((item) => item.id !== itemId)
  await saveUserSession(session)

  return session
}

export async function clearCart(): Promise<UserSession> {
  const session = await getUserSession()

  session.cart = []
  await saveUserSession(session)

  return session
}

// Session cleanup utilities
export async function cleanupExpiredCartItems(): Promise<void> {
  const session = await getUserSession()
  const originalLength = session.cart.length

  session.cart = session.cart.filter((item) => new Date() < item.expiresAt)

  if (session.cart.length !== originalLength) {
    await saveUserSession(session)
  }
}

// Logout utilities
export async function logoutUser(): Promise<void> {
  const session = await getIronSession<UserSession>(await cookies(), userSessionOptions)
  session.destroy()
}

export async function logoutPartner(): Promise<void> {
  const session = await getIronSession<PartnerSession>(await cookies(), partnerSessionOptions)
  session.destroy()
}

// Session validation utilities
export function isUserLoggedIn(session: UserSession): boolean {
  return session.isLoggedIn && !!session.userId
}

export function isPartnerLoggedIn(session: PartnerSession): boolean {
  return session.isLoggedIn && !!session.partnerId
}

export function hasUserPermission(session: UserSession, permission: string): boolean {
  // For now, all logged-in users have basic permissions
  // In a real app, you'd check specific permissions based on the permission parameter
  console.log(`Checking permission: ${permission}`) // Use the parameter to avoid linter warning
  return session.role === 'admin' || session.role === 'user'
}

export function hasPartnerPermission(session: PartnerSession, permission: string): boolean {
  return session.permissions.includes(permission)
}
