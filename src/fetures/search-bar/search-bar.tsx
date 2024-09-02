import { SearchIcon } from '@/shared/assets/icons-pack.tsx'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from '../lang-switcher/lang-switcher.tsx'

export const SearchBar = () => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-1 items-center gap-[11px] xl:flex-none'>
      <div className='relative w-full xl:w-[616px]'>
        <input
          name='search'
          type='text'
          className='placeholder:text-foreground w-full rounded-[60px] py-2.5 pl-[48.92px] pr-[105px] focus:outline-none xl:pl-[58.49px] xl:pr-[133.89px]'
          placeholder={t('inputs.searchPlaceholder')}
        />
        <button className='bg-primary text-primary-foreground hover:bg-accent absolute right-[2.81px] top-1/2 flex h-9 w-[91px] -translate-y-1/2 items-center justify-center rounded-[60px] text-[13px] transition-colors duration-300 xl:right-[4.89px] xl:w-[117px]'>
          {t('buttons.searchButton')}
        </button>
        <SearchIcon className='absolute left-[13.07px] top-1/2 -translate-y-1/2 xl:left-[22.49px]' />
      </div>
      <div className='hidden xl:inline-block'>
        <LangSwitcher />
      </div>
    </div>
  )
}
