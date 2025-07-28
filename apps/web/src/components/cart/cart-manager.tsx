'use client'

import { useUserSession } from '@/components/session/session-provider'
import { addToCartAction, clearCartAction, removeFromCartAction } from '@/lib/session/actions'
import { Alert, AlertDescription } from '@boilerplate/ui/alert'
import { Badge } from '@boilerplate/ui/badge'
import { Button } from '@boilerplate/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@boilerplate/ui/card'
import { Input } from '@boilerplate/ui/input'
import { useState } from 'react'

export function CartManager() {
  const { userSession, refreshUserSession } = useUserSession()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const handleAddToCart = async (formData: FormData) => {
    setIsLoading(true)
    setError('')

    try {
      const result = await addToCartAction(formData)

      if (result.success) {
        await refreshUserSession()
        // Reset form by clearing the form data
        const form = document.querySelector('form') as HTMLFormElement
        if (form) form.reset()
      } else {
        setError('Failed to add item to cart')
      }
    } catch (error) {
      console.error('Add to cart error:', error)
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemoveFromCart = async (itemId: string) => {
    setIsLoading(true)
    setError('')

    try {
      const result = await removeFromCartAction(itemId)

      if (result.success) {
        await refreshUserSession()
      } else {
        setError('Failed to remove item from cart')
      }
    } catch (error) {
      console.error('Remove from cart error:', error)
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClearCart = async () => {
    setIsLoading(true)
    setError('')

    try {
      const result = await clearCartAction()

      if (result.success) {
        await refreshUserSession()
      } else {
        setError('Failed to clear cart')
      }
    } catch (error) {
      console.error('Clear cart error:', error)
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const formatExpiry = (expiresAt: Date) => {
    const now = new Date()
    const diff = new Date(expiresAt).getTime() - now.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (hours > 0) {
      return `${hours}h ${minutes}m remaining`
    }
    return `${minutes}m remaining`
  }

  const cartItems = userSession?.cart || []
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Item to Cart</CardTitle>
          <CardDescription>
            Add items to your cart with automatic TTL (Time To Live)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={handleAddToCart}
            className="space-y-4"
          >
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                >
                  Item Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter item name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="price"
                  className="text-sm font-medium"
                >
                  Price
                </label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="quantity"
                  className="text-sm font-medium"
                >
                  Quantity
                </label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  defaultValue="1"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="ttlHours"
                  className="text-sm font-medium"
                >
                  TTL (Hours)
                </label>
                <Input
                  id="ttlHours"
                  name="ttlHours"
                  type="number"
                  min="1"
                  defaultValue="24"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Adding...' : 'Add to Cart'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Cart</CardTitle>
              <CardDescription>
                {totalItems} items • ${totalPrice.toFixed(2)} total
              </CardDescription>
            </div>
            {cartItems.length > 0 && (
              <Button
                variant="outline"
                onClick={handleClearCart}
                disabled={isLoading}
              >
                Clear Cart
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {cartItems.length === 0 ? (
            <p className="py-8 text-center text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{item.name}</h3>
                      <Badge variant="secondary">{formatExpiry(item.expiresAt)}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)} × {item.quantity} = $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveFromCart(item.id)}
                    disabled={isLoading}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
