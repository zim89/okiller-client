import { UserMenu } from '@/entities/user'
import { CartButton } from '@/widgets/cart-button'
import { FavoriteButton } from '@/widgets/favorite-button'

export const NavToolbar = () => {
  return (
    <ul className='hidden xl:flex xl:items-center xl:gap-5'>
      <UserMenu />
      <FavoriteButton />
      <CartButton />
    </ul>
  )
}
