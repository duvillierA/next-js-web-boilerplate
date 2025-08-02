import { cva, type VariantProps } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'
import * as React from 'react'

const spinnerVariants = cva('animate-spin', {
  variants: {
    size: {
      sm: 'size-2',
      md: 'size-4',
      lg: 'size-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const Spinner: React.FC<{ className?: string } & VariantProps<typeof spinnerVariants>> = ({
  className,
  size,
}) => {
  return (
    <LoaderCircle
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={spinnerVariants({ className, size })}
    />
  )
}

export { Spinner, spinnerVariants }
