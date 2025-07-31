import { Footer } from '@/components/page/footer'
import { Header } from '@/components/page/header'

export const BaseLayout: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col gap-4 px-4">
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  )
}
