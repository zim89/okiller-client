import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Picture, SectionTitle } from '@/components/shared'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { CATEGORIES_DATA } from '@/data/categories.data'

export const PopularCategories = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1440px)')
  const categories = [...CATEGORIES_DATA].sort((a, b) => b.rating - a.rating)

  return (
    <section className='pt-[52px] xl:pt-[116px]'>
      <div className='container'>
        <SectionTitle title='Popular categories' />

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className='mb-[43px]'>
            <ul className='grid grid-cols-2 gap-x-2.5 gap-y-8 xl:grid-cols-7 xl:gap-x-[38px]'>
              {categories.slice(0, isDesktop ? 7 : 6).map(cat => (
                <li key={cat.name}>
                  <Link to={`/`} className='space-y-[15px]'>
                    <div className='size-[172px] rounded-full xl:size-[150px]'>
                      <Picture
                        src={cat.image.src}
                        alt={cat.image.alt}
                        srcset={cat.image.srcset}
                        type={cat.image.type}
                      />
                    </div>
                    <h3 className='line-clamp-1 text-center text-base/[20.8px]'>
                      {cat.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
            <CollapsibleContent>
              <ul className='mt-[15px] grid grid-cols-2 gap-x-2.5 gap-y-8 xl:grid-cols-7 xl:gap-x-[38px]'>
                {categories
                  .slice(isDesktop ? 7 : 6, categories.length)
                  .map(cat => (
                    <li key={cat.name} className='space-y-[15px]'>
                      <div className='size-[172px] rounded-full xl:size-[150px]'>
                        <Picture
                          src={cat.image.src}
                          alt={cat.image.alt}
                          srcset={cat.image.srcset}
                          type={cat.image.type}
                        />
                      </div>
                      <h3 className='line-clamp-1 text-center text-base/[20.8px]'>
                        {cat.title}
                      </h3>
                    </li>
                  ))}
              </ul>
            </CollapsibleContent>
          </div>

          <CollapsibleTrigger className='w-full rounded-[60px] border border-border py-[13px] text-center text-[13px]/[13px] transition-colors duration-300 hover:bg-accent hover:text-accent-foreground xl:text-base/4'>
            {isOpen ? 'Show less' : 'Show all categories'}
          </CollapsibleTrigger>
        </Collapsible>
      </div>
    </section>
  )
}
