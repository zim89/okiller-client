import { useEffect, useState } from 'react'
import { ProductCard } from '@/entities/product/product-card.tsx'
import { newProducts } from '@/fetures/new-products/api/new-products.data.tsx'
import { cn } from '@/shared/lib/utils/cn-merge.ts'
import { SectionTitle } from '@/shared/ui'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/shared/ui/shadcn-ui/carousel.tsx'
import { useTranslation } from 'react-i18next'

export const NewProductsSlider = () => {
  const [api, setApi] = useState<CarouselApi>(),
    [current, setCurrent] = useState(0),
    [count, setCount] = useState(0)
  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Pairing the card for slider realization
  const chunkArray = (array: typeof newProducts, size: number) => {
    return array.reduce(
      (result, item, index) => {
        if (item && index % size === 0) {
          result.push(array.slice(index, index + size))
        }
        return result
      },
      [] as (typeof newProducts)[],
    )
  }
  const dealPairs = chunkArray(newProducts, 2)
  const { t } = useTranslation()

  return (
    <Carousel
      className='mb-6 mt-[19px]'
      setApi={setApi}
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <SectionTitle title={t('titles.newProductsTitle')} />
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
                'hover:bg-primary size-2 rounded-full transition-colors duration-300',
                isActive ? 'bg-primary' : 'bg-border',
              )}
            />
          )
        })}
      </div>
    </Carousel>
  )
}
