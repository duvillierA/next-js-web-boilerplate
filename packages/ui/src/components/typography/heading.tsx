import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'

type HeadingLevel = `h${1 | 2 | 3 | 4 | 5 | 6}`

type BaseHeadingProps<T extends HeadingLevel> = React.ComponentProps<T> & {
  asChild?: boolean
}

type HeadingProps = BaseHeadingProps<HeadingLevel> & {
  as: HeadingLevel
}

const Heading = ({ asChild, as = 'h1', className, ...props }: HeadingProps) => {
  const Comp = asChild ? Slot : as
  return (
    <Comp
      className={cn('font-bold', className)}
      {...props}
    />
  )
}

const H1 = ({ className, ...props }: BaseHeadingProps<'h1'>) => {
  return (
    <Heading
      as="h1"
      className={cn('text-4xl', className)}
      {...props}
    />
  )
}

const H2 = ({ className, ...props }: BaseHeadingProps<'h2'>) => {
  return (
    <Heading
      as="h2"
      className={cn('text-3xl', className)}
      {...props}
    />
  )
}

const H3 = ({ className, ...props }: BaseHeadingProps<'h3'>) => {
  return (
    <Heading
      as="h3"
      className={cn('text-2xl', className)}
      {...props}
    />
  )
}

const H4 = ({ className, ...props }: BaseHeadingProps<'h4'>) => {
  return (
    <Heading
      as="h4"
      className={cn('text-xl', className)}
      {...props}
    />
  )
}

const H5 = ({ className, ...props }: BaseHeadingProps<'h5'>) => {
  return (
    <Heading
      as="h5"
      className={cn('text-lg', className)}
      {...props}
    />
  )
}

const H6 = ({ className, ...props }: BaseHeadingProps<'h6'>) => {
  return (
    <Heading
      as="h6"
      className={cn('text-base', className)}
      {...props}
    />
  )
}

export { H1, H2, H3, H4, H5, H6 }
