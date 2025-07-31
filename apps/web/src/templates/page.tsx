import { Header } from '@/components/header'

export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="container mx-auto flex min-h-screen flex-col gap-4 px-4">
      <Header />
      {children}
    </main>
  )
}
