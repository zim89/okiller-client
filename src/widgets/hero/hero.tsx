import { AddAnnouncement } from '@/features/announcement/add-announcement'
import { AsideNav } from '@/widgets/aside-nav'
import { NewProducts } from '@/widgets/new-products'
import { HeroSlider } from './ui/hero-slider.tsx'

export const Hero = () => {
  return (
    <section className='flex items-start gap-[6px]'>
      <div className='flex-shrink-0'>
        <AsideNav />
      </div>
      <div className='flex-1'>
        <div className='flex max-w-[955px] gap-5'>
          <HeroSlider />
          <AddAnnouncement />
        </div>
        <NewProducts />
      </div>
    </section>
  )
}
