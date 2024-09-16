import { Link } from 'react-router-dom'

import { WOMEN_CLOTHING } from '@/entities/category/mock'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/ui/shadcn-ui/carousel'

export const CategorySlider = () => {
  return (
    <div className='hidden xl:block xl:pb-[52px] xl:pl-20'>
      <Carousel className=''>
        <CarouselContent className='-ml-[51px]'>
          {WOMEN_CLOTHING.map(item => (
            <CarouselItem
              key={item.label}
              className='min-w-[150px] flex-none space-y-[15px] pl-[51px] text-center'
            >
              <Link to={item.href}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className='block size-[150px] rounded-full object-contain'
                />
                <p>{item.label}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className='container pl-0 pt-[38px]'>
          <div className='ml-auto flex h-px w-[413px] items-center bg-border'>
            <div className='h-[3px] w-1/12 bg-primary' />
          </div>
        </div>
      </Carousel>
    </div>
  )
}
