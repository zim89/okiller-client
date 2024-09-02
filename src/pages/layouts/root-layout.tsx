import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div className='grid min-h-screen grid-rows-[_auto_1fr_auto]'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
