# Iron Session Auth Management for Next.js

This implementation provides a comprehensive session management system using Iron Session for Next.js App Router with the following features:

## Features

✅ **App Router Compliant** - Uses Next.js 15 App Router patterns  
✅ **Server Actions with Zod Validation** - Type-safe form validation  
✅ **Cart Items with TTL** - Automatic expiration of cart items  
✅ **Dual Session Management** - Separate sessions for users and partners  
✅ **Path-based Session Separation** - Different cookie paths for different areas  

## Architecture

### Session Types

1. **User Session** (`/` path)
   - Cookie name: `user-session`
   - Path: `/` (available on all routes)
   - Contains: user data, cart items, role, permissions

2. **Partner Session** (`/partner` path)
   - Cookie name: `partner-session`
   - Path: `/partner` (only available on partner routes)
   - Contains: partner data, company info, permissions

### File Structure

```
src/lib/session/
├── types.ts          # Zod schemas and TypeScript types
├── config.ts         # Iron Session configuration
├── utils.ts          # Session utility functions
├── actions.ts        # Server actions for auth
└── README.md         # This documentation

src/components/
├── session/
│   └── session-provider.tsx  # React context for client-side access
├── auth/
│   ├── user-login-form.tsx   # User login component
│   └── partner-login-form.tsx # Partner login component
└── cart/
    └── cart-manager.tsx      # Cart management component

src/app/
├── api/session/
│   ├── user/route.ts         # User session API
│   └── partner/route.ts      # Partner session API
├── login/page.tsx            # User login page
├── dashboard/page.tsx        # User dashboard
├── partner/
│   ├── login/page.tsx        # Partner login page
│   └── dashboard/page.tsx    # Partner dashboard
```

## Usage

### 1. Server-Side Session Access

```typescript
import { getUserSession, getPartnerSession } from '@/lib/session/utils'

// In a Server Component or Server Action
const userSession = await getUserSession()
const partnerSession = await getPartnerSession()
```

### 2. Client-Side Session Access

```typescript
import { useUserSession, usePartnerSession } from '@/components/session/session-provider'

function MyComponent() {
  const { userSession, refreshUserSession } = useUserSession()
  const { partnerSession, refreshPartnerSession } = usePartnerSession()
  
  // Access session data
  console.log(userSession?.cart)
  console.log(partnerSession?.permissions)
}
```

### 3. Authentication with Server Actions

```typescript
import { loginUser, loginPartner } from '@/lib/session/actions'

// In a form action
const result = await loginUser(formData)
if (result.success) {
  // Redirect or update UI
} else {
  // Handle validation errors
  console.log(result.errors)
}
```

### 4. Cart Management

```typescript
import { addToCartAction, removeFromCartAction } from '@/lib/session/actions'

// Add item with TTL
const result = await addToCartAction(formData)

// Remove item
const result = await removeFromCartAction(itemId)
```

## Configuration

### Environment Variables

```bash
# Required for production (32+ characters)
SESSION_PASSWORD=your_very_long_and_secure_password_here
SESSION_COOKIE_SECRET=another_very_long_and_secure_secret_here
```

### Session Options

```typescript
// User session (all routes)
{
  cookieName: 'user-session',
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 days
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax'
}

// Partner session (partner routes only)
{
  cookieName: 'partner-session',
  path: '/partner',
  maxAge: 60 * 60 * 24 * 7, // 7 days
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax'
}
```

## Cart TTL System

Cart items automatically expire based on their TTL (Time To Live):

```typescript
// Add item with 24-hour TTL
const cartData = {
  id: 'product-123',
  name: 'Product Name',
  price: 29.99,
  quantity: 1,
  ttlHours: 24 // Expires in 24 hours
}
```

- Items are automatically cleaned up when session is accessed
- TTL is reset when item is updated
- Expired items are filtered out automatically

## Demo Credentials

### User Login
- **Admin**: `admin@example.com` / `password123`
- **User**: `user@example.com` / `password123`

### Partner Login
- **Partner**: `partner@example.com` / `password123` / `COMP123`

## Security Features

1. **HttpOnly Cookies** - Prevents XSS attacks
2. **Secure Cookies** - HTTPS only in production
3. **SameSite Protection** - CSRF protection
4. **Zod Validation** - Type-safe input validation
5. **Session Expiration** - Automatic cleanup
6. **Path Separation** - Isolated session scopes

## Best Practices

1. **Always validate input** with Zod schemas
2. **Use server actions** for mutations
3. **Handle errors gracefully** with proper error messages
4. **Clean up expired data** regularly
5. **Use appropriate session scopes** for different user types
6. **Implement proper logout** to destroy sessions

## Testing

The system includes demo pages for testing:

- `/login` - User authentication
- `/dashboard` - User session management
- `/partner/login` - Partner authentication  
- `/partner/dashboard` - Partner session management

## Context7 Integration

This implementation uses Context7 documentation for:
- **Iron Session** - Secure, stateless, cookie-based sessions
- **Zod** - TypeScript-first schema validation

The system leverages the latest best practices from both libraries to provide a robust, type-safe session management solution. 