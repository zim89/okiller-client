import { Hero } from '@/components/Sections/Hero'
import { Announcement } from './ui/Announcement'
import { AsideNav } from './ui/AsideNav'

export const CompositeSection = () => {
  return (
    <section className='flex gap-[49px]'>
      <AsideNav />
      <div className='flex-1'>
        <div className='flex items-start gap-5'>
          <Hero />
          <Announcement />
        </div>
      </div>
    </section>
  )
}
