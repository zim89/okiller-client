import { CATEGORIES_DATA } from '@/fetures/categories/api/categories.data.ts'
import { CommentIcon, TruckIcon } from '@/shared/assets/icons-pack.tsx'
import { Separator } from '@/shared/ui/shadcn-ui'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/shared/ui/shadcn-ui/menubar.tsx'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const AsideNav = () => {
  const { t } = useTranslation()
  return (
    <aside className='w-[310px]'>
      <Menubar className='h-auto rounded-none border-0 p-0'>
        <ul className='space-y-2.5'>
          {CATEGORIES_DATA.map(cat => (
            <li key={cat.name}>
              <MenubarMenu key={cat.name}>
                <MenubarTrigger className='hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground flex w-full cursor-pointer items-center justify-between gap-3 rounded-[81px] border-0 py-0.5 pl-1 pr-0 text-base/4 font-normal transition-colors duration-300'>
                  <cat.icon />
                  <p className='flex-1 text-start'>{cat.title}</p>
                  <ChevronRight />
                </MenubarTrigger>
                <MenubarContent
                  side='right'
                  sideOffset={15}
                  className='bg-background text-foreground grid grid-cols-3 gap-[50px] rounded-[15px] border-none px-[75px] py-12 shadow-[1px_1px_5px_0_rgba(78,78,78,0.19)]'
                >
                  {cat.sub.map(sub => (
                    <div key={sub.label} className='space-y-5'>
                      <h4 className='text-base/[19.36px] font-semibold'>
                        {sub.label}
                      </h4>
                      <ul className='space-y-2.5'>
                        {sub.items.map(item => (
                          <li key={item.label}>
                            <Link to={item.href}>
                              <MenubarItem className='focus:bg-background focus:text-accent inline-block cursor-pointer bg-none p-0 text-base/[19.36px] font-normal transition-colors duration-300'>
                                {item.label}
                              </MenubarItem>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </li>
          ))}
        </ul>
      </Menubar>
      <div className='flex items-center justify-center py-[27px] pr-[43px]'>
        <Separator className='bg-muted' />
      </div>
      <div className='felx flex-col space-y-2'>
        <div className='hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground flex w-[271px] cursor-pointer items-center justify-between gap-3 rounded-[81px] py-0.5 pl-1 transition-colors duration-300'>
          <TruckIcon />
          <p className='flex-1'>{t('asideLinks.trackParcel')}</p>
        </div>
        <div className='hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground flex w-[271px] cursor-pointer items-center justify-between gap-3 rounded-[81px] py-0.5 pl-1 transition-colors duration-300'>
          <CommentIcon />
          <p className='flex-1'>{t('asideLinks.helpCenter')}</p>
        </div>
      </div>
    </aside>
  )
}
