'use server'

import { sleep } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@boilerplate/ui/card'
import { Skeleton } from '@boilerplate/ui/skeleton'

export const AsyncCard = async () => {
  await sleep(1000)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Async cards</CardTitle>
        <CardDescription>Async cards description</CardDescription>
      </CardHeader>
      <CardContent>Async cards content</CardContent>
    </Card>
  )
}

export const AsyncCardSkeleton = async ({ count = 1 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-4 w-full" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-4 w-full" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      ))}
    </>
  )
}
