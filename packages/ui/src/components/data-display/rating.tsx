import { Star, StarHalf } from 'lucide-react'
import * as React from 'react'

import { cn } from '@boilerplate/ui/utils'

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gold' | 'primary'
  value: number
  max?: number
}

function Rating({ className, variant, value, max = 5, ...props }: RatingProps) {
  return (
    <div
      role="img"
      aria-label={`Rating: ${value} out of ${max} stars`}
      {...props}
      className={cn('inline-flex items-center gap-1')}
    >
      {Array.from({ length: max }, (_, index) => {
        const isFilled = index < value
        const isHalf = index === Math.floor(value) && value % 1 !== 0
        const classNames = cn(
          'size-4',
          {
            'stroke-amber-200': variant === 'gold',
            'stroke-foreground': variant === 'default',
            'stroke-primary': variant === 'primary',
          },
          className,
        )
        return (
          <span key={index} className={cn('relative')}>
            <Star
              className={cn(classNames, {
                'fill-primary': variant === 'primary' && isFilled && !isHalf,
                'fill-foreground': variant === 'default' && isFilled && !isHalf,
                'fill-amber-200': variant === 'gold' && isFilled && !isHalf,
              })}
            />
            {isHalf && (
              <StarHalf
                className={cn(classNames, 'absolute top-0 left-0 size-full', {
                  'fill-amber-200': variant === 'gold',
                  'fill-foreground': variant === 'default',
                  'fill-primary': variant === 'primary',
                })}
              />
            )}
          </span>
        )
      })}
    </div>
  )
}

export { Rating }
export type { RatingProps }
