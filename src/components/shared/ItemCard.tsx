import React from 'react'
import { Button } from '@/components/ui/button.tsx'
import { HeartIcon } from '@/components/ui/icons-pack.tsx'
import { Picture } from '@/components/shared/Picture.tsx'
import { cn } from '@/lib/utils.ts'
import { Item } from '@/data/bestDeals.data.ts'

interface ItemCardProps {
  image: Item['image']
  description: string
  price: string
  className?: string
}

export const ItemCard: React.FC<ItemCardProps> = ({
  image,
  description,
  price,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex w-[173px] flex-col gap-[15px] xl:w-[305px]',
        className,
      )}
    >
      <div className='relative cursor-pointer'>
        <Picture
          src={image.src}
          alt={image.alt}
          srcset={image.srcset}
          type={image.type}
        />
        <div className='mt-[15px]'>
          <HeartIcon className='absolute right-[10px] top-[7px] xl:hidden' />
          <p className='text-sm text-foreground xl:text-base'>{description}</p>
        </div>
      </div>
      <div className='mt-[10px] flex h-6 items-center justify-between xl:mt-5'>
        <span className='text-foreground xl:text-2xl'>{price} UAH</span>
        <HeartIcon className='hidden cursor-pointer xl:block' />
      </div>
      <Button className='rounded-lg py-3 leading-none'>Buy</Button>
    </div>
  )
}
