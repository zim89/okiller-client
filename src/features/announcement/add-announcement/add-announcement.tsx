import { PenIcon } from '@/shared/ui/icons-pack.tsx'
import { useTranslation } from 'react-i18next'

export const AddAnnouncement = () => {
  const { t } = useTranslation()
  return (
    <div className='border-border/60 max-h-[329px] w-[305px] flex-none space-y-7 rounded-[15px] border pb-[89px] pl-[35px] pt-[99px]'>
      <h2 className='w-[189px] text-[24px]/[28.6px] font-medium'>
        {t('titles.announcementTitle')}
      </h2>
      <button className='bg-primary text-primary-foreground hover:bg-accent flex items-center gap-6 rounded-[60px] py-[5px] pl-[37px] pr-[5px] text-base/4 transition-colors duration-300'>
        <span>{t('buttons.addAdvert')}</span>
        <span className='bg-background text-foreground flex size-[43px] items-center justify-center rounded-full'>
          <PenIcon />
        </span>
      </button>
    </div>
  )
}
