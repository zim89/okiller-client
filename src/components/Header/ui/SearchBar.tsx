import { SearchIcon } from '@/components/ui/icons-pack'
import { LangSwitcher } from './LangSwitcher'

export const SearchBar = () => {
  return (
    <div className='flex flex-1 items-center gap-[11px] xl:flex-none'>
      <div className='relative w-full xl:w-[616px]'>
        <input
          type='text'
          className='w-full rounded-[60px] py-2.5 pl-[48.92px] pr-[105px] placeholder:text-foreground focus:outline-none xl:pl-[58.49px] xl:pr-[133.89px]'
          placeholder="I'm looking for..."
        />
        <button className='absolute right-[2.81px] top-1/2 flex h-9 w-[91px] -translate-y-1/2 items-center justify-center rounded-[60px] bg-primary text-[13px] text-primary-foreground transition-colors duration-300 hover:bg-accent xl:right-[4.89px] xl:w-[117px]'>
          Find
        </button>
        <SearchIcon className='absolute left-[13.07px] top-1/2 -translate-y-1/2 xl:left-[22.49px]' />
      </div>
      <div className='hidden xl:inline-block'>
        <LangSwitcher />
      </div>
    </div>
  )
}
