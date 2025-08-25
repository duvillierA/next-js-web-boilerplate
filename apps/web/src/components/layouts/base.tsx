import { PageContent } from '@/components/page/content'
import { PageFooter } from '@/components/page/footer'
import { PageHeader } from '@/components/page/header'
import { Container, Grid } from '@boilerplate/ui/layout'

export const BaseLayout: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Container asChild>
      <Grid rows="auto 1fr auto" className="min-h-screen">
        <PageHeader />
        <PageContent className={className}>{children}</PageContent>
        <PageFooter />
      </Grid>
    </Container>
  )
}
