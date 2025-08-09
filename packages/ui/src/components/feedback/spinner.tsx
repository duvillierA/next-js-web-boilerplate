import { Slot } from '@radix-ui/react-slot'
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

type BaseSpinnerProps =
  | {
      className?: string
      asChild?: false
      children?: never
    }
  | { className?: string; asChild: true; children: React.ReactNode }

type SpinnerProps = BaseSpinnerProps & VariantProps<typeof spinnerVariants>

const Spinner: React.FC<SpinnerProps> = ({ className, size, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : LoaderCircle
  return (
    <Comp
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={spinnerVariants({ className, size })}
      {...props}
    />
  )
}

export { Spinner, spinnerVariants }
