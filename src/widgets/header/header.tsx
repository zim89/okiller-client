import { Logo } from '@/shared/ui/logo.tsx'
import { SearchBar } from '../../fetures/search-bar/search-bar.tsx'
import { NavToolbar } from './ui/nav-toolbar.tsx'

export const Header = () => {
  return (
    <header className='bg-primary mx-auto w-full rounded-b-[30px] xl:mt-5 xl:w-[1360px] xl:rounded-[50px]'>
      <div className='flex items-center justify-between px-[11px] py-[17px] xl:px-[38px]'>
        <Logo />
        <SearchBar />
        <NavToolbar />
      </div>
    </header>
  )
}
