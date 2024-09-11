import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ProductCard } from '@/widgets/product-card'
import { NEW_PRODUCTS } from '@/entities/product'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/shared/ui/shadcn-ui/carousel.tsx'
import { SectionTitle } from '@/shared/ui'
import { cn } from '@/shared/lib/utils'

interface ProductSliderProps {
  titleKey: string // Translation key for the title
  products: typeof NEW_PRODUCTS // Products array
  chunkSize?: number // Default chunk size for pairing
}

export const ProductSlider: React.FC<ProductSliderProps> = ({
  titleKey,
  products,
  chunkSize = 2,
}) => {
  const [api, setApi] = useState<CarouselApi>(),
    [current, setCurrent] = useState(0),
    [count, setCount] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Pairing the card for slider realization
  const chunkArray = (array: typeof NEW_PRODUCTS, size: number) => {
    return array.reduce(
      (result, item, index) => {
        if (item && index % size === 0) {
          result.push(array.slice(index, index + size))
        }
        return result
      },
      [] as (typeof NEW_PRODUCTS)[],
    )
  }

  const dealPairs = chunkArray(products, chunkSize)

  return (
    <Carousel
      className='mb-6 mt-[19px]'
      setApi={setApi}
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <SectionTitle title={t(titleKey)} />
      <CarouselContent>
        {dealPairs.map((pair, index) => (
          <CarouselItem key={index} className='flex gap-[10px]'>
            {pair.map(deal => (
              <ProductCard
                key={deal.id}
                image={deal.image}
                description={deal.description}
                price={deal.price}
              />
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* DOTS */}
      <div className='absolute bottom-[-24px] left-1/2 flex -translate-x-1/2 items-center gap-1'>
        {Array.from({ length: count }).map((_, index) => {
          const isActive = index === current - 1

          return (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'size-2 rounded-full transition-colors duration-300 hover:bg-primary',
                isActive ? 'bg-primary' : 'bg-border',
              )}
            />
          )
        })}
      </div>
    </Carousel>
  )
}