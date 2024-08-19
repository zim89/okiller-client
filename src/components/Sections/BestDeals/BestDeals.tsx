import { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ItemCard, SectionTitle } from '@/components/shared'
import { useMediaQuery } from '@/hooks/useMediaQuery.ts'
import { items } from '@/data/bestDeals.data.ts'

export const BestDeals = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1440px)')

  return (
    <section className='container flex flex-col pt-[83px] xl:pt-[122px]'>
      <SectionTitle title='Best deals' />
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className='grid grid-cols-2 gap-x-[10px] gap-y-[35px] self-center md:grid-cols-3 xl:grid-cols-4 xl:gap-x-5 xl:gap-y-[50px]'>
          {items.slice(0, isDesktop ? 16 : 8).map(item => (
            <ItemCard
              key={item.id}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
        <CollapsibleContent>
          <div className='mt-[35px] grid grid-cols-2 gap-x-[10px] gap-y-[35px] self-center md:grid-cols-3 xl:mt-[50px] xl:grid-cols-4 xl:gap-x-5 xl:gap-y-[50px]'>
            {items
              .slice(isDesktop ? 16 : 8, isDesktop ? items.length : 16)
              .map(item => (
                <ItemCard
                  key={item.id}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                />
              ))}
          </div>
        </CollapsibleContent>
        <CollapsibleTrigger className='mt-[45px] w-full rounded-[60px] border border-border py-[13px] text-center text-[13px]/[13px] transition-colors duration-300 hover:bg-accent hover:text-accent-foreground xl:text-base/4'>
          {isOpen ? 'Show less' : 'Load more'}
        </CollapsibleTrigger>
      </Collapsible>
    </section>
  )
}
