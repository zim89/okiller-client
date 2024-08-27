import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { ItemCard, SectionTitle } from '@/components/shared'
import { cn } from '@/lib/utils'
import { newProducts } from '@/data/newProducts.data.tsx'

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
              <ItemCard
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
