import React from 'react'
import { useTranslation } from 'react-i18next'
import { ItemCard, SectionTitle } from '@/components/shared'
import { newProducts } from '@/data/newProducts.data.tsx'

export const NewProducts: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section className='mt-[50px] flex overflow-hidden'>
      <div className='max-w-[1150px] overflow-x-auto xl:w-[calc(100vw-var(--aside-nav-width)-var(--extra-padding))] xl:min-w-[1030px]'>
        <SectionTitle title={t('titles.newProductsTitle')} />
        <div className='flex gap-[7px] overflow-x-auto pb-[50px] pr-4 xl:gap-5'>
          {newProducts.map(deal => (
            <div key={deal.id}>
              <ItemCard
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
