import { Hero } from '@/components/Sections/Hero'
import { NewProducts } from '@/components/Sections/NewProducts/NewProducts.tsx'
import { Announcement } from './ui/Announcement'
import { AsideNav } from './ui/AsideNav'

export const CompositeSection = () => {
  return (
    <section className='flex items-start gap-[6px]'>
      <div className='flex-shrink-0'>
        <AsideNav />
      </div>
      <div className='flex-1'>
        <div className='flex max-w-[955px] gap-5'>
          <Hero />
          <Announcement />
        </div>
        <NewProducts />
      </div>
    </section>
  )
}
