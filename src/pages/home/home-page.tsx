import { BestDeals } from '@/widgets/best-deals'
import { PopularCategories } from '@/widgets/category-popular'
import { Hero, HeroSlider } from '@/widgets/hero'
import { NewProductsSlider } from '@/widgets/new-products'
import { PromoSection } from '@/widgets/promo'

export const HomePage = () => {
  return (
    <div className='overflow-x-hidden pt-[15px] xl:pt-[27px]'>
      <div className='container xl:hidden'>
        <HeroSlider />
      </div>
      <div className='container xl:hidden'>
        <NewProductsSlider />
      </div>
      <div className='container hidden xl:block'>
        <Hero />
      </div>

      <PopularCategories />
      <BestDeals />

      <PromoSection />
    </div>
  )
}
