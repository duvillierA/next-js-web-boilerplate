import { z } from 'zod'

// Cart item schema with TTL
export const CartItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  expiresAt: z.date(), // TTL for cart items
})

export type CartItem = z.infer<typeof CartItemSchema>

// User session data schema
export const UserSessionSchema = z.object({
  isLoggedIn: z.boolean().default(false),
  userId: z.string().optional(),
  email: z.string().email().optional(),
  name: z.string().optional(),
  role: z.enum(['user', 'admin']).default('user'),
  cart: z.array(CartItemSchema).default([]),
  lastActivity: z.date().optional(),
})

export type UserSession = z.infer<typeof UserSessionSchema>

// Partner session data schema
export const PartnerSessionSchema = z.object({
  isLoggedIn: z.boolean().default(false),
  partnerId: z.string().optional(),
  email: z.string().email().optional(),
  companyName: z.string().optional(),
  permissions: z.array(z.string()).default([]),
  lastActivity: z.date().optional(),
})

export type PartnerSession = z.infer<typeof PartnerSessionSchema>

// Login form schemas
export const UserLoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export const PartnerLoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  companyCode: z.string().min(3, 'Company code must be at least 3 characters'),
})

export type UserLoginData = z.infer<typeof UserLoginSchema>
export type PartnerLoginData = z.infer<typeof PartnerLoginSchema>

// Cart operations schema
export const AddToCartSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive().default(1),
  ttlHours: z.number().int().positive().default(24), // TTL in hours
})

export const UpdateCartItemSchema = z.object({
  id: z.string(),
  quantity: z.number().int().positive(),
})

export type AddToCartData = z.infer<typeof AddToCartSchema>
export type UpdateCartItemData = z.infer<typeof UpdateCartItemSchema>
