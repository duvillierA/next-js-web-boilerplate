import * as React from 'react'

import { cn } from '@boilerplate/ui/utils'

type CardProps = React.ComponentProps<'div'> & {
  interactive?: boolean
  selected?: boolean
  disabled?: boolean
  variant?: 'surface' | 'classic'
}

function Card({
  className,
  interactive,
  selected,
  disabled,
  variant = 'classic',
  ...props
}: CardProps) {
  return (
    <div
      data-slot="card"
      role={interactive ? 'button' : undefined}
      aria-pressed={interactive ? !!selected : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-disabled={disabled}
      className={cn(
        'flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground',
        {
          'shadow-sm': variant === 'classic',
          'transition-colors': interactive,
          'border-primary': selected,
          'cursor-not-allowed': disabled,
          'cursor-pointer hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none':
            interactive && !disabled,
        },
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
