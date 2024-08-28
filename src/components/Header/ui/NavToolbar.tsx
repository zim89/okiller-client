import { ProfileDropdown } from '@/components/Header/ui/ProfileMenu.tsx'
import { CartButton } from './CartButton'
import { FavoriteButton } from './FavoriteButton'

export const NavToolbar = () => {
  return (
    <ul className='hidden xl:flex xl:items-center xl:gap-5'>
      <ProfileDropdown />
      <FavoriteButton />
      <CartButton />
    </ul>
  )
}
