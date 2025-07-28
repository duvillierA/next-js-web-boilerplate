'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { AddToCartSchema, PartnerLoginSchema, UpdateCartItemSchema, UserLoginSchema } from './types'
import {
  addToCart,
  clearCart,
  getPartnerSession,
  getUserSession,
  logoutPartner,
  logoutUser,
  removeFromCart,
  savePartnerSession,
  saveUserSession,
  updateCartItem,
} from './utils'

// User authentication actions
export async function loginUser(formData: FormData) {
  const rawData = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  // Validate input with Zod
  const result = UserLoginSchema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  const { email, password } = result.data

  try {
    // In a real app, you would validate credentials against your database
    // For demo purposes, we'll simulate a successful login
    const session = await getUserSession()

    // Simulate authentication logic
    if (email === 'admin@example.com' && password === 'password123') {
      session.isLoggedIn = true
      session.userId = 'admin-123'
      session.email = email
      session.name = 'Admin User'
      session.role = 'admin'
      session.lastActivity = new Date()

      await saveUserSession(session)

      revalidatePath('/')
      redirect('/dashboard')
    } else if (email === 'user@example.com' && password === 'password123') {
      session.isLoggedIn = true
      session.userId = 'user-456'
      session.email = email
      session.name = 'Regular User'
      session.role = 'user'
      session.lastActivity = new Date()

      await saveUserSession(session)

      revalidatePath('/')
      redirect('/dashboard')
    } else {
      return {
        success: false,
        errors: {
          email: ['Invalid email or password'],
        },
      }
    }
  } catch (error) {
    console.error('Login error:', error)
    return {
      success: false,
      errors: {
        email: ['An error occurred during login'],
      },
    }
  }
}

export async function loginPartner(formData: FormData) {
  const rawData = {
    email: formData.get('email'),
    password: formData.get('password'),
    companyCode: formData.get('companyCode'),
  }

  // Validate input with Zod
  const result = PartnerLoginSchema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  const { email, password, companyCode } = result.data

  try {
    // In a real app, you would validate credentials against your database
    // For demo purposes, we'll simulate a successful login
    const session = await getPartnerSession()

    // Simulate authentication logic
    if (
      email === 'partner@example.com' &&
      password === 'password123' &&
      companyCode === 'COMP123'
    ) {
      session.isLoggedIn = true
      session.partnerId = 'partner-789'
      session.email = email
      session.companyName = 'Example Company'
      session.permissions = ['read', 'write', 'admin']
      session.lastActivity = new Date()

      await savePartnerSession(session)

      revalidatePath('/partner')
      redirect('/partner/dashboard')
    } else {
      return {
        success: false,
        errors: {
          email: ['Invalid credentials or company code'],
        },
      }
    }
  } catch (error) {
    console.error('Partner login error:', error)
    return {
      success: false,
      errors: {
        email: ['An error occurred during login'],
      },
    }
  }
}

export async function logoutUserAction() {
  try {
    await logoutUser()
    revalidatePath('/')
    redirect('/')
  } catch (error) {
    console.error('Logout error:', error)
    redirect('/')
  }
}

export async function logoutPartnerAction() {
  try {
    await logoutPartner()
    revalidatePath('/partner')
    redirect('/partner')
  } catch (error) {
    console.error('Partner logout error:', error)
    redirect('/partner')
  }
}

// Cart actions
export async function addToCartAction(formData: FormData) {
  const rawData = {
    id: formData.get('id'),
    name: formData.get('name'),
    price: formData.get('price'),
    quantity: formData.get('quantity'),
    ttlHours: formData.get('ttlHours'),
  }

  // Validate input with Zod
  const result = AddToCartSchema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  try {
    const session = await addToCart(result.data)
    revalidatePath('/')

    return {
      success: true,
      cart: session.cart,
    }
  } catch (error) {
    console.error('Add to cart error:', error)
    return {
      success: false,
      errors: {
        id: ['Failed to add item to cart'],
      },
    }
  }
}

export async function updateCartItemAction(formData: FormData) {
  const rawData = {
    id: formData.get('id'),
    quantity: formData.get('quantity'),
  }

  // Validate input with Zod
  const result = UpdateCartItemSchema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  try {
    const session = await updateCartItem(result.data)
    revalidatePath('/')

    return {
      success: true,
      cart: session.cart,
    }
  } catch (error) {
    console.error('Update cart error:', error)
    return {
      success: false,
      errors: {
        id: ['Failed to update cart item'],
      },
    }
  }
}

export async function removeFromCartAction(itemId: string) {
  try {
    const session = await removeFromCart(itemId)
    revalidatePath('/')

    return {
      success: true,
      cart: session.cart,
    }
  } catch (error) {
    console.error('Remove from cart error:', error)
    return {
      success: false,
      errors: {
        id: ['Failed to remove item from cart'],
      },
    }
  }
}

export async function clearCartAction() {
  try {
    const session = await clearCart()
    revalidatePath('/')

    return {
      success: true,
      cart: session.cart,
    }
  } catch (error) {
    console.error('Clear cart error:', error)
    return {
      success: false,
      errors: {
        cart: ['Failed to clear cart'],
      },
    }
  }
}
