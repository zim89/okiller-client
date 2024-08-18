import { AccountButton } from './AccountButton'
import { CartButton } from './CartButton'
import { FavoriteButton } from './FavoriteButton'

export const NavToolbar = () => {
  return (
    <ul className='hidden xl:flex xl:items-center xl:gap-5'>
      <AccountButton />
      <FavoriteButton />
      <CartButton />
    </ul>
  )
}
