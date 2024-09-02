import { MainSlider } from '@/fetures/main-slider'
import { NewProducts } from '@/fetures/new-products/new-products.tsx'
import { AddAnnouncement } from '../../fetures/announcement/add-announcement/add-announcement.tsx'
import { AsideNav } from '../../fetures/categories/aside-nav.tsx'

export const HeroSection = () => {
  return (
    <section className='flex items-start gap-[6px]'>
      <div className='flex-shrink-0'>
        <AsideNav />
      </div>
      <div className='flex-1'>
        <div className='flex max-w-[955px] gap-5'>
          <MainSlider />
          <AddAnnouncement />
        </div>
        <NewProducts />
      </div>
    </section>
  )
}
