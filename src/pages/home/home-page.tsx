import { BestDeals, NewProductsSlider, PromoSection } from '@/fetures'
import { PopularCategories } from '@/fetures/categories/popular-categories.tsx'
import { MainSlider } from '@/fetures/main-slider'
import { HeroSection } from '@/widgets/hero'

export const HomePage = () => {
  return (
    <div className='overflow-x-hidden pt-[15px] xl:pt-[27px]'>
      <div className='container xl:hidden'>
        <MainSlider />
      </div>
      <div className='container xl:hidden'>
        <NewProductsSlider />
      </div>
      <div className='container hidden xl:block'>
        <HeroSection />
      </div>

      <PopularCategories />
      <BestDeals />
      <PromoSection />
    </div>
  )
}
