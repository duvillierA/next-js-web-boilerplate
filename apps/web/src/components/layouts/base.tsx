import { Footer } from '@/components/page/footer'
import { Header } from '@/components/page/header'
import { Container } from '@boilerplate/ui/layout'
import { VStack } from '@boilerplate/ui/stack'
import { cn } from '@boilerplate/ui/utils'

export const BaseLayout: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Container asChild>
      <VStack className="min-h-screen">
        <Header />
        <main className={cn('flex-1', className)}>{children}</main>
        <Footer />
      </VStack>
    </Container>
  )
}
