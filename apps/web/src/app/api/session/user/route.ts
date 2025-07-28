import { getUserSession } from '@/lib/session/utils'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const session = await getUserSession()

    return NextResponse.json(session)
  } catch (error) {
    console.error('Error getting user session:', error)
    return NextResponse.json({ error: 'Failed to get session' }, { status: 500 })
  }
}
