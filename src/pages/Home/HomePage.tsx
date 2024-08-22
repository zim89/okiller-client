import {
  BestDeals,
  NewProductsSlider,
  PromoSection,
} from '@/components/Sections'
import { CompositeSection } from '@/components/Sections/Composite'
import { Hero } from '@/components/Sections/Hero'
import { PopularCategories } from '@/components/Sections/PopularCategories/PopularCategories'

export const HomePage = () => {
  return (
    <div className='overflow-x-hidden pt-[15px] xl:pt-[27px]'>
      <div className='container xl:hidden'>
        <Hero />
      </div>
      <div className='container xl:hidden'>
        <NewProductsSlider />
      </div>
      <div className='container hidden xl:block'>
        <CompositeSection />
      </div>

      <PopularCategories />
      <BestDeals />
      <PromoSection />
    </div>
  )
}
