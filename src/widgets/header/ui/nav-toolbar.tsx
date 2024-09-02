import { FavoriteButton } from '@/entities/favorite/ui/favorite-button.tsx'
import { ProfileDropdown } from '@/entities/user/ui/profile-menu.tsx'
import { CartButton } from '@/shared/ui/cart-button.tsx'

export const NavToolbar = () => {
  return (
    <ul className='hidden xl:flex xl:items-center xl:gap-5'>
      <ProfileDropdown />
      <FavoriteButton />
      <CartButton />
    </ul>
  )
}
