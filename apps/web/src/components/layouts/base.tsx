import { Footer } from '@/components/page/footer'
import { Header } from '@/components/page/header'
import { Container, Grid } from '@boilerplate/ui/layout'
import { cn } from '@boilerplate/ui/utils'

export const BaseLayout: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Container asChild>
      <Grid rows="auto 1fr auto" className="min-h-screen">
        <Header />
        <main className={cn(className)}>{children}</main>
        <Footer />
      </Grid>
    </Container>
  )
}
