import React from 'react'
import { ItemCard, SectionTitle } from '@/components/shared'
import { newDeals } from '@/data/newProducts.data.tsx'

export const NewProducts: React.FC = () => {
  return (
    <section className='mt-[50px] flex overflow-hidden'>
      <div className='w-[calc(100vw-var(--aside-nav-width)-var(--extra-padding))] min-w-[1019px] max-w-[1150px] overflow-x-auto'>
        <SectionTitle title='New Products' />
        <div className='flex gap-1.5 overflow-x-auto pb-[50px] pr-4'>
          {newDeals.map(deal => (
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

// max-w-[calc(100vw-var(--aside-nav-width)-var(--extra-padding))]
