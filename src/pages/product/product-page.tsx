import {
  ProductsBySeller,
  ProductsBySellerSlider,
} from '@/widgets/other-products-by-seller'
import { ProductDetails } from '@/widgets/product-details/product-details.tsx'
import {
  SimilarProducts,
  SimilarProductsSlider,
} from '@/widgets/similar-products'

export const ProductPage = () => {
  return (
    <div className='container mt-[27px] md:mt-[38px]'>
      <ProductDetails />
      <div className='mt-[128px] hidden min-h-[277px] md:relative md:block xl:min-h-[493px]'>
        <ProductsBySeller />
      </div>
      <div className='mt-[61px] md:hidden'>
        <ProductsBySellerSlider />
      </div>
      <div className='mt-[128px] hidden min-h-[277px] md:relative md:block xl:min-h-[493px]'>
        <SimilarProducts />
      </div>
      <div className='mt-[80px] md:hidden'>
        <SimilarProductsSlider />
      </div>
    </div>
  )
}
