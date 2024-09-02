import React from 'react'
import { ProductCard } from '@/entities/product/product-card.tsx'
import { newProducts } from '@/fetures/new-products/api/new-products.data.tsx'
import { SectionTitle } from '@/shared/ui'
import { useTranslation } from 'react-i18next'

export const NewProducts: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section className='mt-[50px] flex overflow-hidden'>
      <div className='max-w-[1150px] overflow-x-auto xl:w-[calc(100vw-var(--aside-nav-width)-var(--extra-padding))] xl:min-w-[1030px]'>
        <SectionTitle title={t('titles.newProductsTitle')} />
        <div className='flex gap-[7px] overflow-x-auto pb-[50px] pr-4 xl:gap-5'>
          {newProducts.map(deal => (
            <div key={deal.id}>
              <ProductCard
                image={deal.image}
                description={deal.description}
                price={deal.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
