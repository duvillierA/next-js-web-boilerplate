import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'

type HeadingLevel = `h${1 | 2 | 3 | 4 | 5 | 6}`

type BaseHeadingProps<T extends HeadingLevel> = React.ComponentProps<T> & {
  asChild?: boolean
}

type HeadingProps = BaseHeadingProps<HeadingLevel> & {
  as?: HeadingLevel
}

const Heading = ({ asChild, as = 'h1', className, ...props }: HeadingProps) => {
  const Comp = asChild ? Slot : as
  return <Comp className={cn('font-bold', className)} {...props} />
}

const H1 = ({ className, as = 'h1', ...props }: HeadingProps) => {
  return <Heading as={as} className={cn('text-4xl', className)} {...props} />
}

const H2 = ({ className, as = 'h2', ...props }: HeadingProps) => {
  return <Heading as={as} className={cn('text-3xl', className)} {...props} />
}

const H3 = ({ className, as = 'h3', ...props }: HeadingProps) => {
  return <Heading as={as} className={cn('text-2xl', className)} {...props} />
}

const H4 = ({ className, as = 'h4', ...props }: HeadingProps) => {
  return <Heading as={as} className={cn('text-xl', className)} {...props} />
}

const H5 = ({ className, as = 'h5', ...props }: HeadingProps) => {
  return <Heading as={as} className={cn('text-lg', className)} {...props} />
}

const H6 = ({ className, as = 'h6', ...props }: HeadingProps) => {
  return <Heading as={as} className={cn('text-base', className)} {...props} />
}

export { H1, H2, H3, H4, H5, H6 }
