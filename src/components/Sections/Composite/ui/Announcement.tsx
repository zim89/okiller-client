import { PenIcon } from '@/components/ui/icons-pack'

export const Announcement = () => {
  return (
    <div className='max-h-[329px] w-[305px] flex-none space-y-7 rounded-[15px] border border-border/60 pb-[89px] pl-[35px] pt-[99px]'>
      <h2 className='w-[189px] text-[24px]/[28.6px] font-medium'>
        Add your own announcement
      </h2>
      <button className='flex items-center gap-6 rounded-[60px] bg-primary py-[5px] pl-[37px] pr-[5px] text-base/4 text-primary-foreground transition-colors duration-300 hover:bg-accent'>
        <span>To add an advert</span>
        <span className='flex size-[43px] items-center justify-center rounded-full bg-background text-foreground'>
          <PenIcon />
        </span>
      </button>
    </div>
  )
}
