import { Link } from '@/lib/i18n/navigation'
import { Button } from '@boilerplate/ui/button'
import { H1 } from '@boilerplate/ui/heading'
import { VStack } from '@boilerplate/ui/stack'
import { Text } from '@boilerplate/ui/text'
import { cn } from '@boilerplate/ui/utils'
import type { ComponentProps } from 'react'

export const Error = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <VStack justify="center" align="center" className={cn('h-full', className)}>
      {children}
    </VStack>
  )
}

export const ErrorTitle = ({ children }: { children: React.ReactNode }) => {
  return <H1>{children}</H1>
}

export const ErrorDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text variant="muted" as="p">
      {children}
    </Text>
  )
}

export const ErrorLink = (props: ComponentProps<typeof Link>) => {
  return (
    <Button asChild>
      <Link {...props} />
    </Button>
  )
}
